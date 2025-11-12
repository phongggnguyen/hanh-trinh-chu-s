# Mô tả dự án: Hành trình chữ S

Đây là một ứng dụng web được xây dựng dưới dạng một trò chơi giáo dục, cho phép người dùng khám phá và tìm hiểu về các tỉnh thành của Việt Nam thông qua một hành trình ảo trên bản đồ.

## Chức năng chính

*   **Khám phá bản đồ Việt Nam:** Giao diện chính hiển thị một bản đồ Việt Nam trực quan.
*   **Trò chơi đố vui (Quiz Game):** Tại mỗi tỉnh thành trên hành trình, người dùng sẽ tham gia trả lời các câu hỏi đố vui liên quan đến lịch sử, văn hóa, địa lý của địa phương đó.
*   **Nội dung động từ AI:** Điểm đặc biệt của dự án là sử dụng Trí tuệ nhân tạo (AI) để tự động tạo ra các câu hỏi và hình ảnh minh họa cho các câu đố. Điều này giúp nội dung game luôn mới mẻ và đa dạng.
*   **Nhật ký hành trình (Travel Journal):** Ghi lại và hiển thị tiến trình của người chơi, những nơi đã đi qua và có thể là cả những kiến thức đã học được.
*   **Giao diện tương tác:** Cung cấp các thành phần UI hiện đại như modal thông báo hoàn thành, bảng trò chơi (game board) để theo dõi hành trình.

## Cách hoạt động

1.  **Frontend (Giao diện người dùng):** Được xây dựng bằng **Next.js** và **React**, hiển thị bản đồ, các câu đố và nhật ký hành trình cho người chơi.
2.  **Tương tác game:** Khi người chơi chọn một tỉnh thành, ứng dụng sẽ kích hoạt một sự kiện.
3.  **Gọi AI-powered Flows:** Sự kiện này sẽ gọi đến các "flow" được định nghĩa bằng **Genkit** (một framework AI của Google).
4.  **Tạo nội dung:** Các flow này có nhiệm vụ giao tiếp với các mô hình ngôn ngữ lớn (LLMs) để:
    *   `generate-quiz-questions`: Tạo ra các câu hỏi trắc nghiệm về tỉnh thành được chọn.
    *   `generate-quiz-images`: Tạo ra hình ảnh minh họa cho các câu hỏi đó.
5.  **Hiển thị cho người dùng:** Nội dung được AI tạo ra sẽ được gửi trở lại giao diện và hiển thị cho người chơi trong `QuizView`.
6.  **Quản lý trạng thái:** Trạng thái của trò chơi (ví dụ: người chơi đang ở đâu, điểm số) được quản lý bằng React Context (`game-context.tsx`).

## Ngôn ngữ sử dụng

*   **TypeScript:** Là ngôn ngữ chính được sử dụng cho cả logic frontend (React components) và backend (actions, AI flows).
*   **JavaScript/MJS:** Được sử dụng trong các file cấu hình như `postcss.config.mjs`.

## Công nghệ và thư viện

*   **Framework chính:** **Next.js** (một framework xây dựng trên React, hỗ trợ Server-Side Rendering và nhiều tính năng mạnh mẽ khác).
*   **Thư viện Frontend:** **React**.
*   **AI Framework:** **Genkit** (để xây dựng và điều phối các tính năng liên quan đến AI).
*   **Styling (Giao diện):**
    *   **Tailwind CSS:** Framework CSS theo hướng "utility-first" để tạo kiểu nhanh chóng.
    *   **Shadcn/ui:** Một bộ sưu tập các thành phần UI được xây dựng sẵn, có thể tùy chỉnh (dựa trên cấu trúc thư mục `src/components/ui` và file `components.json`).
*   **Môi trường chạy:** **Node.js**.
