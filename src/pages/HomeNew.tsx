import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { skillCategories, mockUsers, mockReviews } from "@/lib/mockData";

const HomeNew = () => {
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
           <h1 class="text-5xl font-bold leading-tight sm:text-4xl sm:leading-snug text-center">
  CHUNG TAY TRAO ĐỔI LẤP ĐẦY KỸ NĂNG
</h1>


            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Biến kỹ năng thành tài sản. Dùng thời gian đầu tư cho tri thức. Cùng kiến tạo một vòng tròn cho và nhận không ngừng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button variant="hero" size="lg">
                  Tạo Hồ Sơ Ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" size="lg">
                  Xem Chợ Kỹ Năng
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20" />
        
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              SWC Hoạt Động Ra Sao?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Chỉ 3 bước đơn giản để bắt đầu học và dạy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Tạo Hồ Sơ",
                description: "Liệt kê kỹ năng bạn có thể dạy và muốn học. Thêm khung giờ rảnh của bạn.",
                icon: Users,
                delay: "0ms",
              },
              {
                step: "2",
                title: "Tìm Người Phù Hợp & Đặt Lịch",
                description: "Tìm kiếm theo từ khóa, cấp độ hoặc địa điểm. Nhắn tin trao đổi và hẹn giờ học.",
                icon: Clock,
                delay: "100ms",
              },
              {
                step: "3",
                title: "Học Xong & Đánh Giá",
                description: "Hoàn thành buổi học, hệ thống tính Edits và đánh giá.",
                icon: CheckCircle,
                delay: "200ms",
              },
            ].map((item) => (
              <Card 
                key={item.step} 
                className="group p-8 text-center bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                {/* Circular Gradient Number Badge */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-lg mx-auto">
                    {item.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Time Banking Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-5xl">💡</div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Ngân Hàng Thời Gian - Công Bằng Cho Mọi Người</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-blue-600">1 giờ = 10 Edits</strong> Tại Skill Swap Connect, chúng tôi tin rằng thời gian của mỗi người đều quý giá như nhau. Mỗi giờ bạn dành để chia sẻ kỹ năng đều được ghi nhận công bằng, bất kể đó là kỹ năng gì.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-16 md:py-24 bg-muted/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: CheckCircle,
              title: "Miễn Phí Sử Dụng",
              description: "Không tốn phí đăng ký. Có gói Edits nếu bạn cần thêm.",
            },
            {
              icon: Shield,
              title: "Công Bằng Tuyệt Đối",
              description: "1 giờ = 10 Edits cho tất cả. Mọi kỹ năng đều có giá trị như nhau.",
            },
            {
              icon: Star,
              title: "Đánh Giá Lẫn Nhau Xây Dựng Uy Tín",
              description: "Hệ thống đánh giá giúp duy trì chất lượng và an toàn.",
            },
            {
              icon: Clock,
              title: "Học Bất Cứ Lúc Nào, Ở Đâu Cũng Được",
              description: "Online hay offline đều được. Lịch của bạn, bạn quyết.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Các Kỹ Năng Phổ Biến</h2>
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

      {/* GƯƠNG MẶT TIÊU BIỂU */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tại sao mọi người chọn Skill Swap Connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Lê Đức Anh",
              quote: "Skill Swap Connect giúp tôi học kỹ năng thiết kế trong khi vẫn cân bằng công việc và gia đình.",
              avatar: "👩‍💼",
            },
            {
              name: "Nguyễn Thị Minh",
              quote: "Tôi tìm lại được niềm tin vào bản thân khi dạy người khác kỹ năng mình có.",
              avatar: "👨‍🏫",
            },
            {
              name: "Hà Minh Anh",
              quote: "Tôi cảm thấy tự tin hơn và bắt đầu hướng dẫn đồng nghiệp.",
              avatar: "👨‍💼",
            },
            {
              name: "Lại Quang Nam",
              quote: "Học với cộng đồng SWC giúp tôi mở rộng góc nhìn toàn cầu.",
              avatar: "👨‍🎓",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6 text-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{testimonial.name}</h3>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </section>

     

      {/* Final CTA */}
      <section className="container py-16 md:py-24">
        <div className="rounded-2xl bg-primary/5 border-2 border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bắt Đầu Học - Dạy Ngay Hôm Nay</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cùng hàng nghìn người đang trao đổi kỹ năng mỗi ngày
          </p>
          <Link to="/marketplace">
            <Button variant="hero" size="lg">
              Đăng Ký Ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeNew;