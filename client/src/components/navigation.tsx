import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-main rounded-xl flex items-center justify-center">
              <Brain className="text-white" size={20} />
            </div>
            <h1 className="text-xl sm:text-2xl font-sora font-bold text-white">StartupDeck</h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-baby-blue hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-baby-blue hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-baby-blue hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="/faq" className="text-baby-blue hover:text-white transition-colors">
              FAQ
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link href="/analyze">
                  <Button className="bg-gradient-main hover:opacity-90 transition-opacity">
                    Analyze Idea
                  </Button>
                </Link>
                <button onClick={logout} className="text-baby-blue hover:text-white transition-colors">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button onClick={() => login("google")} className="text-baby-blue hover:text-white transition-colors">
                  Login with Google
                </button>
                <button onClick={() => login("github")} className="text-baby-blue hover:text-white transition-colors">
                  Login with GitHub
                </button>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-morphism rounded-lg">
            <Link href="/#features" className="mobile-nav-item text-baby-blue hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="mobile-nav-item text-baby-blue hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/testimonials" className="mobile-nav-item text-baby-blue hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="/faq" className="mobile-nav-item text-baby-blue hover:text-white transition-colors">
              FAQ
            </Link>
            
            {isAuthenticated ? (
              <div className="p-4 space-y-3">
                <Link href="/analyze">
                  <Button className="w-full bg-gradient-main hover:opacity-90 transition-opacity btn-responsive">
                    Analyze Idea
                  </Button>
                </Link>
                <button onClick={logout} className="block text-center text-baby-blue hover:text-white transition-colors py-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="p-4">
                <button onClick={() => login("google")} className="w-full bg-gradient-main hover:opacity-90 transition-opacity btn-responsive">
                  Login with Google
                </button>
                <button onClick={() => login("github")} className="w-full bg-gradient-main hover:opacity-90 transition-opacity btn-responsive">
                  Login with GitHub
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
