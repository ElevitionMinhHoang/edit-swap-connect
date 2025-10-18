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
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
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
    <header className={`sticky top-0 z-[100] w-full border-b transition-all duration-500 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-xl border-border shadow-lg"
        : "bg-background/60 backdrop-blur-md border-transparent"
    }`}
    style={{
      paddingTop: 'env(safe-area-inset-top)',
    }}>
      <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6"
        style={{
          paddingLeft: 'max(0.75rem, env(safe-area-inset-left))',
          paddingRight: 'max(0.75rem, env(safe-area-inset-right))',
        }}>
        <div className="flex items-center gap-2 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-2 min-w-0 flex-shrink-0"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                if (window.scrollY === 0) {
                  window.location.reload();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
          >
            <img
              src={logo}
              alt="Skill Swap Connect"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-cover touch-manipulation flex-shrink-0"
              loading="eager"
              decoding="async"
            />
            <span className="hidden md:inline-block font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
              Skill Swap Connect
            </span>
            <span className="md:hidden font-bold text-base tracking-tight whitespace-nowrap">
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
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 min-h-[44px] flex items-center touch-manipulation active:scale-95 ${
                isActive(link.path)
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/50 active:bg-muted"
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

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <Link to="/profile/u1" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4 touch-manipulation active:scale-95">
              Hồ Sơ
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="sm" className="text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4 hover:shadow-accent transition-all duration-300 touch-manipulation active:scale-95">
              Đăng Nhập
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9 sm:h-10 sm:w-10 touch-manipulation active:scale-95"
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
            className="md:hidden fixed inset-0 bg-black/40 z-[150] animate-fade-in transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              WebkitBackdropFilter: 'blur(4px)',
              backdropFilter: 'blur(4px)'
            }}
          />
          
          {/* Mobile menu */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-[200] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di động"
          >
            <div 
              className="absolute inset-0 bg-background shadow-2xl animate-slide-in-from-left overflow-y-auto overscroll-contain"
              style={{
                paddingTop: 'calc(env(safe-area-inset-top) + 0.75rem)',
                paddingBottom: 'calc(env(safe-area-inset-bottom) + 1.5rem)',
                paddingLeft: 'max(1rem, env(safe-area-inset-left))',
                paddingRight: 'max(1rem, env(safe-area-inset-right))',
              }}
            >
              <div className="min-h-full flex flex-col">
                {/* Header with close button */}
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={logo}
                      alt="Skill Swap Connect"
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                    <span className="font-bold text-lg">SWC</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 rounded-full bg-muted/50 hover:bg-muted touch-manipulation active:scale-95"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Đóng menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                {/* Navigation links */}
                <nav className="flex-1 space-y-2 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-5 py-4 text-lg font-medium rounded-2xl transition-all duration-300 touch-manipulation active:scale-[0.98] select-none ${
                        isActive(link.path)
                          ? "text-primary font-semibold bg-primary/15 shadow-sm"
                          : "text-foreground hover:bg-muted/60 active:bg-muted"
                      }`}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                      aria-current={isActive(link.path) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Bottom actions */}
                <div className="mt-auto pt-6 px-2 space-y-3 border-t border-border/50">
                  <Link
                    to="/profile/u1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-12 text-base font-medium rounded-xl touch-manipulation active:scale-[0.98]"
                    >
                      Hồ Sơ
                    </Button>
                  </Link>
                  <Link
                    to="/auth"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <Button 
                      className="w-full h-12 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation active:scale-[0.98]"
                    >
                      Đăng Nhập
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
