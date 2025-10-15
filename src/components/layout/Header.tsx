import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Trang Chủ", path: "/" },
    { label: "Chợ Kỹ Năng", path: "/marketplace" },
    { label: "Cách Hoạt Động", path: "/how-it-works" },
    { label: "Buổi Học", path: "/sessions" },
    { label: "Ví", path: "/wallet" },
    { label: "Tin Nhắn", path: "/messages" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out">
      <div className="container flex h-16 items-center justify-between py-3">
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                if (window.scrollY === 0) {
                  // Nếu đang ở đầu trang, reload trang
                  window.location.reload();
                } else {
                  // Nếu không ở đầu trang, scroll lên đầu
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
          >
            <img
              src={logo}
              alt="Skill Swap Connect"
              className="h-9 w-9 rounded-lg object-cover"
            />
            <span className="hidden font-bold text-xl sm:inline-block tracking-tight hover:text-blue-600 transition-colors duration-300">
              Skill Swap Connect
            </span>
            <span className="font-bold text-xl sm:hidden tracking-tight hover:text-blue-600 transition-colors duration-300">
              SWC
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out ${
                isActive(link.path)
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/profile/u1" className="hidden sm:block">
            <Button variant="ghost" size="sm">
              Hồ Sơ
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="sm" className="hover:shadow-md hover:brightness-110 transition-all duration-300 ease-in-out">Đăng Nhập</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out ${
                  isActive(link.path)
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/profile/u1"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300 ease-in-out"
            >
              Hồ Sơ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
