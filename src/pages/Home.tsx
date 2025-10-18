import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { skillCategories, mockReviews } from "@/lib/mockData";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import ScrollReveal from "@/components/layout/ScrollReveal";
import StatCounter from "@/components/home/StatsCounter";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "none",
          }}
        />
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        {/* Animated particles */}
        <AnimatedBackground />
        
        {/* Floating blob shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                CHUNG TAY TRAO ĐỔI
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
                LẤP ĐẦY KỸ NĂNG
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in stagger-1">
              Biến kỹ năng thành tài sản. Dùng thời gian đầu tư cho tri thức. Cùng kiến tạo một vòng tròn cho và nhận không ngừng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in stagger-2">
              <Link to="/marketplace">
                <Button variant="hero" size="lg" className="hover-glow group">
                  Tạo Hồ Sơ Ngay
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" size="lg" className="hover-lift glass-card border-primary/20">
                  Xem Chợ Kỹ Năng
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-24 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SWC Hoạt Động Ra Sao?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chỉ 3 bước đơn giản để bắt đầu học và dạy
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Tạo Hồ Sơ",
              description: "Liệt kê kỹ năng bạn có thể dạy và muốn học. Thêm khung giờ rảnh của bạn.",
              icon: Users,
            },
            {
              step: "2",
              title: "Tìm Người Phù Hợp & Đặt Lịch",
              description: "Tìm kiếm theo từ khóa, cấp độ hoặc địa điểm. Nhắn tin trao đổi và hẹn giờ học.",
              icon: Clock,
            },
            {
              step: "3",
              title: "Học Xong & Đánh Giá",
              description: "Hoàn thành buổi học, hệ thống tính Edits và đánh giá.",
              icon: CheckCircle,
            },
          ].map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 100}>
              <Card className="p-8 hover-lift glass-card group cursor-pointer h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-2xl mb-6 shadow-accent group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 p-8 rounded-3xl glass-card border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient" />
            <div className="relative flex items-start gap-4">
              <div className="text-5xl">💡</div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Ngân Hàng Thời Gian - Công Bằng Cho Mọi Người</h4>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">1 giờ = 10 Edits</strong> Tại Skill Swap Connect, chúng tôi tin rằng thời gian của mỗi người đều quý giá như nhau. Mỗi giờ bạn dành để chia sẻ kỹ năng đều được ghi nhận công bằng, bất kể đó là kỹ năng gì.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Highlights */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="container relative">
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
                title: "Đánh Giá Lẫn Nhau",
                description: "Hệ thống đánh giá giúp duy trì chất lượng và an toàn.",
              },
              {
                icon: Clock,
                title: "Linh Hoạt Thời Gian",
                description: "Online hay offline đều được. Lịch của bạn, bạn quyết.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-8 text-center glass-card hover-lift group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-accent group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700" />
        
        {/* Animated blob shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Thành Tựu Cộng Đồng Skill Swap Connect
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Cộng đồng đang phát triển mạnh mẽ với hàng nghìn thành viên tích cực
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <StatCounter end={5000} suffix="+" label="Thành viên tích cực" />
            <StatCounter end={1200} suffix="+" label="Phiên trao đổi kỹ năng" />
            <StatCounter end={98} suffix="%" label="Mức độ hài lòng" />
            <StatCounter end={30} suffix="+" label="Đối tác học tập" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-24 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Các Kỹ Năng Phổ Biến
            </h2>
            <p className="text-lg text-muted-foreground">Khám phá những gì bạn có thể học hoặc dạy</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 100}>
              <Card className="p-8 hover-lift glass-card group cursor-pointer">
                <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-primary/10 transition-colors hover-scale cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mọi Người Nói Gì Về Chúng Tôi
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {mockReviews.slice(0, 3).map((review, index) => (
              <ScrollReveal key={review.id} delay={index * 100}>
                <Card className="p-8 shadow-elevated hover-lift glass-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{review.fromAvatar}</div>
                    <div>
                      <div className="font-semibold text-lg">{review.fromUser}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.comment}</p>
                  <Badge variant="outline" className="bg-primary/5 border-primary/20">
                    {review.skill}
                  </Badge>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-24 md:py-32">
        <ScrollReveal>
          <div className="rounded-[3rem] glass-card border-primary/20 p-12 md:p-20 text-center relative overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 animate-gradient" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Bắt Đầu Học - Dạy Ngay Hôm Nay
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Cùng hàng nghìn người đang trao đổi kỹ năng mỗi ngày
              </p>
              <Link to="/marketplace">
                <Button variant="hero" size="lg" className="shadow-glow hover:scale-105 transition-all duration-500 group">
                  Đăng Ký Ngay
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
