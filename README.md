# 🇻🇳 Hành Trình Chữ S

**Game web tương tác khám phá 63 tỉnh thành Việt Nam**

Một trò chơi giáo dục kết hợp giải trí, giúp bạn tìm hiểu về văn hóa, lịch sử, đặc sản và điểm du lịch của các tỉnh thành Việt Nam thông qua các câu hỏi trắc nghiệm thú vị.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

**Link Demo:** https://hanh-trinh-chu-s.vercel.app/

---

## 📖 Giới Thiệu

**Hành Trình Chữ S** là một game web giáo dục được xây dựng với mục đích quảng bá văn hóa và du lịch Việt Nam. Người chơi sẽ:

- 🗺️ **Khám phá** cả 63 tỉnh/thành phố Việt Nam trên bản đồ tương tác
- 🎯 **Trả lời** các câu hỏi về đặc sản, địa danh, văn hóa của từng tỉnh
- 🏆 **Chinh phục** từng vùng đất bằng cách vượt qua quiz
- 📚 **Học hỏi** kiến thức về đất nước Việt Nam một cách thú vị

### ✨ Tính Năng Nổi Bật

- ✅ **63 tỉnh/thành phố** đầy đủ với dữ liệu chính xác về tỉnh tiếp giáp
- 🤖 **AI tạo câu hỏi** tự động bằng Gemini 2.5 Pro
- 🎨 **Ảnh minh họa** được tạo bởi AI (Gemini 2.5 Flash Image) cho mỗi câu hỏi
- ⚡ **Power-ups hấp dẫn**:
  - 💣 50/50: Loại bỏ 2 đáp án sai
  - ⏰ +15 giây: Thêm thời gian
- 💾 **Lưu tiến trình** tự động vào LocalStorage
- 📱 **Responsive** - chơi được trên mọi thiết bị
- 🎮 **Gameplay** mượt mà với hiệu ứng animation đẹp mắt
- 📖 **Sổ Tay Du Lịch** - theo dõi các tỉnh đã chinh phục
- ⚙️ **Settings** - Reset game và cài đặt khác

### 🎮 Cách Chơi

1. **Bắt đầu** từ Hà Nội hoặc TP. Hồ Chí Minh (2 tỉnh được mở khóa sẵn)
2. **Click** vào tỉnh đã mở khóa (màu vàng nhấp nháy)
3. **Trả lời** 5 câu hỏi về tỉnh đó (thời gian: 30 giây/câu)
4. **Sử dụng power-ups** khi cần thiết
5. **Đạt** ít nhất 4/5 câu đúng để chinh phục tỉnh
6. **Mở khóa** các tỉnh tiếp giáp
7. **Tiếp tục** cho đến khi chinh phục hết 63 tỉnh!

**Điều kiện chiến thắng:** Trả lời đúng ít nhất **4/5 câu hỏi**

---

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **Next.js 15.3.3** - React framework với App Router
- **React 18.3.1** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components

### AI & Backend
- **Google Gemini 2.5 Pro** - Tạo câu hỏi quiz thông minh
- **Gemini 2.5 Flash Image** - Tạo ảnh minh họa
- **Genkit 1.13** - AI orchestration framework
- **Firebase Genkit** - AI workflow management

### Thư Viện Khác
- **Lucide React** - Beautiful icons
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **LocalStorage API** - Lưu trữ tiến trình game

---

## 📥 Hướng Dẫn Cài Đặt

### Yêu Cầu Hệ Thống

