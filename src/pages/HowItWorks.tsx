import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Search,
  MessageCircle,
  Calendar,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Coins,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container py-8 max-w-6xl">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cách Skill Swap Connect Hoạt Động</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tìm hiểu chi tiết về nền tảng trao đổi kỹ năng ngân hàng thời gian của chúng tôi
        </p>
      </div>

      {/* Core Flow */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Hành Trình Học Tập</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { icon: Users, title: "Tạo Hồ Sơ", desc: "Liệt kê kỹ năng Có thể dạy/Muốn học" },
            { icon: Search, title: "Tìm Kiếm & Ghép Đôi", desc: "Tìm giáo viên phù hợp" },
            { icon: MessageCircle, title: "Trò Chuyện & Thống Nhất", desc: "Thảo luận mục tiêu buổi học" },
            { icon: Calendar, title: "Đặt Lịch", desc: "Xác nhận thời gian & địa điểm" },
            { icon: CheckCircle, title: "Hoàn Thành & Đánh Giá", desc: "Tự động tính Edits" },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Time-Banking Explanation */}
      <section className="mb-16">
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <Coins className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Hiểu Về Ngân Hàng Thời Gian</h2>
              <p className="text-muted-foreground mb-4">
                SWC sử dụng <strong>hệ thống ngân hàng thời gian</strong> nơi mỗi giờ dạy hoặc học đều được định giá như nhau:
              </p>
              <div className="bg-background rounded-lg p-4 mb-4">
                <div className="text-center text-2xl font-bold text-primary mb-2">
                  1 Hour = 10 Edits
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Dù bạn dạy guitar, lập trình hay yoga—thời gian của bạn đều có giá trị 10 Edits mỗi giờ
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Tất cả kỹ năng đều được định giá như nhau—không phân cấp, chỉ có trao đổi công bằng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Dạy để kiếm Edits, dùng Edits để học—hệ sinh thái cân bằng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Có gói Edits tùy chọn (20/50/100) nếu bạn muốn bắt đầu nhanh</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Session Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Hình Thức Buổi Học</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="text-4xl mb-3">👤↔️👤</div>
            <h3 className="text-xl font-semibold mb-2">Buổi Học 1-1</h3>
            <p className="text-muted-foreground mb-4">
              Hình thức phổ biến nhất. Kết nối trực tiếp giữa giáo viên và người học. Sự quan tâm cá nhân hóa và lịch trình linh hoạt.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Lý tưởng cho việc học cá nhân hóa</li>
              <li>• Dễ dàng sắp xếp lịch trình</li>
              <li>• Tiêu chuẩn 10 Edits mỗi giờ</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-4xl mb-3">👤➡️👥</div>
            <h3 className="text-xl font-semibold mb-2">1-Nhiều (Sắp Ra Mắt)</h3>
            <p className="text-muted-foreground mb-4">
              Buổi học nhóm nơi một giáo viên làm việc với nhiều người học. Tuyệt vời cho workshop và lớp học tương tác.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Chia sẻ trải nghiệm học tập</li>
              <li>• Chia sẻ Edits hiệu quả về chi phí</li>
              <li>• Xây dựng cộng đồng</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Tin Cậy & An Toàn</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Star className="h-10 w-10 mx-auto text-warning mb-3" />
            <h3 className="font-semibold mb-2">Đánh Giá Đồng Cấp</h3>
            <p className="text-sm text-muted-foreground">
              Đánh giá mỗi buổi học (1–5 sao). Bình luận bắt buộc cho đánh giá ≤3 sao (tối thiểu 20 ký tự) để duy trì tiêu chuẩn.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Shield className="h-10 w-10 mx-auto text-primary mb-3" />
            <h3 className="font-semibold mb-2">Nguyên Tắc Cộng Đồng</h3>
            <p className="text-sm text-muted-foreground">
              Quy tắc ứng xử rõ ràng. Báo cáo lạm dụng ngay lập tức. Đội ngũ quản trị xem xét tranh chấp công bằng và nhanh chóng.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Clock className="h-10 w-10 mx-auto text-secondary mb-3" />
            <h3 className="font-semibold mb-2">Cancellation Policy</h3>
            <p className="text-sm text-muted-foreground">
              Cancel anytime, but <strong>&lt;2 hours</strong> before start triggers a warning. Repeat offenders face restrictions.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {[
            {
              q: "Tôi có cần mua Edits để bắt đầu không?",
              a: "Không! Bạn có thể bắt đầu dạy ngay để kiếm Edits. Có gói Edits tùy chọn (20/50/100) nếu bạn muốn học trước.",
            },
            {
              q: "Điều gì xảy ra nếu giáo viên hoặc người học của tôi không xuất hiện?",
              a: "Cả hai bên phải xác nhận hoàn thành. Nếu có người không xuất hiện, bạn có thể khiếu nại và đội ngũ quản trị sẽ điều tra và hoàn lại Edits nếu cần.",
            },
            {
              q: "Tôi có thể dạy nhiều kỹ năng không?",
              a: "Chắc chắn rồi! Liệt kê bao nhiêu kỹ năng Có thể dạy và Muốn học tùy thích. Bạn càng cung cấp nhiều, càng dễ tìm được người phù hợp.",
            },
            {
              q: "Có phí đăng ký nào không?",
              a: "Nền tảng cốt lõi miễn phí. Bạn chỉ chi tiêu Edits khi đặt buổi học với tư cách người học. Có gói Edits tùy chọn để mua.",
            },
            {
              q: "Đánh giá hoạt động như thế nào?",
              a: "Sau mỗi buổi học, cả giáo viên và người học để lại đánh giá 1–5 sao. Nếu bạn đánh giá ≤3 sao, bạn phải cung cấp bình luận (tối thiểu 20 ký tự) để giúp duy trì chất lượng.",
            },
          ].map((faq, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Card className="p-8 text-center bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-bold mb-4">Sẵn Sàng Bắt Đầu Học?</h2>
        <p className="text-muted-foreground mb-6">
          Tham gia cộng đồng chia sẻ kỹ năng của chúng tôi ngay hôm nay
        </p>
        <Link to="/marketplace">
          <Button variant="hero" size="lg">
            Khám Phá Chợ Kỹ Năng
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default HowItWorks;
