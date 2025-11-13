# 🔑 Hướng Dẫn Quản Lý API Quota - Google Gemini

## 🚨 Vấn đề: API Quota Exceeded

### Triệu chứng
- ❌ Không thấy hình ảnh trong câu hỏi quiz
- ❌ Console log báo lỗi: `429 Too Many Requests`
- ❌ Error message: `Quota exceeded for metric: generate_content_free_tier_requests`

### Nguyên nhân
API key của bạn đã **vượt quá giới hạn miễn phí** của Google Gemini API.

---

## 📊 Giới Hạn Free Tier (Miễn phí)

Google Gemini API có 2 loại giới hạn:

### 1️⃣ **Per-Minute Limit** (Giới hạn mỗi phút)
- **15 requests/phút**
- Reset sau **60 giây**
- Dùng cho: Tránh spam/abuse

### 2️⃣ **Daily Limit** (Giới hạn mỗi ngày)
- **1,500 requests/ngày**
- Reset sau **24 giờ** (00:00 UTC)
- Dùng cho: Kiểm soát tổng lượng sử dụng

### 🧮 Ước tính sử dụng cho game

**Mỗi lần chơi 1 tỉnh:**
- 1 request tạo câu hỏi (5 câu)
- 5 requests tạo ảnh (1 ảnh/câu)
- **= 6 requests/tỉnh**

**Với 1,500 requests/ngày:**
- Tối đa: **250 tỉnh/ngày**
- Với 63 tỉnh Việt Nam: Chơi được ~**4 lần full game/ngày**

---

## ✅ Giải Pháp Khắc Phục

### **Solution 1: Đợi Quota Reset** ⏰

Quota sẽ tự động reset theo thời gian:

#### Nếu lỗi "per-minute limit":
```bash
⏱️  Đợi 1-2 phút
✅ Quota sẽ tự động reset
🎮 Thử chơi lại
```

#### Nếu lỗi "daily limit":
```bash
⏱️  Đợi đến 00:00 UTC (7:00 sáng giờ Việt Nam)
✅ Quota 1,500 requests sẽ được làm mới
🎮 Chơi tiếp
```

**Kiểm tra quota hiện tại:**
- Truy cập: https://ai.dev/usage?tab=rate-limit
- Đăng nhập bằng Google account đã tạo API key
- Xem số requests còn lại

---

### **Solution 2: Tạo API Key Mới** 🆕 (Khuyến nghị)

#### Bước 1: Tạo project mới
1. Truy cập: https://aistudio.google.com/apikey
2. Click **"Create API key in new project"** (không chọn project cũ!)
3. Đặt tên project: `hanh-trinh-chu-s-2`, `vietnam-quiz-backup`, etc.

#### Bước 2: Copy API key mới
```
Ví dụ: AIzaSyABC123def456GHI789jkl012MNO345pqr
```

#### Bước 3: Cập nhật `.env.local`

```bash
# API key cho tạo câu hỏi (Gemini 2.5 Pro)
GOOGLE_GENAI_API_KEY=AIzaSyABC123def456GHI789jkl012MNO345pqr

# API key cho tạo ảnh (Gemini 2.5 Flash Image)
# Có thể dùng chung hoặc tạo riêng
GOOGLE_GENAI_IMAGE_API_KEY=AIzaSyABC123def456GHI789jkl012MNO345pqr
```

#### Bước 4: Restart server

```bash
# Dừng server (Ctrl + C)
npm run dev
```

#### Bước 5: Enable image generation

File: `src/actions/quiz.actions.ts` dòng 32:

```typescript
const ENABLE_IMAGE_GENERATION = true; // Đổi từ false → true
```

---

### **Solution 3: Sử dụng Nhiều API Keys** 🔑🔑

Nếu 1 API key không đủ, tạo nhiều keys và rotate:

#### Tạo 3 API keys khác nhau:

```bash
# .env.local
GOOGLE_GENAI_API_KEY=AIzaSyKey1_for_questions
GOOGLE_GENAI_IMAGE_API_KEY=AIzaSyKey2_for_images

# Backup keys (tự implement rotation logic)
GOOGLE_GENAI_API_KEY_BACKUP=AIzaSyKey3_backup
```

---

### **Solution 4: Disable Image Generation** 🚫🖼️ (Tiết kiệm quota)

Nếu muốn **tiết kiệm quota** để chơi nhiều hơn:

#### File: `src/actions/quiz.actions.ts` dòng 32

```typescript
const ENABLE_IMAGE_GENERATION = false; // ❌ Tắt tạo ảnh
```

**Kết quả:**
- ✅ Game vẫn chơi bình thường
- ✅ Câu hỏi vẫn được tạo
- ❌ Không có ảnh minh họa
- 💾 Chỉ dùng **1 request/tỉnh** thay vì **6 requests/tỉnh**
- 📈 Chơi được **1,500 tỉnh/ngày** thay vì **250 tỉnh/ngày**

---

### **Solution 5: Upgrade Lên Paid Plan** 💳 (Không giới hạn)

Nếu cần dùng nhiều hơn, upgrade lên **Google Cloud Pay-as-you-go**:

#### Pricing (Giá cả)

**Gemini 2.5 Pro** (tạo câu hỏi):
- Input: **$1.25** per 1M tokens (~$0.00125 per request)
- Output: **$5.00** per 1M tokens (~$0.005 per request)

