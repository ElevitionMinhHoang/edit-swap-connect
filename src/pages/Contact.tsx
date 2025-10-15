import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="container py-8 max-w-6xl">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại tin nhắn và chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card className="p-6 h-full w-full min-w-[300px]">
            <h2 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground whitespace-nowrap overflow-visible text-sm md:text-base">
                    supportssc@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Phản hồi trong 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-1">Điện Thoại</h3>
                  <p className="text-muted-foreground">+84 123 456 789</p>
                  <p className="text-sm text-muted-foreground mt-1">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold mb-1">Địa Chỉ</h3>
                  <p className="text-muted-foreground">12 Chùa Bộc</p>
                  <p className="text-muted-foreground">Quận Đống Đa, TP Hà Nội</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Hỗ Trợ Nhanh</h4>
              <p className="text-sm text-blue-700">
                Đối với các vấn đề khẩn cấp hoặc hỗ trợ kỹ thuật, vui lòng gọi số hotline hoặc gửi email với tiêu đề "URGENT".
              </p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 w-full">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Tin Nhắn Đã Được Gửi!</h2>
                <p className="text-muted-foreground mb-6">
                  Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Gửi Tin Nhắn Khác
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và Tên *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập họ và tên của bạn"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số Điện Thoại</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+84 123 456 789"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Chủ Đề *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Tiêu đề tin nhắn"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội Dung Tin Nhắn *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hãy mô tả chi tiết vấn đề hoặc câu hỏi của bạn..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Gửi Tin Nhắn
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </Card>

          {/* FAQ Section */}
          <Card className="p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">Câu Hỏi Thường Gặp</h3>
            <div className="space-y-4">
              {[
                {
                  q: "Tôi gặp vấn đề kỹ thuật với tài khoản, làm thế nào?",
                  a: "Vui lòng gửi email đến support@skillswapconnect.com với tiêu đề 'Technical Issue' và mô tả chi tiết vấn đề bạn gặp phải."
                },
                {
                  q: "Tôi muốn đề xuất tính năng mới cho nền tảng?",
                  a: "Chúng tôi rất muốn nghe ý kiến của bạn! Hãy gửi đề xuất qua form liên hệ này hoặc tham gia cộng đồng người dùng của chúng tôi."
                },
                {
                  q: "Tôi muốn hợp tác với Skill Swap Connect?",
                  a: "Đối với các đề xuất hợp tác, vui lòng gửi email đến partnership@skillswapconnect.com với thông tin chi tiết về đề xuất của bạn."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;