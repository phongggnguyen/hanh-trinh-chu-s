# 🚀 Hướng Dẫn Deploy lên Vercel - Khắc Phục Lỗi OpenTelemetry

## ❌ Vấn đề gặp phải

Khi deploy Next.js app sử dụng **Genkit** lên Vercel, bạn gặp lỗi:

```
Module not found: Can't resolve '@opentelemetry/exporter-jaeger'
in '/vercel/path0/node_modules/@opentelemetry/sdk-node/build/src'
```

## 🔍 Nguyên nhân

1. **Genkit** sử dụng **OpenTelemetry SDK** để tracing/monitoring
2. OpenTelemetry SDK có references đến các **optional exporters** như:
   - `@opentelemetry/exporter-jaeger`
   - `@opentelemetry/exporter-zipkin`
   - `@opentelemetry/exporter-prometheus`
3. Webpack cố gắng resolve tất cả imports khi build, kể cả optional dependencies
4. Các packages này không được cài đặt và **không cần thiết cho production**

## ✅ Giải pháp đã áp dụng

### 1. Cấu hình Webpack trong `next.config.ts`

Đã thêm configuration để webpack **ignore** các OpenTelemetry optional dependencies:

```typescript
webpack: (config, { isServer }) => {
  if (isServer) {
    // Externalize OpenTelemetry optional packages
    config.externals = config.externals || [];
    config.externals.push({
      '@opentelemetry/exporter-jaeger': 'commonjs @opentelemetry/exporter-jaeger',
      '@opentelemetry/exporter-zipkin': 'commonjs @opentelemetry/exporter-zipkin',
      '@opentelemetry/exporter-prometheus': 'commonjs @opentelemetry/exporter-prometheus',
    });

    // Ignore warnings about missing optional dependencies
    config.ignoreWarnings = [
      { module: /node_modules\/@opentelemetry/ },
      /Critical dependency: the request of a dependency is an expression/,
    ];
  }
  return config;
}
```

**Giải thích:**
- `config.externals.push()`: Đánh dấu các package này là external modules, webpack sẽ không bundle chúng
- `config.ignoreWarnings`: Bỏ qua các warnings về OpenTelemetry để build log sạch hơn
- `if (isServer)`: Chỉ áp dụng cho server-side bundle (Next.js API routes, Server Components)

### 2. Tạo file `.npmrc`

Đã tạo file `.npmrc` để đảm bảo npm không cố gắng cài các optional dependencies:

```
optional=false
legacy-peer-deps=false
```

## 📋 Các bước deploy lên Vercel

### Bước 1: Test build locally

Trước khi deploy, test build trên máy local:

```bash
# Clean install
rm -rf node_modules .next
npm install

# Run type check
npm run typecheck

# Build project
npm run build
```

**Kết quả mong đợi:**
- ✅ Build thành công không có lỗi
- ✅ Không có warning về OpenTelemetry
- ✅ Folder `.next` được tạo

### Bước 2: Commit changes

Commit các thay đổi lên Git:

```bash
git add .
git commit -m "fix: resolve OpenTelemetry dependencies for Vercel deployment"
git push origin main
```

### Bước 3: Deploy lên Vercel

#### Option A: Auto Deploy (Khuyến nghị)

Nếu đã kết nối GitHub với Vercel:

1. Push code lên GitHub
2. Vercel sẽ **tự động deploy**
3. Đợi 2-3 phút
4. Kiểm tra deployment logs tại Vercel Dashboard

#### Option B: Manual Deploy

Nếu chưa kết nối GitHub:

1. Truy cập https://vercel.com/new
2. Chọn **"Import Git Repository"**
3. Chọn repository `hanh-trinh-chu-s`
4. **Environment Variables**:
   ```
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```
5. Click **"Deploy"**

### Bước 4: Verify Deployment

Sau khi deploy xong:

1. Mở URL production: `https://hanh-trinh-chu-s.vercel.app`
2. Test các chức năng:
   - ✅ Bản đồ hiển thị đúng
   - ✅ Click vào tỉnh được
   - ✅ Generate quiz questions hoạt động
   - ✅ Power-ups hoạt động
   - ✅ LocalStorage lưu tiến trình

## 🐛 Troubleshooting

### Vẫn gặp lỗi OpenTelemetry sau khi deploy?

**Giải pháp 1: Clear Vercel build cache**

```bash
# Vercel Dashboard → Settings → General → Clear Build Cache
# Hoặc dùng CLI:
vercel --force
```

**Giải pháp 2: Thêm vào package.json**

Nếu vẫn lỗi, thêm vào `package.json`:

```json
{
  "overrides": {
    "@opentelemetry/sdk-node": {
      "@opentelemetry/exporter-jaeger": "npm:@opentelemetry/exporter-jaeger@*"
    }
  }
}
```

Rồi:
```bash
npm install
git add package.json package-lock.json
git commit -m "fix: add OpenTelemetry overrides"
git push
```

**Giải pháp 3: Disable OpenTelemetry trong Genkit (tùy chọn)**

Nếu không cần tracing, sửa `src/ai/genkit.ts`:

```typescript
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    })
  ],
  model: 'googleai/gemini-2.5-pro',

  // Disable telemetry in production
  telemetry: {
    instrumentation: null,
    logger: null,
  },
});
```

### Lỗi build timeout trên Vercel?

**Nguyên nhân:** Build quá lâu (>10 phút trên free tier)

**Giải pháp:**

1. Upgrade lên Vercel Pro ($20/tháng) - build timeout 45 phút
2. Hoặc optimize build:
   ```typescript
   // next.config.ts
   experimental: {
     optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
   }
   ```

### Lỗi "Rate limit exceeded" khi generate quiz?

**Nguyên nhân:** API key Google AI free tier bị giới hạn

**Giải pháp:**

1. Đợi vài phút rồi thử lại
2. Hoặc implement caching:

```typescript
// src/actions/quiz.actions.ts
const QUIZ_CACHE = new Map();

export async function getQuizForProvince(provinceName: string) {
  // Check cache first
  if (QUIZ_CACHE.has(provinceName)) {
    return QUIZ_CACHE.get(provinceName);
  }

  // Generate and cache
  const quiz = await generateQuiz(provinceName);
  QUIZ_CACHE.set(provinceName, quiz);
  return quiz;
}
```

## 📊 Monitoring

### Check deployment logs

```bash
# View deployment logs
vercel logs https://hanh-trinh-chu-s.vercel.app

# View build logs
vercel logs --build https://hanh-trinh-chu-s.vercel.app
```

### Enable Vercel Analytics (Optional)

1. Vercel Dashboard → Analytics → Enable
2. Add to `src/app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## ✅ Checklist

Trước khi deploy, đảm bảo:

- [x] Đã sửa `next.config.ts` với webpack config
- [x] Đã tạo file `.npmrc`
- [x] Build thành công locally (`npm run build`)
- [x] Đã set `GOOGLE_GENAI_API_KEY` trong Vercel
- [x] Đã commit và push code lên Git
- [x] Deployment thành công trên Vercel
- [x] Test các chức năng chính hoạt động

## 🎉 Kết luận

Sau khi áp dụng các giải pháp trên, project của bạn sẽ:

- ✅ Build thành công trên Vercel
- ✅ Không còn lỗi OpenTelemetry
- ✅ Genkit hoạt động bình thường
- ✅ Game chạy mượt mà trên production

**Nếu vẫn gặp vấn đề**, hãy check:
1. Vercel deployment logs
2. Browser console errors
3. Network tab trong DevTools

---

**Made with ❤️ for Vietnam 🇻🇳**
