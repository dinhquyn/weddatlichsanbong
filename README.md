# Trang web đặt lịch sân bóng đá

## Giới thiệu

Dự án này là một ứng dụng web cho phép người dùng đặt lịch sân bóng đá trực tuyến. Người dùng có thể dễ dàng duyệt các sân có sẵn, kiểm tra lịch trình và đặt chỗ trong khung giờ mong muốn. Mục tiêu của nền tảng là đơn giản hóa quá trình đặt sân, đảm bảo người dùng có thể nhanh chóng và tiện lợi chọn được khung giờ chơi bóng phù hợp.

## Tính năng

- **Duyệt sân bóng**: Xem các sân bóng có sẵn với thông tin chi tiết như địa điểm, kích thước, và các tiện nghi.g
- **Xem lịch**: Kiểm tra tình trạng trống của các sân vào các khung giờ khác nhau.
- **Đặt sân trực tuyến**: Đặt lịch sân và nhận xác nhận qua hệ thống.
- **Bảng điều khiển quản trị**: Quản lý sân, lịch đặt và người dùng thông qua giao diện quản trị dễ sử dụng.

## Công nghệ sử dụng

- **Frontend**: HTML, CSS, JavaScript, [Bootstrap](https://getbootstrap.com/) (cho thiết kế đáp ứng)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Cơ sở dữ liệu**: [MongoDB](https://www.mongodb.com/) (lưu trữ dữ liệu người dùng và lịch đặt)

## Cài đặt

### Yêu cầu

- Đã cài đặt [Node.js](https://nodejs.org/)
- Đã cài đặt và chạy [MongoDB](https://www.mongodb.com/)
- Đã cài đặt [Git](https://git-scm.com/)

### Hướng dẫn cài đặt

1. Clone repository:

    ```bash
  https://github.com/dinhquyn/weddatlichsanbong.git
    ```

2. Cài đặt các gói phụ thuộc:

    ```bash
    npm install
    ```

3. Tạo file `.env` để lưu trữ các biến môi trường:

    ```env
    PORT=3000
    MONGO_URI=chuoi-ket-noi-mongodb-cua-ban
    SESSION_SECRET=chuoi-bao-mat-cho-session
    STRIPE_SECRET_KEY=chuoi-khoa-bi-mat-cua-stripe
    ```

4. Chạy ứng dụng:

    ```bash
    npm start
    ```

5. Mở trình duyệt và truy cập `http://localhost:3000` để sử dụng ứng dụng.

## Sử dụng

1. Truy cập trang wed
2. Duyệt các sân bóng có sẵn.
3. Chọn sân và khung giờ trống mong muốn.
4. Hoàn thành việc đặt sân.
5. Xem chi tiết đặt sân trong bảng điều khiển tài khoản của bạn.

## Đóng góp

Chúng tôi rất hoan nghênh các đóng góp! Vui lòng đọc [Hướng dẫn đóng góp](CONTRIBUTING.md) để biết cách bắt đầu.

## Giấy phép

Dự án này được cấp phép theo Giấy phép MIT. Xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ với chúng tôi qua email tại 22010342@st.phenikaa-uni.edu.vn.
