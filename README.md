# Game Hành Trình Chữ S

## Giới thiệu

Hành trình chữ S là một game đố vui tương tác hấp dẫn, đưa người chơi vào cuộc phiêu lưu khám phá địa lý, văn hóa và lịch sử đa dạng của Việt Nam. Được xây dựng trên nền tảng Next.js, game sử dụng bản đồ tương tác của Việt Nam để người chơi di chuyển và khám phá từng tỉnh thành. Với đồ họa trực quan và lối chơi lôi cuốn, game không chỉ mang tính giải trí mà còn giúp người chơi mở rộng kiến thức về đất nước hình chữ S.

## Cài đặt

### Yêu cầu hệ thống
- Node.js phiên bản 18.x trở lên
- NPM hoặc Yarn
- Tài khoản Google AI Studio (để sử dụng API Gemini)

### Các bước cài đặt

1. Clone repository này về máy của bạn:
```bash
git clone <repository-url>
cd hanh-trinh-chu-s
```

2. Cài đặt các dependencies:
```bash
npm install
```

3. Tạo file `.env` tại thư mục gốc của dự án với nội dung sau:
```
GOOGLE_API_KEY=your_google_ai_studio_api_key
```

   Để lấy Google API Key:
   - Đăng ký tài khoản tại [Google AI Studio](https://ai.google.dev/)
   - Tạo API key mới trong phần API Keys
   - Sao chép API key và dán vào file .env

4. Khởi chạy ứng dụng ở chế độ phát triển:
```bash
npm run dev
```

5. Mở trình duyệt và truy cập [http://localhost:9003](http://localhost:9003)

### Sử dụng GenKit (tùy chọn)

Nếu bạn muốn sử dụng tính năng tạo câu hỏi bằng AI:

```bash
# Chạy GenKit để tạo câu hỏi và hình ảnh
npm run genkit:dev

# Hoặc để tự động làm mới khi có thay đổi
npm run genkit:watch
```

## Chức năng chính

*   **Di chuyển tương tác trên bản đồ Việt Nam:** Người chơi có thể di chuyển dọc theo chiều dài đất nước, khám phá các tỉnh thành từ Bắc vào Nam thông qua bản đồ trực quan.
*   **Bộ câu hỏi phong phú:** Game cung cấp hàng trăm câu hỏi trắc nghiệm được tạo ra bằng AI (thông qua Google Gemini) về địa danh, văn hóa, lịch sử, đặc sản của từng địa phương.
*   **Hệ thống tính điểm và theo dõi tiến độ:** Theo dõi điểm số và tiến độ của người chơi trong suốt hành trình.
*   **Giao diện thân thiện, dễ sử dụng:** Thiết kế trực quan, phù hợp với mọi lứa tuổi.
*   **Cập nhật nội dung:** Có khả năng bổ sung câu hỏi và tính năng mới.

## Cấu trúc dự án

```
hanh-trinh-chu-s/
├── src/
│   ├── actions/       # Server actions
│   ├── ai/            # AI flows và cấu hình GenKit
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── contexts/      # React contexts
│   ├── hooks/         # React custom hooks
│   └── lib/           # Utilities và các kiểu dữ liệu
├── public/            # Tài nguyên tĩnh
└── .env               # Biến môi trường
```

## Xử lý sự cố

### Lỗi khi chạy AI
- Đảm bảo bạn đã cài đặt file `.env` đúng cách
- Kiểm tra quota của Google AI API
- Đảm bảo đã chạy `npm run genkit:dev` song song với `npm run dev`

### Lỗi cổng đã được sử dụng
Nếu gặp lỗi "address already in use", hãy thực hiện các bước sau:
1. Kết thúc tất cả các tiến trình node.js đang chạy:
   ```bash
   # Windows
   taskkill /F /IM node.exe
   
   # Linux/Mac
   pkill -f node
   ```
2. Hoặc thay đổi cổng trong file `package.json`:
   ```json
   "dev": "next dev --turbopack -p 9004",
   ```

## Đóng góp

Chúng tôi rất hoan nghênh đóng góp từ cộng đồng. Nếu bạn muốn đóng góp, vui lòng:
1. Fork dự án
2. Tạo nhánh tính năng (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi của bạn (`git commit -m 'Add some amazing feature'`)
4. Push lên nhánh (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## Giấy phép

Dự án này được cấp phép theo [MIT License](LICENSE).


