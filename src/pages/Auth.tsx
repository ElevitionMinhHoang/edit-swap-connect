
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSignUp = () => {
    const newErrors = {
      name: formData.name ? "" : "Vui lòng nhập họ tên",
      email: formData.email ? (validateEmail(formData.email) ? "" : "Email không hợp lệ") : "Vui lòng nhập email",
      password: formData.password ? (validatePassword(formData.password) ? "" : "Mật khẩu phải có ít nhất 6 ký tự") : "Vui lòng nhập mật khẩu",
      confirmPassword: formData.confirmPassword ? (formData.password === formData.confirmPassword ? "" : "Mật khẩu xác nhận không khớp") : "Vui lòng xác nhận mật khẩu"
    };

    setErrors(newErrors);

    // If no errors, proceed with signup
    if (!Object.values(newErrors).some(error => error)) {
      setEmailSent(true);
    }
  };

  const handleSignIn = () => {
    const newErrors = {
      email: formData.email ? (validateEmail(formData.email) ? "" : "Email không hợp lệ") : "Vui lòng nhập email",
      password: formData.password ? "" : "Vui lòng nhập mật khẩu",
      name: "",
      confirmPassword: ""
    };

    setErrors(newErrors);

    // If no errors, proceed with signin
    if (!newErrors.email && !newErrors.password) {
      setEmailSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Illustration & Info */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <div className="text-white text-6xl">🎓</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Trao Đổi Kỹ Năng. Nâng Tầm Bản Thân.
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Tham gia cộng đồng hàng nghìn người đang học và dạy mỗi ngày. 
            Học những gì bạn muốn, dạy những gì bạn giỏi.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Miễn phí đăng ký
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Công bằng tuyệt đối
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Học mọi lúc mọi nơi
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md p-10 shadow-2xl border-0 rounded-2xl bg-white">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl">
                  S
                </div>
                <span className="font-bold text-2xl text-gray-800">SWC</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Chào Mừng Đến Với SWC
              </h1>
              <p className="text-gray-500">
                Đăng nhập hoặc tạo tài khoản để bắt đầu
              </p>
            </div>

            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger 
                  value="signin" 
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 font-medium"
                >
                  Đăng Nhập
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 font-medium"
                >
                  Đăng Ký
                </TabsTrigger>
              </TabsList>

              {/* Sign In Form */}
              <TabsContent value="signin" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-signin" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email-signin"
                        type="email"
                        placeholder="email@example.com"
                        className="h-12 text-lg pl-10 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password-signin" className="text-sm font-medium text-gray-700">
                        Mật Khẩu
                      </Label>
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Quên mật khẩu?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password-signin"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-12 text-lg pl-10 pr-10 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>
                </div>

                <Button 
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg"
                  onClick={handleSignIn}
                >
                  Đăng Nhập
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Hoặc tiếp tục với</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full h-12 text-lg rounded-xl border-gray-300">
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Đăng nhập với Google
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Chưa có tài khoản?{" "}
                  <button 
                    onClick={() => {
                      const signupTab = document.querySelector('[data-value="signup"]') as HTMLElement;
                      if (signupTab) signupTab.click();
                    }}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Đăng ký ngay
                  </button>
                </p>
              </TabsContent>

              {/* Sign Up Form */}
              <TabsContent value="signup" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name-signup" className="text-sm font-medium text-gray-700">
                      Họ Tên
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="name-signup"
                        type="text"
                        placeholder="Nguyễn Văn A"
                        className="h-12 text-lg pl-10 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-signup" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email-signup"
                        type="email"
                        placeholder="email@example.com"
                        className="h-12 text-lg pl-10 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-signup" className="text-sm font-medium text-gray-700">
                      Mật Khẩu
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password-signup"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-12 text-lg pl-10 pr-10 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                      Xác Nhận Mật Khẩu
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-12 text-lg pl-10 pr-10 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>

                <Button
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg"
                  onClick={handleSignUp}
                >
                  Tạo Tài Khoản
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Hoặc tiếp tục với</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full h-12 text-lg rounded-xl border-gray-300">
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Đăng ký với Google
                </Button>

                <p className="text-xs text-center text-gray-600">
                  Bằng việc tạo tài khoản, bạn đồng ý với{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Điều Khoản Dịch Vụ
                  </a>{" "}
                  và{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Chính Sách Bảo Mật
                  </a>
                </p>

                <p className="text-center text-sm text-gray-600">
                  Đã có tài khoản?{" "}
                  <button
                    onClick={() => {
                      const signinTab = document.querySelector('[data-value="signin"]') as HTMLElement;
                      if (signinTab) signinTab.click();
                    }}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Đăng nhập ngay
                  </button>
                </p>
              </TabsContent>
            </Tabs>

            {emailSent && (
              <Card className="mt-6 p-4 bg-green-50 border-green-200">
                <p className="text-sm text-green-700 text-center">
                  📧 Email xác nhận đã được gửi! Vui lòng kiểm tra hộp thư.
                </p>
              </Card>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
