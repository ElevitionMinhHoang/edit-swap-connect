import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/HomeNew";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import ProfileCreate from "./pages/ProfileCreate";
import Messages from "./pages/Messages";
import Sessions from "./pages/Sessions";
import SessionDetail from "./pages/SessionDetail";
import Wallet from "./pages/Wallet";
import HowItWorks from "./pages/HowItWorks";
import Auth from "./pages/Auth";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile/create" element={<ProfileCreate />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/session/:id" element={<SessionDetail />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
