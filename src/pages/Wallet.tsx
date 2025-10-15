
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet as WalletIcon, TrendingUp, TrendingDown, Plus, ArrowUpRight, ArrowDownRight, Zap, Rocket, Crown, Sparkles } from "lucide-react";
import { mockTransactions } from "@/lib/mockData";
import { useState, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Custom Tooltip Component for Chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 animate-fade-in">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span className="text-sm text-gray-600">Giờ học:</span>
            <span className="text-sm font-semibold text-blue-600">{payload[0].value}h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-gray-600">Giờ dạy:</span>
            <span className="text-sm font-semibold text-orange-500">{payload[1].value}h</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// Payment Modal Component
const PaymentModal = ({ isOpen, onClose, selectedPack, onSuccess }: any) => {
  const [selectedMethod, setSelectedMethod] = useState('momo');
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!isOpen) return null;
  
  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess(selectedPack.amount);
      onClose();
    }, 2000);
  };
  
  const paymentMethods = [
    { id: 'momo', name: 'MoMo', icon: '💜', color: 'bg-purple-500' },
    { id: 'zalopay', name: 'ZaloPay', icon: '💙', color: 'bg-blue-500' },
    { id: 'bank', name: 'Thẻ ngân hàng', icon: '💳', color: 'bg-green-500' },
    { id: 'swc', name: 'Ví SWC', icon: '🎯', color: 'bg-orange-500' },
  ];
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 animate-scale-in">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">Xác Nhận Thanh Toán</h3>
          <p className="text-muted-foreground">Mua {selectedPack.amount} Edits</p>
          <div className="text-2xl font-bold text-primary mt-2">{selectedPack.price}</div>
        </div>
        
        <div className="space-y-4 mb-6">
          <h4 className="font-semibold">Chọn phương thức thanh toán:</h4>
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedMethod === method.id 
                  ? 'border-primary bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center text-white text-lg`}>
                  {method.icon}
                </div>
                <span className="font-medium">{method.name}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={onClose}
            disabled={isProcessing}
          >
            Hủy
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Đang xử lý...
              </>
            ) : (
              'Xác Nhận Thanh Toán'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Wallet = () => {
  const currentBalance = 150;
  const totalEarned = 240;
  const totalSpent = 140;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showLearning, setShowLearning] = useState(true);
  const [showTeaching, setShowTeaching] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPack, setSelectedPack] = useState<any>(null);
  const [balance, setBalance] = useState(currentBalance);
  const [showSuccess, setShowSuccess] = useState(false);
  const [highlightPopular, setHighlightPopular] = useState(false);
  const buySectionRef = useRef<HTMLDivElement>(null);
  
  const activityData = [
    { week: "Tuần 1", learning: 8, teaching: 5 },
    { week: "Tuần 2", learning: 6, teaching: 7 },
    { week: "Tuần 3", learning: 10, teaching: 4 },
    { week: "Tuần 4", learning: 7, teaching: 6 },
  ];
  
  const totalLearningHours = activityData.reduce((sum, week) => sum + week.learning, 0);
  const totalTeachingHours = activityData.reduce((sum, week) => sum + week.teaching, 0);
  const totalSessions = totalLearningHours + totalTeachingHours;
  
  const currentWeekData = activeIndex !== null ? activityData[activeIndex] : null;
  
  const editPacks = [
    {
      id: 1,
      icon: <Zap className="h-8 w-8" />,
      name: "Gói Khởi Động",
      amount: 20,
      hours: "2 giờ học",
      price: "49.000đ",
      originalPrice: "59.000đ",
      discount: "17%",
      popular: false,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      glowColor: "hover:shadow-blue-500/20"
    },
    {
      id: 2,
      icon: <Rocket className="h-8 w-8" />,
      name: "Gói Tiêu Chuẩn",
      amount: 50,
      hours: "5 giờ học", 
      price: "129.000đ",
      originalPrice: "149.000đ",
      discount: "13%",
      popular: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      glowColor: "hover:shadow-purple-500/30"
    },
    {
      id: 3,
      icon: <Crown className="h-8 w-8" />,
      name: "Gói Chuyên Sâu",
      amount: 100,
      hours: "10 giờ học",
      price: "199.000đ",
      originalPrice: "249.000đ",
      discount: "20%",
      popular: false,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      glowColor: "hover:shadow-orange-500/20"
    }
  ];
  
  const handleBuyClick = (pack: any) => {
    setSelectedPack(pack);
    setShowPaymentModal(true);
  };
  
  const handlePaymentSuccess = (amount: number) => {
    setBalance(prev => prev + amount);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleBuyEditsClick = () => {
    console.log('Mua Edits button clicked');
    // Scroll to buy section using ref
    if (buySectionRef.current) {
      console.log('Found buy section via ref:', buySectionRef.current);
      console.log('Scrolling to buy section...');
      // Try multiple scroll methods
      try {
        buySectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      } catch (error) {
        console.log('Smooth scroll failed, using instant scroll');
        buySectionRef.current.scrollIntoView();
      }
      
      // Highlight popular package after scroll
      setTimeout(() => {
        console.log('Highlighting popular package');
        setHighlightPopular(true);
        setTimeout(() => setHighlightPopular(false), 2000);
      }, 800);
    } else {
      console.log('Buy section ref not found!');
      // Fallback to getElementById
      const buySection = document.getElementById('buy-section');
      console.log('Fallback - Found buy section via id:', buySection);
      if (buySection) {
        buySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div className="container py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Ví Của Tôi</h1>

      {/* Balance Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 shadow-elevated relative overflow-hidden">
          {showSuccess && (
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 animate-pulse rounded-lg" />
          )}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <WalletIcon className="h-8 w-8 text-primary" />
            <div className="relative">
              {showSuccess && (
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-4 w-4 text-green-500 animate-bounce" />
                </div>
              )}
              <Button
                size="sm"
                className="relative overflow-hidden"
                onClick={handleBuyEditsClick}
                type="button"
              >
                <Plus className="h-4 w-4 mr-1" />
                Mua Edits
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
              </Button>
            </div>
          </div>
          <div className="text-3xl font-bold mb-1 relative z-10">
            {balance} Edits
            {showSuccess && (
              <span className="text-sm text-green-600 ml-2 animate-fade-in">+{selectedPack?.amount}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground relative z-10">Số Dư Hiện Tại</p>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-secondary" />
          </div>
          <div className="text-2xl font-bold mb-1 text-secondary">{totalEarned} Edits</div>
          <p className="text-sm text-muted-foreground">Tổng Kiếm Được</p>
        </Card>

        <Card className="p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="h-6 w-6 text-destructive" />
          </div>
          <div className="text-2xl font-bold mb-1 text-destructive">{totalSpent} Edits</div>
          <p className="text-sm text-muted-foreground">Tổng Đã Dùng</p>
        </Card>
      </div>

      {/* Transactions */}
      <Card className="p-6 shadow-soft">
        <h2 className="text-xl font-semibold mb-6">Lịch Sử Giao Dịch</h2>
        <div className="space-y-4">
          {mockTransactions.map((transaction) => {
            const transactionDate = new Date(transaction.date);
            const isCredit = transaction.type === "CREDIT" || transaction.type === "PURCHASE";

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-4 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isCredit ? "bg-secondary/10" : "bg-destructive/10"
                    }`}
                  >
                    {isCredit ? (
                      <ArrowUpRight className="h-5 w-5 text-secondary" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-sm text-muted-foreground">
                      {transactionDate.toLocaleDateString("vi-VN", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}{" "}
                      lúc{" "}
                      {transactionDate.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                    {transaction.sessionRef !== "—" && (
                      <Badge variant="outline" className="mt-1 text-xs">
                        Buổi học: {transaction.sessionRef}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-lg font-semibold ${
                      isCredit ? "text-secondary" : "text-destructive"
                    }`}
                  >
                    {isCredit ? "+" : ""}
                    {transaction.amount} Edits
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Số dư: {transaction.balanceAfter}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Professional Activity Dashboard */}
      <Card className="p-6 mt-6 shadow-soft animate-fade-in-up">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tổng Quan Hoạt Động</h2>
          <p className="text-muted-foreground">
            Theo dõi tiến trình học tập và chia sẻ kỹ năng của bạn theo thời gian
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Professional Chart */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-4 h-80">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowLearning(!showLearning)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 ${
                      showLearning 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${showLearning ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                    <span className="text-sm font-medium">Giờ học</span>
                  </button>
                  <button 
                    onClick={() => setShowTeaching(!showTeaching)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 ${
                      showTeaching 
                        ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${showTeaching ? 'bg-orange-500' : 'bg-gray-400'}`}></div>
                    <span className="text-sm font-medium">Giờ dạy</span>
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Tuần 1 → Tuần 4
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={activityData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    onMouseMove={(data: any) => {
                      if (data && data.activeTooltipIndex !== undefined) {
                        setActiveIndex(data.activeTooltipIndex);
                      }
                    }}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <defs>
                      <linearGradient id="colorLearning" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorTeaching" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="week" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                      domain={[0, 12]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    {showLearning && (
                      <Area
                        type="monotone"
                        dataKey="learning"
                        stroke="#2563eb"
                        strokeWidth={3}
                        fill="url(#colorLearning)"
                        dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2, fill: '#ffffff' }}
                        isAnimationActive={true}
                        animationDuration={1200}
                      />
                    )}
                    {showTeaching && (
                      <Area
                        type="monotone"
                        dataKey="teaching"
                        stroke="#f97316"
                        strokeWidth={3}
                        fill="url(#colorTeaching)"
                        dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#f97316', strokeWidth: 2, fill: '#ffffff' }}
                        isAnimationActive={true}
                        animationDuration={1200}
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Interactive Stats Cards */}
          <div className="space-y-4">
            {[
              {
                icon: "📘",
                label: currentWeekData ? `Tuần ${activeIndex! + 1} học` : "Tổng giờ học",
                value: currentWeekData ? `${currentWeekData.learning}h` : `${totalLearningHours}h`,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                hoverColor: "hover:bg-blue-100"
              },
              {
                icon: "🎓",
                label: currentWeekData ? `Tuần ${activeIndex! + 1} dạy` : "Tổng giờ dạy",
                value: currentWeekData ? `${currentWeekData.teaching}h` : `${totalTeachingHours}h`,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                hoverColor: "hover:bg-orange-100"
              },
              {
                icon: "🔁",
                label: currentWeekData ? `Tuần ${activeIndex! + 1} tổng` : "Số phiên trao đổi",
                value: currentWeekData ? `${currentWeekData.learning + currentWeekData.teaching}` : `${totalSessions}`,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                hoverColor: "hover:bg-purple-100"
              }
            ].map((stat, index) => (
              <Card
                key={index}
                className={`p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up ${stat.hoverColor}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center text-lg`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Interactive Legend */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            {activeIndex !== null
              ? `Đang xem: ${activityData[activeIndex].week} - ${activityData[activeIndex].learning}h học, ${activityData[activeIndex].teaching}h dạy`
              : "Di chuột vào biểu đồ để xem chi tiết từng tuần"
            }
          </p>
        </div>
      </Card>

      {/* Modern Edits Purchase Section - Redesigned */}
      <div
        id="buy-section"
        ref={buySectionRef}
        className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3A0CA3] via-[#7209B7] to-[#F72585]/80 p-8"
      >
        {/* Background Particles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Nạp Edits - Mở Khóa Kỹ Năng</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Đầu tư vào tri thức của bạn với các gói Edits giá trị. 1 Edits = 6 phút học kỹ năng chất lượng
            </p>
          </div>
          
          {/* Edit Packs - Elevated Layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 justify-center items-start">
            {editPacks.map((pack, index) => (
              <div key={pack.id} className="relative">
                {/* Popular Badge - Only for middle card, placed outside card */}
                {pack.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                      Phổ Biến Nhất
                    </div>
                  </div>
                )}
                
                <Card
                  className={`bg-white rounded-2xl p-8 pt-14 text-center relative overflow-visible border-2 transition-all duration-300 animate-fade-in-up hover:-translate-y-1 hover:shadow-xl ${
                    pack.popular
                      ? 'shadow-lg border-purple-300'
                      : 'shadow-md hover:shadow-lg'
                  } ${pack.borderColor}`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  
                  <div className={`absolute inset-0 ${pack.bgColor} opacity-30`} />
                  
                  <div className="relative z-10">
                    {/* Elevated Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pack.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg relative -mt-6`}>
                      {pack.icon}
                    </div>
                    
                    {/* Package Name */}
                    <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                    
                    {/* Edits Amount */}
                    <div className="text-3xl font-bold mb-1">{pack.amount} Edits</div>
                    <div className="text-muted-foreground mb-2">{pack.hours}</div>
                    
                    {/* Price */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="text-2xl font-bold text-primary">{pack.price}</div>
                      {pack.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{pack.originalPrice}</div>
                      )}
                    </div>
                    
                    {/* Discount */}
                    {pack.discount && (
                      <div className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                        Tiết kiệm {pack.discount}
                      </div>
                    )}
                    
                    {/* Buy Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${pack.color} hover:opacity-90 transition-all duration-300 rounded-full font-medium`}
                      size="lg"
                      onClick={() => handleBuyClick(pack)}
                    >
                      Mua Ngay
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "⚡", text: "Học ngay mà không cần dạy" },
              { icon: "💰", text: "Nhận ưu đãi khi mua gói lớn" },
              { icon: "🎯", text: "Giữ vị trí ưu tiên khi đặt lịch" },
              { icon: "🏆", text: "Nhận huy hiệu 'Người học tích cực'" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <p className="text-white text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedPack={selectedPack}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Wallet;
