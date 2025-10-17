import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { skillCategories, mockUsers, mockReviews } from "@/lib/mockData";
import { useState, useEffect, useRef } from "react";

// Custom animated counter component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 leading-tight">
        {count.toLocaleString()}
        {suffix && (
          <span className={`text-orange-500 ${suffix === "%" ? "align-baseline" : "align-super"} text-4xl md:text-5xl lg:text-6xl`}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

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
        <div className="container relative py-16 md:py-32 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-6">
              CHUNG TAY TRAO ĐỔI LẤP ĐẦY KỸ NĂNG
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Biến kỹ năng thành tài sản. Dùng thời gian đầu tư cho tri thức. Cùng kiến tạo một vòng tròn cho và nhận không ngừng
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/profile/create">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Tạo Hồ Sơ Ngay
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Xem Chợ Kỹ Năng
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Redesigned */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Giới thiệu chung về Skill Swap Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Mục tiêu",
                description: "Xây dựng một cộng đồng học tập ngang hàng, nơi mọi người có thể sử dụng chính kỹ năng và thời gian của mình làm phương tiện trao đổi để học hỏi lẫn nhau.",
                icon: Users,
                delay: "0ms",
              },
              {
                step: "2",
                title: "Giá trị cốt lõi",
                description: "Skill Swap Connect được xây dựng dựa trên 3 hệ giá trị cốt lõi chính là Chia sẻ - Kết nối - Vươn xa.",
                icon: Clock,
                delay: "100ms",
              },
              {
                step: "3",
                title: "Tầm nhìn",
                description: "Skill Swap Connect là 1 trong những đơn vị tiên phong tại Việt Nam xây dựng mô hình trao đổi kỹ năng mà không bị giới hạn bởi rào cản tài chính.",
                icon: CheckCircle,
                delay: "200ms",
              },
            ].map((item) => (
              <Card
               key={item.step}
               className="group p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in-up"
               style={{ animationDelay: item.delay }}
             >
               {/* Circular Gradient Number Badge */}
               <div className="relative mb-4 md:mb-6">
                 <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />

                 <div className="relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg md:text-xl shadow-lg mx-auto">
                   {item.step}
                 </div>
               </div>

               {/* Icon */}
               <div className="mb-3 md:mb-4">
                 <item.icon className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
               </div>

               {/* Content */}
               <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                 {item.title}
               </h3>
               <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg text-left">
                 {item.description}
               </p>
             </Card>
            ))}
          </div>

          {/* Time Banking Info */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl md:rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="text-4xl md:text-5xl">💡</div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Ngân Hàng Thời Gian - Công Bằng Cho Mọi Người</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    <strong className="text-blue-600">1 giờ = 10 Edits</strong> Tại Skill Swap Connect, chúng tôi tin rằng thời gian của mỗi người đều quý giá như nhau. Mỗi giờ bạn dành để chia sẻ kỹ năng đều được ghi nhận công bằng, bất kể đó là kỹ năng gì.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Achievements */}
      <section className="py-16 md:py-28 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Thành Tựu Cộng Đồng Skill Swap Connect
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Cùng nhìn lại hành trình phát triển và những con số ấn tượng của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                value: 5000,
                suffix: "+",
                label: "Thành viên tích cực",
                description: "Người dùng đang trao đổi kỹ năng mỗi ngày"
              },
              {
                value: 1200,
                suffix: "+",
                label: "Phiên trao đổi kỹ năng",
                description: "Buổi học đã được thực hiện thành công"
              },
              {
                value: 98,
                suffix: "%",
                label: "Mức độ hài lòng",
                description: "Người dùng hài lòng với trải nghiệm"
              },
              {
                value: 30,
                suffix: "+",
                label: "Đối tác & cộng đồng",
                description: "Tổ chức hợp tác cùng phát triển"
              }
            ].map((stat, index) => (
              <div
               key={index}
               className="group flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 hover:brightness-110 transition-all duration-500 cursor-pointer min-h-[120px] md:min-h-[160px] lg:min-h-[200px]"
             >
               <div className="flex flex-col items-center justify-center flex-1">
                 <AnimatedCounter
                   end={stat.value}
                   suffix={stat.suffix}
                   duration={2000}
                 />
                 <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mt-2 md:mt-4 mb-1 md:mb-2 text-center">
                   {stat.label}
                 </h3>
                 <p className="text-gray-200 text-center text-xs md:text-sm leading-relaxed">
                   {stat.description}
                 </p>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-12 md:py-24 bg-muted/30 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
            <Card key={index} className="p-4 md:p-6 text-center shadow-soft">
              <item.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto text-primary mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-12 md:py-24 px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Các Kỹ Năng Phổ Biến</h2>
          <p className="text-base md:text-lg text-muted-foreground">Khám phá những gì bạn có thể học hoặc dạy</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="p-4 md:p-6 hover-lift cursor-pointer shadow-soft">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{category.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {category.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* GƯƠNG MẶT TIÊU BIỂU */}
      <section className="container py-12 md:py-24 px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Tại sao mọi người chọn Skill Swap Connect</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
            <Card key={index} className="p-4 md:p-6 text-center bg-white border border-gray-200 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xl md:text-2xl">
                  {testimonial.avatar}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2 md:mb-3">{testimonial.name}</h3>
              <p className="text-gray-600 leading-relaxed text-xs md:text-sm italic">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </section>

     

      {/* Final CTA */}
      <section className="container py-12 md:py-24 px-4 sm:px-6">
        <div className="rounded-xl md:rounded-2xl bg-primary/5 border-2 border-primary/20 p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Bắt Đầu Học - Dạy Ngay Hôm Nay</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Cùng hàng nghìn người đang trao đổi kỹ năng mỗi ngày
          </p>
          <Link to="/marketplace">
            <Button variant="hero" size="lg" className="text-sm md:text-base">
              Đăng Ký Ngay
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeNew;