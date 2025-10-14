import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Điều Khoản Dịch Vụ</h1>
      <p className="text-muted-foreground mb-8">Cập nhật lần cuối: 9 tháng 10, 2025</p>

      <Card className="p-8">
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Chấp Nhận Điều Khoản</h2>
            <p className="text-muted-foreground">
              Bằng cách truy cập và sử dụng Skill Swap Connect ("SWC"), bạn đồng ý bị ràng buộc bởi các Điều Khoản Dịch Vụ này. Nếu bạn không đồng ý, vui lòng không sử dụng nền tảng của chúng tôi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Mô Tả Nền Tảng</h2>
            <p className="text-muted-foreground">
              SWC là một nền tảng trao đổi kỹ năng ngang hàng sử dụng hệ thống ngân hàng thời gian gọi là "Edits." Một giờ dạy hoặc học bằng 10 Edits. Chúng tôi tạo điều kiện kết nối nhưng không thuê giáo viên hoặc đảm bảo kết quả học tập.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Trách Nhiệm Của Người Dùng</h2>
            <p className="text-muted-foreground mb-2">Là một người dùng, bạn đồng ý:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Cung cấp thông tin hồ sơ chính xác</li>
              <li>Duy trì tính bảo mật của tài khoản của bạn</li>
              <li>Thực hiện buổi học một cách chuyên nghiệp và tôn trọng</li>
              <li>Tôn trọng các đặt lịch buổi học đã xác nhận</li>
              <li>Cung cấp đánh giá và phản hồi trung thực</li>
              <li>Báo cáo hành vi hoặc nội dung không phù hợp</li>
              <li>Không sử dụng nền tảng cho mục đích thương mại mà không được ủy quyền</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Hệ Thống Edits</h2>
            <p className="text-muted-foreground mb-2">Tiền tệ Edits hoạt động như sau:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>1 giờ dạy = 10 Edits kiếm được</li>
              <li>1 giờ học = 10 Edits đã dùng</li>
              <li>Edits được tự động ghi sổ khi buổi học hoàn thành</li>
              <li>Có gói Edits tùy chọn để mua (20/50/100)</li>
              <li>Edits không có giá trị tiền mặt và không thể đổi thành tiền</li>
              <li>Edits chưa sử dụng không hết hạn nhưng có thể bị mất khi đóng tài khoản</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Chính Sách Hủy</h2>
            <p className="text-muted-foreground">
              Buổi học có thể bị hủy bởi bất kỳ bên nào với thông báo. Việc hủy ít hơn 2 giờ trước thời gian bắt đầu theo lịch sẽ kích hoạt cảnh báo. Việc hủy muộn lặp lại có thể dẫn đến hạn chế hoặc đình chỉ tài khoản.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Đánh Giá và Xếp Hạng</h2>
            <p className="text-muted-foreground">
              Cả giáo viên và người học phải đánh giá mỗi buổi học. Xếp hạng 3 sao trở xuống yêu cầu bình luận ít nhất 20 ký tự. Đánh giá phải trung thực và mang tính xây dựng. Lạm dụng hệ thống đánh giá có thể dẫn đến hành động đối với tài khoản.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Tranh Chấp</h2>
            <p className="text-muted-foreground">
              Nếu có tranh chấp về một buổi học (không xuất hiện, vấn đề chất lượng, v.v.), người dùng có thể nộp báo cáo tranh chấp. Đội ngũ quản trị của chúng tôi sẽ xem xét trường hợp và có thể hoàn lại Edits, đưa ra cảnh báo hoặc thực hiện hành động khắc phục khác.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Hành Vi Bị Cấm</h2>
            <p className="text-muted-foreground mb-2">Các hành vi sau bị cấm:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Quấy rối, phân biệt đối xử hoặc ngôn ngữ lạm dụng</li>
              <li>Chia sẻ thông tin sai lệch hoặc gây hiểu lầm</li>
              <li>Tạo nhiều tài khoản để thao túng hệ thống</li>
              <li>Cố gắng bỏ qua hệ thống Edits để thanh toán trực tiếp</li>
              <li>Spam hoặc mời chào người dùng cho dịch vụ bên ngoài</li>
              <li>Vi phạm quyền sở hữu trí tuệ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Đình Chỉ Hoặc Chấm Dứt Tài Khoản</h2>
            <p className="text-muted-foreground">
              Chúng tôi bảo lưu quyền đình chỉ hoặc chấm dứt các tài khoản vi phạm các Điều Khoản này, tham gia vào hành vi bị cấm hoặc gây rủi ro cho cộng đồng. Việc hoàn tiền cho Edits đã mua là theo quyết định của chúng tôi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Giới Hạn Trách Nhiệm</h2>
            <p className="text-muted-foreground">
              SWC là một nền tảng tạo điều kiện và không chịu trách nhiệm về chất lượng, an toàn hoặc tính hợp pháp của các buổi học. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hậu quả nào phát sinh từ việc sử dụng nền tảng. Trách nhiệm tối đa được giới hạn ở số tiền người dùng đã trả trong 12 tháng qua.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Thay Đổi Đối Với Điều Khoản</h2>
            <p className="text-muted-foreground">
              Chúng tôi có thể sửa đổi các Điều Khoản này theo thời gian. Những thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo nền tảng. Việc tiếp tục sử dụng nền tảng sau khi thay đổi đồng nghĩa với việc chấp nhận.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Luật Điều Chỉnh</h2>
            <p className="text-muted-foreground">
              Các Điều Khoản này được điều chỉnh bởi luật pháp của [Khu vực pháp lý của bạn]. Bất kỳ tranh chấp nào sẽ được giải quyết thông qua trọng tài ràng buộc tại [Khu vực pháp lý của bạn].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Liên Hệ</h2>
            <p className="text-muted-foreground">
              Đối với câu hỏi về các Điều Khoản này, hãy liên hệ với chúng tôi tại:{" "}
              <a href="mailto:legal@skillswapconnect.com" className="text-primary hover:underline">
                legal@skillswapconnect.com
              </a>
            </p>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Terms;