- **Node.js**: >= 20.x
- **npm**: >= 9.x (hoặc yarn, pnpm)
- **Browser**: Chrome, Firefox, Safari, Edge (phiên bản mới nhất)
- **Google AI API Key**: Miễn phí tại [Google AI Studio](https://aistudio.google.com/apikey)

### Bước 1: Clone Repository

```bash
git clone https://github.com/your-username/hanh-trinh-chu-s.git
cd hanh-trinh-chu-s
```

### Bước 2: Cài Đặt Dependencies

```bash
npm install
```

Hoặc nếu dùng yarn:

```bash
yarn install
```

**Lưu ý:** Quá trình cài đặt có thể mất 1-2 phút.

### Bước 3: Cấu Hình Environment Variables

Tạo file `.env.local` trong thư mục gốc của project:

```bash
# .env.local
GOOGLE_GENAI_API_KEY=your_google_ai_api_key_here
```

**Cách lấy Google AI API Key (MIỄN PHÍ):**

1. Truy cập [Google AI Studio](https://aistudio.google.com/apikey)
2. Đăng nhập bằng tài khoản Google
3. Click **"Create API Key"** hoặc **"Get API Key"**
4. Chọn project hoặc tạo mới
5. Copy API key và paste vào file `.env.local`

**Ví dụ file `.env.local`:**

```bash
GOOGLE_GENAI_API_KEY=AIzaSyD1234567890abcdefghijklmnopqrstuv
```

**Lưu ý quan trọng:**
- ⚠️ **KHÔNG** commit file `.env.local` lên git
- ⚠️ API key miễn phí có giới hạn: 15 requests/phút, 1500 requests/ngày
- ⚠️ Nếu bị rate limit, đợi vài phút rồi thử lại

### Bước 4: Chạy Development Server

```bash
npm run dev
```

Hoặc với Genkit (để test AI flows):

```bash
# Terminal 1: Chạy Next.js
npm run dev

# Terminal 2: Chạy Genkit Dev UI
npm run genkit:dev
```

Server sẽ chạy tại:
- **Game**: http://localhost:9003
- **Genkit UI**: http://localhost:4000 (nếu chạy genkit:dev)

### Bước 5: Mở Browser

Truy cập **http://localhost:9003** để chơi game!

### Bước 6: Build Production (Optional)

```bash
# Build project
npm run build

# Chạy production build
npm start
```

---

## 🎯 Hướng Dẫn Sử Dụng Chi Tiết

### 1️⃣ Giao Diện Chính

Khi mở game, bạn sẽ thấy:

```
┌─────────────────────────────────────────────┐
│  Hành Trình Chữ S    📖 Sổ Tay   ⚙️ Cài Đặt │
├─────────────────────────────────────────────┤
│                                             │
│           🗺️ BẢN ĐỒ VIỆT NAM                │
│                                             │
│   🟢 = Đã chinh phục                        │
│   🟡 = Đã mở khóa (có thể chơi)             │
│   ⚫ = Bị khóa (chưa thể chơi)               │
│                                             │
└─────────────────────────────────────────────┘
```

**Các thành phần:**
- **Tiêu đề game** - Góc trên bên trái
- **📖 Sổ Tay Du Lịch** - Góc trên bên phải (xem tỉnh đã chinh phục)
- **⚙️ Cài Đặt** - Góc trên bên phải (reset game, xem info)
- **Bản đồ SVG tương tác** - Ở giữa màn hình

### 2️⃣ Chơi Quiz

**Khi click vào một tỉnh, bạn sẽ thấy:**

```
┌──────────────────────────────────────────────┐
│ KHÁM PHÁ: HÀ NỘI              Câu 1/5    ✕  │
├──────────────────────────────────────────────┤
│ ████████████░░░░░░░░░░ (20%)                │
├──────────────────────────────────────────────┤
│                                              │
│  🖼️ [Hình ảnh minh họa được tạo bởi AI]      │
│                                              │
│  ❓ Đặc sản nổi tiếng của Hà Nội là gì?       │
│                                              │
│  ┌─────────────────┐ ┌─────────────────┐    │
│  │ A. Phở          │ │ B. Bún Chả      │    │
│  └─────────────────┘ └─────────────────┘    │
│  ┌─────────────────┐ ┌─────────────────┐    │
│  │ C. Cơm Tấm      │ │ D. Bánh Xèo     │    │
│  └─────────────────┘ └─────────────────┘    │
│                                              │
├──────────────────────────────────────────────┤
│ 💣 50/50    ⏰ +15 giây              ⏱️ 30   │
└──────────────────────────────────────────────┘
```

**Thành phần quiz:**
- ✕ **Nút thoát** - Góc trên phải
- 📊 **Progress bar** - Tiến độ câu hỏi
- 🖼️ **Hình ảnh** - Minh họa cho câu hỏi
- ❓ **Câu hỏi** - Về tỉnh đang chơi
- 🔤 **4 đáp án** - A, B, C, D
- 💣⏰ **Power-ups** - Góc dưới trái
- ⏱️ **Đồng hồ** - Góc dưới phải (30 giây/câu)

### 3️⃣ Power-ups

#### 💣 50/50 (Năm Mươi - Năm Mươi)

**Chức năng:** Loại bỏ 2 đáp án sai, chỉ còn 2 đáp án (1 đúng, 1 sai)

**Cách dùng:**
1. Click vào nút **💣 50/50**
2. 2 đáp án sai sẽ biến mất
3. Chỉ còn 2 đáp án để chọn

**Giới hạn:**
- ✅ Dùng được 1 lần mỗi quiz (5 câu)
- ❌ Không dùng được sau khi đã chọn đáp án
- 🔄 Reset khi chuyển sang quiz tỉnh khác

#### ⏰ +15 Giây

**Chức năng:** Thêm 15 giây vào thời gian còn lại

**Cách dùng:**
1. Click vào nút **⏰ +15 giây**
2. Đồng hồ sẽ tăng lên 15 giây

**Giới hạn:**
- ✅ Dùng được 1 lần mỗi quiz
- ❌ Không dùng được sau khi đã chọn đáp án
- 🔄 Reset khi chuyển sang quiz tỉnh khác

**Mẹo:** Nên dùng power-ups ở câu khó, hoặc khi sắp hết giờ!

### 4️⃣ Trả Lời Câu Hỏi

**Khi click vào đáp án:**

- ✅ **Đúng**: Đáp án chuyển sang màu **xanh lá** 🟢
- ❌ **Sai**: Đáp án sai chuyển sang màu **đỏ** 🔴, đáp án đúng vẫn hiện **xanh** 🟢
- ⏰ **Hết giờ**: Tự động chuyển câu tiếp theo (không được điểm)

**Sau 1.5 giây**, tự động chuyển sang câu tiếp theo.

### 5️⃣ Kết Quả Quiz

**Sau 5 câu hỏi, modal kết quả sẽ hiện:**

#### 🎉 Thành Công (≥4 câu đúng)

```
┌──────────────────────────────────┐
│   🎊 CHÚC MỪNG! 🎊               │
│                                  │
│  Bạn đã chinh phục HÀ NỘI!      │
│                                  │
│      Điểm số: 4/5 ⭐⭐⭐⭐        │
│                                  │
│  [ Tiếp tục khám phá ]          │
└──────────────────────────────────┘
```

**Điều gì xảy ra:**
- ✅ Tỉnh được đánh dấu **"đã chinh phục"** (màu xanh lá)
- 🔓 **Tất cả tỉnh tiếp giáp** được mở khóa (màu vàng)
- 📖 Tỉnh được lưu vào **Sổ Tay Du Lịch**
- 💾 Tiến trình được **tự động lưu** vào LocalStorage

#### 😢 Thất Bại (<4 câu đúng)

```
┌──────────────────────────────────┐
│      😔 Chưa đạt yêu cầu          │
│                                  │
│  Điểm số: 3/5                   │
│  Cần: 4/5 để chinh phục          │
│                                  │
│  [ Thử lại ]                    │
└──────────────────────────────────┘
```

**Điều gì xảy ra:**
- ❌ Tỉnh vẫn ở trạng thái **"đã mở khóa"** (màu vàng)
- 🔁 Có thể **thử lại** ngay lập tức
- 💡 Không bị mất điểm hay tiến trình

### 6️⃣ Sổ Tay Du Lịch

Click vào **📖 Sổ Tay Du Lịch** để xem:

```
┌────────────────────────────────┐
│  Sổ Tay Du Lịch          ✕    │
├────────────────────────────────┤
│                                │
│  ┌──────────┐  ┌──────────┐   │
│  │ 🏆 HÀ NỘI │  │ 🏆 TP.HCM │   │
│  │ Đã chinh  │  │ Đã chinh  │   │
│  │  phục     │  │  phục     │   │
│  └──────────┘  └──────────┘   │
│                                │
│  ┌──────────┐                 │
│  │ 🏆 ĐÀ NẴNG│                 │
│  │ Đã chinh  │                 │
│  │  phục     │                 │
│  └──────────┘                 │
│                                │
│  Tổng: 3/63 tỉnh               │
└────────────────────────────────┘
```

**Hiển thị:**
- 🏆 Tên các tỉnh đã chinh phục
- 📊 Tổng số tỉnh đã hoàn thành
- 📈 Tiến độ game

### 7️⃣ Cài Đặt

Click vào **⚙️ Cài Đặt** để:

```
┌────────────────────────────────┐
│  Cài Đặt                 ✕    │
├────────────────────────────────┤
│                                │
│  ┌──────────────────────────┐ │
│  │  🔄 Reset Game          │ │
│  └──────────────────────────┘ │
│                                │
│  ────────────────────────────  │
│                                │
│  Phiên bản: 1.0.0             │
│  © 2025 Hành Trình Chữ S      │
│                                │
└────────────────────────────────┘
```

**Reset Game:**
- Click **🔄 Reset Game**
- Xác nhận trong dialog
- **Toàn bộ tiến trình** sẽ bị xóa
- Game restart về trạng thái ban đầu (chỉ Hà Nội + HCM)

---

## 📁 Cấu Trúc Project

```
hanh-trinh-chu-s/
│
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page (main entry)
│   │
│   ├── components/                   # React components
│   │   ├── game-board.tsx            # Main game board container
│   │   ├── vietnam-map.tsx           # Interactive SVG map (63 tỉnh)
│   │   ├── quiz-view.tsx             # Quiz interface với power-ups
│   │   ├── travel-journal.tsx        # Sổ tay các tỉnh đã chinh phục
│   │   ├── quiz-completion-modal.tsx # Modal kết quả quiz
│   │   └── ui/                       # Shadcn UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── sheet.tsx
│   │       └── ... (30+ components)
│   │
│   ├── contexts/                     # React contexts
│   │   └── game-context.tsx          # Game state management
│   │                                 # (unlocked, conquered provinces)
│   │
│   ├── lib/                          # Utilities & data
│   │   ├── provinces.ts              # 63 tỉnh + neighbors + SVG paths
│   │   ├── types.ts                  # TypeScript interfaces
│   │   └── utils.ts                  # Helper functions (cn, etc.)
│   │
│   ├── actions/                      # Next.js Server Actions
│   │   └── quiz.actions.ts           # Generate quiz + images
│   │
│   └── ai/                           # AI integration
│       ├── genkit.ts                 # Genkit config (model: gemini-2.5-pro)
│       ├── dev.ts                    # Genkit dev server
│       └── flows/                    # AI workflows
│           ├── generate-quiz-questions.ts  # Gemini 2.5 Pro
│           └── generate-quiz-images.ts     # Gemini 2.5 Flash Image
│
├── public/                           # Static assets
│
├── .env.local                        # Environment variables (GIT IGNORE!)
├── .gitignore                        # Git ignore rules
├── components.json                   # Shadcn/ui config
├── next.config.ts                    # Next.js config
├── package.json                      # Dependencies & scripts
├── tailwind.config.ts                # Tailwind config
├── tsconfig.json                     # TypeScript config
└── README.md                         # Documentation (file này)
```

---

## 🎨 Tùy Chỉnh Game

### Thay Đổi Số Câu Hỏi

**File:** `src/components/quiz-view.tsx`

```typescript
const REQUIRED_SCORE = 4;  // Số câu đúng cần đạt (mặc định: 4/5)
```

**File:** `src/actions/quiz.actions.ts`

```typescript
const { questions } = await generateQuizQuestions({
  provinceName,
  numberOfQuestions: 5  // Thay đổi số này (mặc định: 5)
});
```

**Ví dụ:** Để thay đổi thành 10 câu, cần đúng 7 câu:
- `REQUIRED_SCORE = 7` (quiz-view.tsx)
- `numberOfQuestions: 10` (quiz.actions.ts)

### Thay Đổi Thời Gian

**File:** `src/components/quiz-view.tsx`

```typescript
const QUIZ_TIME_LIMIT = 30; // Giây mỗi câu (mặc định: 30s)
```

**Ví dụ:**
- Dễ hơn: `QUIZ_TIME_LIMIT = 60` (60 giây)
- Khó hơn: `QUIZ_TIME_LIMIT = 15` (15 giây)

### Thêm/Sửa Tỉnh

**File:** `src/lib/provinces.ts`

```typescript
export const PROVINCES: Province[] = [
  // Thêm tỉnh mới
  {
    id: 'tinh-moi',           // ID duy nhất (slug format)
    name: 'Tên Tỉnh Mới',    // Tên hiển thị
    path: 'M100 200L...',     // SVG path data
    neighbors: ['ha-noi', 'hai-phong'],  // Tỉnh tiếp giáp
  },
  // ...
];
```

**Lưu ý:**
- `id` phải unique và dạng slug (viết thường, dấu gạch ngang)
- `path` là SVG path commands (M, L, Z, etc.)
- `neighbors` phải là mảng các `id` của tỉnh khác

### Thay Đổi Màu Sắc

**File:** `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {...},   // Màu chủ đạo (xanh lá)
        accent: {...},    // Màu phụ (vàng)
        // Thay đổi ở đây
      }
    }
  }
}
```

---

## 🐛 Xử Lý Lỗi & Troubleshooting

### ❌ Lỗi: "API Key not found" hoặc "Failed to generate quiz"

**Nguyên nhân:**
- Chưa tạo file `.env.local`
- API key sai hoặc không hợp lệ
- Chưa restart server sau khi thêm `.env.local`

**Giải pháp:**
1. Tạo file `.env.local` trong thư mục gốc
2. Thêm: `GOOGLE_GENAI_API_KEY=your_actual_key`
3. **Restart** dev server (Ctrl+C rồi `npm run dev` lại)
4. Kiểm tra API key tại https://aistudio.google.com/apikey

### ❌ Lỗi: "Rate limit exceeded" hoặc "429 Too Many Requests"

**Nguyên nhân:** Vượt quá giới hạn free tier của Google AI
- 15 requests/phút
- 1500 requests/ngày

**Giải pháp:**
1. **Đợi** vài phút rồi thử lại
2. **Giảm** số lần generate (chơi ít tỉnh hơn)
3. **Nâng cấp** lên paid tier (nếu cần)
4. **Cache** câu hỏi đã generate (sửa code)

### ❌ Lỗi: "Image generation failed"

**Nguyên nhân:**
- Model `gemini-2.5-flash-image` chưa khả dụng
- Rate limit
- Model name sai

**Giải pháp (tạm thời):**

**File:** `src/actions/quiz.actions.ts`

Comment out phần tạo ảnh:

```typescript
export async function getQuizForProvince(provinceName: string): Promise<QuizQuestion[]> {
  try {
    const { questions } = await generateQuizQuestions({ provinceName, numberOfQuestions: 5 });

    // TEMPORARY FIX: Skip image generation
    return questions.map(q => ({ ...q, imageUrl: '' }));

    /* Original code với image:
    const questionsWithImages = await Promise.all(
      questions.map(async (q) => {
        try {
          const imageResult = await generateQuizImages({ question: q.question });
          return { ...q, imageUrl: imageResult.imageUrl };
        } catch (imageError) {
          return { ...q, imageUrl: "" };
        }
      })
    );
    return questionsWithImages;
    */
  } catch (error) {
    throw new Error(`Could not generate a quiz for ${provinceName}.`);
  }
}
```

**Kết quả:** Game vẫn chơi được bình thường, chỉ không có ảnh minh họa.

### ❌ Lỗi: "Port 9003 already in use"

**Giải pháp:**

**Windows:**
```bash
# Kill tất cả process Node.js
taskkill /F /IM node.exe

# Hoặc đổi port
npm run dev -- -p 9004
```

**Mac/Linux:**
```bash
# Kill process trên port 9003
lsof -ti:9003 | xargs kill -9

# Hoặc đổi port
npm run dev -- -p 9004
```

### ❌ Lỗi TypeScript khi build

**Giải pháp:**

```bash
# Check lỗi
npm run typecheck

# Fix auto (nếu có)
npm run lint -- --fix
```

### ❌ Game không lưu tiến trình

**Nguyên nhân:** LocalStorage bị disable hoặc private mode

**Giải pháp:**
1. Tắt **Private/Incognito** mode
2. Enable **LocalStorage** trong browser settings
3. Clear cache: `Ctrl + Shift + Delete`

### ❌ Bản đồ hiển thị sai hoặc tỉnh bị lỗi

**Nguyên nhân:** SVG paths hoặc viewBox không đúng

**Giải pháp:**

**File:** `src/components/vietnam-map.tsx`

Điều chỉnh viewBox:

```typescript
<svg
  viewBox="400 50 250 950"  // Thay đổi để fit bản đồ
  // x, y, width, height
>
```

---

## 🚀 Deployment (Triển Khai Production)

### Deploy lên Vercel (Khuyên dùng - MIỄN PHÍ)

**Bước 1:** Push code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/hanh-trinh-chu-s.git
git push -u origin main
```

**Bước 2:** Deploy trên Vercel

1. Truy cập https://vercel.com
2. Click **"New Project"**
3. Import từ GitHub
4. Chọn repository `hanh-trinh-chu-s`
5. **Add Environment Variable:**
   - Key: `GOOGLE_GENAI_API_KEY`
   - Value: `your_api_key`
6. Click **"Deploy"**

**Xong!** App sẽ live sau 2-3 phút tại `https://hanh-trinh-chu-s.vercel.app`

### Deploy lên Netlify

1. Build project:
   ```bash
   npm run build
   ```

2. Tạo file `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   ```

3. Deploy:
   - Drag & drop folder vào https://app.netlify.com/drop
   - Hoặc dùng Netlify CLI

### Self-hosting với PM2

```bash
# Build
npm run build

# Install PM2
npm install -g pm2

# Start
pm2 start npm --name "hanh-trinh-chu-s" -- start

# Monitor
pm2 monit

# Auto-restart on reboot
pm2 startup
pm2 save
```

---

## 📊 Thống Kê Project

- ✅ **63 tỉnh/thành phố** đầy đủ
- ✅ **~300+ neighbors** được định nghĩa
- ✅ **2 power-ups** hoạt động (50/50, +15s)
- ✅ **0 lỗi TypeScript**
- ✅ **30+ UI components** (Shadcn/ui)
- ✅ **100% responsive** (mobile + desktop)
- ✅ **LocalStorage** lưu tiến trình
- ✅ **AI-powered** quiz generation
- ✅ **Auto-generated** images

---

## 🤝 Đóng Góp (Contributing)

Chúng tôi rất hoan nghênh mọi đóng góp!

### Cách đóng góp:

1. **Fork** repository
2. Tạo **branch** mới:
   ```bash
   git checkout -b feature/tinh-nang-moi
   ```
3. **Commit** changes:
   ```bash
   git commit -m "Thêm tính năng X"
   ```
4. **Push** to branch:
   ```bash
   git push origin feature/tinh-nang-moi
   ```
5. Tạo **Pull Request**

### Ý tưởng đóng góp:

- 🎵 Thêm âm thanh/nhạc nền
- 🏅 Thêm leaderboard (bảng xếp hạng)
- 🎯 Thêm achievements (thành tựu)
- 🗣️ Hỗ trợ tiếng Anh
- 📱 Native app (React Native)
- 🎮 Multiplayer mode
- 📊 Thống kê chi tiết
- 🎨 Themes (dark mode, etc.)

---

## 📝 License

Dự án này được phân phối dưới giấy phép **MIT License**.

Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

## 👥 Tác Giả & Credits

### Phát triển bởi:
- **Developer**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@your-username](https://github.com/your-username)

### Công nghệ & Thư viện:
- **Google AI** - Gemini 2.5 Pro & Flash Image
- **Shadcn/ui** - UI Components
- **Next.js Team** - React Framework
- **Vercel** - Hosting & Deployment
- **Tailwind Labs** - Tailwind CSS

### Cảm ơn:
- Cộng đồng developers Việt Nam
- Tất cả contributors
- Bạn đọc README này! 🙏

---

## 📞 Liên Hệ & Hỗ Trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi:

- 📧 **Email**: your.email@example.com
- 💬 **Discord**: [Join our community](https://discord.gg/your-server)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/hanh-trinh-chu-s/issues)
- 📖 **Docs**: [Documentation](https://your-docs-site.com)

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/hanh-trinh-chu-s&type=Date)](https://star-history.com/#your-username/hanh-trinh-chu-s&Date)

---

## 📈 Roadmap

### Version 2.0 (Kế hoạch)

- [ ] Multiplayer mode
- [ ] Leaderboard global
- [ ] Achievements system
- [ ] Dark mode
- [ ] Sound effects & music
- [ ] English translation
- [ ] Mobile app (React Native)
- [ ] More question types (video, audio)
- [ ] User accounts & profiles
- [ ] Social sharing

---

**⭐ Nếu thấy project hữu ích, đừng quên cho một star trên GitHub nhé! ⭐**

Made with ❤️ for Vietnam 🇻🇳
