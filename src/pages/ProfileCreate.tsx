
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { User, Camera, GraduationCap, BookOpen, Clock, Wallet, Mail, ArrowLeft, ArrowRight } from "lucide-react";

interface ProfileData {
  avatar: string;
  fullName: string;
  age: string;
  gender: string;
  location: string;
  bio: string;
  offerSkills: Array<{
    skill: string;
    level: string;
    description: string;
  }>;
  wantSkills: string[];
  learningGoal: string;
  learningMode: string[];
  availableTimes: Array<{
    day: string;
    period: string;
    selected: boolean;
  }>;
  email: string;
  phone: string;
}

const ProfileCreate = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    avatar: "",
    fullName: "",
    age: "",
    gender: "",
    location: "",
    bio: "",
    offerSkills: [{ skill: "", level: "Cơ Bản", description: "" }],
    wantSkills: [],
    learningGoal: "",
    learningMode: ["Online"],
    availableTimes: [
      { day: "Thứ 2", period: "Sáng", selected: false },
      { day: "Thứ 2", period: "Chiều", selected: false },
      { day: "Thứ 2", period: "Tối", selected: false },
      { day: "Thứ 3", period: "Sáng", selected: false },
      { day: "Thứ 3", period: "Chiều", selected: false },
      { day: "Thứ 3", period: "Tối", selected: false },
      { day: "Thứ 4", period: "Sáng", selected: false },
      { day: "Thứ 4", period: "Chiều", selected: false },
      { day: "Thứ 4", period: "Tối", selected: false },
      { day: "Thứ 5", period: "Sáng", selected: false },
      { day: "Thứ 5", period: "Chiều", selected: false },
      { day: "Thứ 5", period: "Tối", selected: false },
      { day: "Thứ 6", period: "Sáng", selected: false },
      { day: "Thứ 6", period: "Chiều", selected: false },
      { day: "Thứ 6", period: "Tối", selected: false },
      { day: "Thứ 7", period: "Sáng", selected: false },
      { day: "Thứ 7", period: "Chiều", selected: false },
      { day: "Thứ 7", period: "Tối", selected: false },
      { day: "Chủ nhật", period: "Sáng", selected: false },
      { day: "Chủ nhật", period: "Chiều", selected: false },
      { day: "Chủ nhật", period: "Tối", selected: false },
    ],
    email: "",
    phone: "",
  });

  const totalSteps = 5;
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem("profileCreationData", JSON.stringify(profileData));
  }, [profileData]);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("profileCreationData");
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast.success("🎉 Hồ sơ của bạn đã được tạo thành công!");
    localStorage.removeItem("profileCreationData");
    setTimeout(() => {
      navigate("/marketplace");
    }, 1500);
  };

  const addOfferSkill = () => {
    setProfileData(prev => ({
      ...prev,
      offerSkills: [...prev.offerSkills, { skill: "", level: "Cơ Bản", description: "" }]
    }));
  };

  const removeOfferSkill = (index: number) => {
    setProfileData(prev => ({
      ...prev,
      offerSkills: prev.offerSkills.filter((_, i) => i !== index)
    }));
  };

  const updateOfferSkill = (index: number, field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      offerSkills: prev.offerSkills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const addWantSkill = (skill: string) => {
    if (skill && !profileData.wantSkills.includes(skill)) {
      setProfileData(prev => ({
        ...prev,
        wantSkills: [...prev.wantSkills, skill]
      }));
    }
  };

  const removeWantSkill = (skill: string) => {
    setProfileData(prev => ({
      ...prev,
      wantSkills: prev.wantSkills.filter(s => s !== skill)
    }));
  };

  const toggleLearningMode = (mode: string) => {
    setProfileData(prev => ({
      ...prev,
      learningMode: prev.learningMode.includes(mode)
        ? prev.learningMode.filter(m => m !== mode)
        : [...prev.learningMode, mode]
    }));
  };

  const toggleAvailableTime = (day: string, period: string) => {
    setProfileData(prev => ({
      ...prev,
      availableTimes: prev.availableTimes.map(time =>
        time.day === day && time.period === period
          ? { ...time, selected: !time.selected }
          : time
      )
    }));
  };

  const popularSkills = ["React", "IELTS", "Guitar", "Data Analysis", "UI Design", "Public Speaking", "Nấu ăn", "Tiếng Anh"];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="p-4 sm:p-6 bg-white/80 border border-gray-200/60 rounded-xl sm:rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Thông tin cơ bản</h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Ảnh đại diện</label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                  {profileData.avatar ? (
                    <img src={profileData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <Camera className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => document.getElementById('avatar-upload')?.click()}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Chọn ảnh
                  </Button>
                  <input
                    id="avatar-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          setProfileData(prev => ({ ...prev, avatar: event.target?.result as string }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG tối đa 2MB</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                <Input
                  value={profileData.fullName}
                  onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Nguyễn Văn A"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tuổi</label>
                <Input
                  value={profileData.age}
                  onChange={(e) => setProfileData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="25"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Giới tính</label>
                <select
                  value={profileData.gender}
                  onChange={(e) => setProfileData(prev => ({ ...prev, gender: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí</label>
                <Input
                  value={profileData.location}
                  onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Hà Nội, Việt Nam"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả ngắn</label>
              <Textarea
                value={profileData.bio}
                onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Giới thiệu nhanh về bản thân và kỹ năng bạn muốn chia sẻ..."
                rows={3}
                className="w-full"
              />
            </div>
          </Card>
        );

      case 2:
        return (
          <Card className="p-4 sm:p-6 bg-white/80 border-l-4 border-l-blue-500 rounded-xl sm:rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Kỹ năng bạn có thể dạy</h2>
            </div>

            {profileData.offerSkills.map((skill, index) => (
              <div key={index} className="mb-6 p-4 border border-gray-200 rounded-xl bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kỹ năng</label>
                    <Input
                      value={skill.skill}
                      onChange={(e) => updateOfferSkill(index, "skill", e.target.value)}
                      placeholder="React, IELTS, Guitar..."
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cấp độ</label>
                    <select
                      value={skill.level}
                      onChange={(e) => updateOfferSkill(index, "level", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Cơ Bản">Cơ Bản</option>
                      <option value="Trung Cấp">Trung Cấp</option>
                      <option value="Nâng Cao">Nâng Cao</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả kỹ năng</label>
                  <Textarea
                    value={skill.description}
                    onChange={(e) => updateOfferSkill(index, "description", e.target.value)}
                    placeholder="Mô tả ngắn về kỹ năng và kinh nghiệm của bạn..."
                    rows={2}
                    className="w-full"
                  />
                </div>
                
                {profileData.offerSkills.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => removeOfferSkill(index)}
                  >
                    Xóa kỹ năng này
                  </Button>
                )}
              </div>
            ))}

            <Button variant="outline" onClick={addOfferSkill} className="w-full">
              + Thêm kỹ năng khác
            </Button>
          </Card>
        );

      case 3:
        return (
          <Card className="p-4 sm:p-6 bg-white/80 border-l-4 border-l-purple-500 rounded-xl sm:rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Kỹ năng bạn muốn học</h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Thêm kỹ năng muốn học</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Nhập kỹ năng..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addWantSkill((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  onClick={() => {
                    const input = document.querySelector('input[placeholder="Nhập kỹ năng..."]') as HTMLInputElement;
                    if (input.value) {
                      addWantSkill(input.value);
                      input.value = '';
                    }
                  }}
                >
                  Thêm
                </Button>
              </div>
              
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Kỹ năng phổ biến:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-pointer hover:bg-blue-100"
                      onClick={() => addWantSkill(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Kỹ năng đã chọn</label>
              <div className="flex flex-wrap gap-2">
                {profileData.wantSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="default"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  >
                    {skill}
                    <button
                      onClick={() => removeWantSkill(skill)}
                      className="ml-2 hover:text-red-200"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                {profileData.wantSkills.length === 0 && (
                  <p className="text-sm text-gray-500">Chưa có kỹ năng nào được chọn</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lý do hoặc mục tiêu học</label>
              <Textarea
                value={profileData.learningGoal}
                onChange={(e) => setProfileData(prev => ({ ...prev, learningGoal: e.target.value }))}
                placeholder="Lý do hoặc mục tiêu học (1–2 dòng)..."
                rows={2}
                className="w-full"
              />
            </div>
          </Card>
        );

      case 4:
        return (
          <Card className="p-4 sm:p-6 bg-white/80 border-l-4 border-l-green-500 rounded-xl sm:rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Thời gian rảnh & hình thức học</h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Hình thức học</label>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant={profileData.learningMode.includes("Online") ? "default" : "outline"}
                  onClick={() => toggleLearningMode("Online")}
                  className="flex items-center gap-2"
                >
                  💻 Học Online
                </Button>
                <Button
                  variant={profileData.learningMode.includes("Trực tiếp") ? "default" : "outline"}
                  onClick={() => toggleLearningMode("Trực tiếp")}
                  className="flex items-center gap-2"
                >
                  🧍‍♂️ Gặp Trực Tiếp
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Thời gian rảnh</label>
              <p className="text-sm text-gray-600 mb-4">Chọn các khung giờ bạn có thể dạy/học:</p>
              
              {/* Selected Times Summary */}
              {profileData.availableTimes.filter(time => time.selected).length > 0 && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800 mb-2">Thời gian đã chọn:</p>
                  <div className="flex flex-wrap gap-1">
                    {profileData.availableTimes
                      .filter(time => time.selected)
                      .map((time, index) => (
                        <Badge key={index} variant="default" className="bg-blue-500 text-white text-xs">
                          {time.day} {time.period}
                        </Badge>
                      ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                {["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"].map((day) => (
                  <div key={day} className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">{day}</p>
                    {["Sáng", "Chiều", "Tối"].map((period) => {
                      const isSelected = profileData.availableTimes.some(
                        time => time.day === day && time.period === period && time.selected
                      );
                      return (
                        <Button
                          key={period}
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          className={`w-full text-xs transition-all duration-200 ${
                            isSelected
                              ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => toggleAvailableTime(day, period)}
                        >
                          {period}
                          {isSelected && (
                            <span className="ml-1">✓</span>
                          )}
                        </Button>
                      );
                    })}
                  </div>
                ))}
              </div>
              
              {/* Quick Selection Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setProfileData(prev => ({
                      ...prev,
                      availableTimes: prev.availableTimes.map(time => ({
                        ...time,
                        selected: time.period === "Tối"
                      }))
                    }));
                  }}
                  className="text-xs"
                >
                  Chọn tất cả buổi tối
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setProfileData(prev => ({
                      ...prev,
                      availableTimes: prev.availableTimes.map(time => ({
                        ...time,
                        selected: time.day === "Thứ 7" || time.day === "Chủ nhật"
                      }))
                    }));
                  }}
                  className="text-xs"
                >
                  Chọn cuối tuần
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setProfileData(prev => ({
                      ...prev,
                      availableTimes: prev.availableTimes.map(time => ({
                        ...time,
                        selected: false
                      }))
                    }));
                  }}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  Xóa tất cả
                </Button>
              </div>
            </div>
          </Card>
        );

      case 5:
        return (
          <Card className="p-4 sm:p-6 bg-white/80 border-l-4 border-l-orange-500 rounded-xl sm:rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Wallet className="h-6 w-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">Ví Edits & Liên hệ</h2>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-700">Số dư Edits hiện tại:</span>
                <span className="text-2xl font-bold text-blue-600">0 Edits</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                💡 1 giờ dạy = +10 Edits, 1 giờ học = –10 Edits
              </p>
              <Link to="/wallet">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                  Nạp Edits
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email
                </label>
                <Input
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@example.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📱 Số điện thoại
                </label>
                <Input
                  value={profileData.phone}
                  onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+84 123 456 789"
                  className="w-full"
                />
              </div>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-4 sm:py-8">
      <div className="container max-w-6xl mx-auto px-3 sm:px-6">
        {/* Progress Bar */}
        <Card className="mb-8 p-4 sm:p-6 bg-white/80 border-0 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Tạo Hồ Sơ</h1>
            </div>
            <span className="text-sm font-medium text-gray-600">
              Bước {currentStep}/{totalSteps}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4 sm:pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                >
                  Tiếp theo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg"
                >
                  {isSubmitting ? "Đang xử lý..." : "Hoàn tất hồ sơ"}
                </Button>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 bg-white/80 border-0 shadow-lg sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Xem trước hồ sơ</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    {profileData.avatar ? (
                      <img src={profileData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {profileData.fullName || "Chưa có tên"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {profileData.location || "Chưa có vị trí"}
                    </p>
                  </div>
                </div>

                {profileData.offerSkills.length > 0 && profileData.offerSkills[0].skill && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Kỹ năng dạy:</p>
                    <div className="flex flex-wrap gap-1">
                      {profileData.offerSkills.slice(0, 3).map((skill, index) => (
                        skill.skill && (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill.skill}
                          </Badge>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {profileData.wantSkills.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Kỹ năng muốn học:</p>
                    <div className="flex flex-wrap gap-1">
                      {profileData.wantSkills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="default" className="bg-purple-100 text-purple-700 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {profileData.availableTimes.filter(time => time.selected).length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Thời gian rảnh:</p>
                    <div className="flex flex-wrap gap-1">
                      {profileData.availableTimes
                        .filter(time => time.selected)
                        .slice(0, 3)
                        .map((time, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {time.day} {time.period}
                          </Badge>
                        ))}
                      {profileData.availableTimes.filter(time => time.selected).length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{profileData.availableTimes.filter(time => time.selected).length - 3} khác
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Số dư Edits:</span>
                    <span className="font-bold text-blue-600">0</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreate;