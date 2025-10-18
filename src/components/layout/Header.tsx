import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.jpg";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: "Trang Chủ", path: "/" },
    { label: "Chợ Kỹ Năng", path: "/marketplace" },
    { label: "Cách Hoạt Động", path: "/how-it-works" },
    { label: "Buổi Học", path: "/sessions" },
    { label: "Ví", path: "/wallet" },
    { label: "Tin Nhắn", path: "/messages" },
    { label: "Liên Hệ", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  // Focus management for accessibility
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const firstLink = mobileMenuRef.current.querySelector('a') as HTMLAnchorElement;
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-xl border-border shadow-lg"
        : "bg-background/60 backdrop-blur-md border-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
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
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-cover"
              loading="eager"
              decoding="async"
            />
            <span className="hidden font-bold text-lg sm:text-xl sm:inline-block tracking-tight transition-colors duration-300">
              Skill Swap Connect
            </span>
            <span className="font-bold text-lg sm:hidden tracking-tight transition-colors duration-300">
              SWC
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 min-h-[44px] flex items-center ${
                isActive(link.path)
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
              {/* Active underline indicator */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  isActive(link.path)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/profile/u1" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-sm min-h-[44px] min-w-[44px]">
              Hồ Sơ
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="sm" className="text-sm hover:shadow-accent transition-all duration-300 min-h-[44px] min-w-[44px]">Đăng Nhập</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="md:hidden min-h-[44px] min-w-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="header-backdrop md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile menu */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="header-mobile-menu open md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di động"
          >
            <div className="h-full flex flex-col pt-4 pb-8 px-4">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Đóng menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Navigation links */}
              <nav className="flex-1 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg min-h-[44px] flex items-center ${
                      isActive(link.path)
                        ? "text-primary font-semibold bg-primary/10 border-l-4 border-primary"
                        : "text-foreground/80 hover:bg-muted/50"
                    }`}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/profile/u1"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted rounded-lg min-h-[44px] flex items-center"
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Hồ Sơ
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
