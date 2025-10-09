import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { skillCategories, mockUsers, mockReviews } from "@/lib/mockData";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trao Đổi Thời Gian. Phát Triển Kỹ Năng.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Học những gì bạn muốn. Dạy những gì bạn giỏi. Thanh toán bằng Edits, không dùng tiền.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button variant="hero" size="lg">
                  Tạo Hồ Sơ Kỹ Năng
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" size="lg">
                  Khám Phá Thị Trường
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SWC Hoạt Động Như Thế Nào</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ba bước đơn giản để bắt đầu học và dạy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Tạo Hồ Sơ Của Bạn",
              description: "Liệt kê các kỹ năng bạn có thể dạy (Cung cấp) và muốn học (Mong muốn). Thêm lịch trình của bạn.",
              icon: Users,
            },
            {
              step: "2",
              title: "Kết Nối & Đặt Lịch",
              description: "Tìm kiếm theo thẻ, cấp độ hoặc địa điểm. Trò chuyện để đồng bộ mục tiêu và xác nhận khung giờ.",
              icon: Clock,
            },
            {
              step: "3",
              title: "Hoàn Thành & Đánh Giá",
              description: "Thực hiện buổi học của bạn. Hệ thống tự động ghi nhận Edits (10 mỗi giờ). Để lại đánh giá.",
              icon: CheckCircle,
            },
          ].map((item) => (
            <Card key={item.step} className="p-6 hover-lift shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl mb-4">
                {item.step}
              </div>
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="font-semibold mb-2">Công Bằng Ngân Hàng Thời Gian</h4>
              <p className="text-sm text-muted-foreground">
                <strong>1 giờ = 10 Edits</strong> cho tất cả mọi người. Dù bạn dạy guitar hay lập trình,
                thời gian của bạn đều được định giá ngang nhau. Điều này tạo ra một cộng đồng cân bằng, toàn diện, nơi mọi kỹ năng đều có giá trị.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-16 md:py-24 bg-muted/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: CheckCircle,
              title: "Miễn Phí Cơ Bản",
              description: "Không có phí đăng ký. Gói Edits tùy chọn có sẵn.",
            },
            {
              icon: Shield,
              title: "Công Bằng Ngân Hàng Thời Gian",
              description: "Mỗi giờ đều trị giá 10 Edits. Tất cả kỹ năng đều được định giá ngang nhau.",
            },
            {
              icon: Star,
              title: "Đánh Giá Đồng Đẳng Xây Dựng Niềm Tin",
              description: "Xếp hạng cộng đồng giữ tiêu chuẩn cao và an toàn.",
            },
            {
              icon: Clock,
              title: "Học Mọi Lúc, Mọi Nơi",
              description: "Trực tuyến hoặc ngoại tuyến. Lịch trình của bạn, sự lựa chọn của bạn.",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center shadow-soft">
              <item.icon className="h-10 w-10 mx-auto text-primary mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Danh Mục Kỹ Năng Nổi Bật</h2>
          <p className="text-lg text-muted-foreground">Khám phá những gì bạn có thể học hoặc dạy</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="p-6 hover-lift cursor-pointer shadow-soft">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-16 md:py-24 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cộng Đồng Của Chúng Tôi Nói Gì</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockReviews.slice(0, 3).map((review) => (
            <Card key={review.id} className="p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{review.fromAvatar}</div>
                <div>
                  <div className="font-semibold">{review.fromUser}</div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
              <Badge variant="outline" className="text-xs">
                {review.skill}
              </Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16 md:py-24">
        <div className="rounded-2xl bg-primary/5 border-2 border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bắt Đầu Hành Trình Kỹ Năng Của Bạn Hôm Nay</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn người học và giáo viên trao đổi kỹ năng mỗi ngày
          </p>
          <Link to="/marketplace">
            <Button variant="hero" size="lg">
              Bắt Đầu Ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
