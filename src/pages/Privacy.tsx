import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Chính Sách Bảo Mật</h1>
      <p className="text-muted-foreground mb-8">Cập nhật lần cuối: 9 tháng 10, 2025</p>

      <Card className="p-8">
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Giới Thiệu</h2>
            <p className="text-muted-foreground">
              Skill Swap Connect ("SWC", "chúng tôi") tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn sử dụng nền tảng của chúng tôi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Thông Tin Chúng Tôi Thu Thập</h2>
            <p className="text-muted-foreground mb-2">Chúng tôi thu thập các loại thông tin sau:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Thông tin tài khoản (tên, email, địa điểm)</li>
              <li>Dữ liệu hồ sơ (kỹ năng, tiểu sử, thời gian rảnh)</li>
              <li>Hồ sơ buổi học (đặt lịch, hoàn thành, đánh giá)</li>
              <li>Lịch sử giao dịch (Edits kiếm được, đã dùng, đã mua)</li>
              <li>Giao tiếp (tin nhắn, báo cáo tranh chấp)</li>
              <li>Dữ liệu sử dụng (trang đã truy cập, tính năng đã sử dụng)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn</h2>
            <p className="text-muted-foreground mb-2">Chúng tôi sử dụng thông tin của bạn để:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Cung cấp và duy trì dịch vụ của chúng tôi</li>
              <li>Ghép đôi người dùng dựa trên kỹ năng và sở thích</li>
              <li>Xử lý và ghi lại giao dịch Edits</li>
              <li>Tạo điều kiện giao tiếp giữa người dùng</li>
              <li>Cải thiện tính năng nền tảng và trải nghiệm người dùng</li>
              <li>Thực thi Điều Khoản Dịch Vụ và Nguyên Tắc Cộng Đồng</li>
              <li>Gửi thông báo quan trọng về tài khoản và buổi học của bạn</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Chia Sẻ Dữ Liệu</h2>
            <p className="text-muted-foreground">
              Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi có thể chia sẻ dữ liệu của bạn với:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Người dùng khác (thông tin hồ sơ, đánh giá) để tạo điều kiện ghép đôi</li>
              <li>Bộ xử lý thanh toán cho việc mua Edits (được mã hóa)</li>
              <li>Nhà cung cấp dịch vụ hỗ trợ vận hành nền tảng của chúng tôi</li>
              <li>Cơ quan thực thi pháp luật nếu được yêu cầu bởi pháp luật</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Bảo Mật Dữ Liệu</h2>
            <p className="text-muted-foreground">
              Chúng tôi triển khai các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ dữ liệu của bạn, bao gồm mã hóa, máy chủ an toàn và kiểm tra bảo mật định kỳ. Tuy nhiên, không có phương pháp truyền tải nào qua internet là 100% an toàn.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Quyền Của Bạn</h2>
            <p className="text-muted-foreground mb-2">Bạn có quyền:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Truy cập dữ liệu cá nhân của bạn</li>
              <li>Sửa thông tin không chính xác</li>
              <li>Xóa tài khoản và dữ liệu liên quan</li>
              <li>Xuất dữ liệu của bạn</li>
              <li>Từ chối nhận thông tin tiếp thị</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Cookies</h2>
            <p className="text-muted-foreground">
              Chúng tôi sử dụng cookie và các công nghệ tương tự để nâng cao trải nghiệm của bạn, ghi nhớ tùy chọn và phân tích mẫu sử dụng. Bạn có thể kiểm soát cài đặt cookie thông qua trình duyệt của mình.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Thay Đổi Đối Với Chính Sách Này</h2>
            <p className="text-muted-foreground">
              Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về những thay đổi quan trọng qua email hoặc thông qua nền tảng.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Liên Hệ Với Chúng Tôi</h2>
            <p className="text-muted-foreground">
              Nếu bạn có câu hỏi về chính sách bảo mật này hoặc hoạt động dữ liệu của chúng tôi, vui lòng liên hệ với chúng tôi tại:{" "}
              <a href="mailto:privacy@skillswapconnect.com" className="text-primary hover:underline">
                privacy@skillswapconnect.com
              </a>
            </p>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Privacy;