**Gemini 2.5 Flash Image** (tạo ảnh):
- **$30.00** per 1M output tokens
- 1 image = 1,290 tokens
- **~$0.039 per image** (khoảng 800 VND/ảnh)

**Ước tính chi phí:**
- 1 tỉnh (5 câu + 5 ảnh): ~$0.20 (5,000 VNĐ)
- Full game 63 tỉnh: ~$12.60 (315,000 VNĐ)
- 1 tháng (30 người chơi/ngày): ~$378 (~9.5 triệu VNĐ)

#### Cách upgrade:

1. Truy cập: https://console.cloud.google.com/
2. Chọn project
3. **Billing** → **Add billing account**
4. Nhập thông tin thẻ credit/debit
5. Enable **Generative Language API**
6. Quota tăng lên: **1,500,000 requests/ngày** (paid tier)

---

## 🛠️ Debugging & Monitoring

### Kiểm tra lỗi trong console

Khi chơi game, mở **Console** (F12):

```javascript
// ✅ Thành công
✅ Image generated successfully: data:image/jpeg;base64,/9j/4AAQ...

// ❌ Lỗi quota
❌ Error: You exceeded your current quota
Failed to generate image for question: "..."

// ⚠️  Warning (image generation disabled)
⚠️  Image generation is currently disabled
```

### Test API key thủ công

Sử dụng script test tôi đã tạo:

```bash
node test-image-generation.js
```

**Kết quả mong đợi khi có quota:**
```
✅ SUCCESS!
🖼️  Image found!
   MIME type: image/jpeg
   Data length: 12345 characters
```

**Kết quả khi hết quota:**
```
❌ Error: You exceeded your current quota
   Status: 429 Too Many Requests
   Please retry in 37.xx seconds
```

---

## 📋 Checklist Khắc Phục

Khi gặp lỗi "Quota exceeded", làm theo thứ tự:

- [ ] **Bước 1:** Kiểm tra quota tại https://ai.dev/usage
- [ ] **Bước 2:** Nếu còn quota → Đợi 1-2 phút rồi thử lại (per-minute limit)
- [ ] **Bước 3:** Nếu hết quota ngày → Đợi đến 00:00 UTC hoặc tạo API key mới
- [ ] **Bước 4:** Tạo API key mới tại https://aistudio.google.com/apikey
- [ ] **Bước 5:** Cập nhật `.env.local` với API key mới
- [ ] **Bước 6:** Restart server: `Ctrl+C` → `npm run dev`
- [ ] **Bước 7:** Enable image generation: `ENABLE_IMAGE_GENERATION = true`
- [ ] **Bước 8:** Test bằng cách chơi 1 tỉnh
- [ ] **Bước 9:** Check console log xem có ảnh không

---

## 💡 Tips Tiết Kiệm Quota

### 1. Cache câu hỏi đã generate

Implement caching để không phải generate lại:

```typescript
// Lưu vào localStorage hoặc database
const cachedQuiz = localStorage.getItem(`quiz-${provinceName}`);
if (cachedQuiz) return JSON.parse(cachedQuiz);
```

### 2. Tắt image generation khi dev

Khi đang phát triển, tắt ảnh để test logic:

```typescript
const ENABLE_IMAGE_GENERATION = process.env.NODE_ENV === 'production';
```

### 3. Giảm số câu hỏi

Từ 5 câu → 3 câu mỗi tỉnh:

```typescript
// src/actions/quiz.actions.ts
const { questions } = await generateQuizQuestions({
  provinceName,
  numberOfQuestions: 3  // Thay vì 5
});
```

### 4. Sử dụng fallback images

Dùng ảnh stock thay vì AI:

```typescript
const FALLBACK_IMAGES = {
  'food': 'https://placehold.co/600x400/png?text=Vietnamese+Food',
  'landmark': 'https://placehold.co/600x400/png?text=Landmark',
  // ...
};
```

---

## 🎯 Tóm Tắt

| Vấn đề | Giải pháp | Thời gian | Chi phí |
|--------|-----------|-----------|---------|
| Hết quota 15/phút | Đợi 1-2 phút | ⏱️ 1-2 phút | 🆓 Miễn phí |
| Hết quota 1500/ngày | Đợi reset hoặc tạo key mới | ⏱️ 24h hoặc 5 phút | 🆓 Miễn phí |
| Cần dùng nhiều | Tạo nhiều API keys | ⏱️ 10 phút | 🆓 Miễn phí |
| Chơi không ảnh | Disable image gen | ⏱️ 30 giây | 🆓 Miễn phí |
| Production app | Upgrade paid tier | ⏱️ 30 phút | 💳 ~$0.20/tỉnh |

---

## ❓ FAQ

**Q: Tại sao tạo câu hỏi được nhưng ảnh không được?**
A: Vì tạo 1 tỉnh cần 1 request cho câu hỏi + 5 requests cho ảnh. Khi quota sắp hết, ảnh sẽ fail trước.

**Q: API key miễn phí có hết hạn không?**
A: Không, nhưng có giới hạn quota. Nếu không dùng >90 ngày có thể bị vô hiệu hóa.

**Q: Có thể dùng nhiều Google accounts không?**
A: Có! Tạo nhiều accounts → Nhiều API keys → Rotate khi hết quota.

**Q: Deploy lên Vercel có ảnh hưởng quota không?**
A: Có! Mỗi user chơi sẽ dùng quota của API key. Cần có quota lớn hoặc implement caching.

---

**🎮 Chúc bạn chơi game vui vẻ! 🇻🇳**

Made with ❤️ for Vietnam
