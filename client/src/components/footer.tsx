import { Link } from "wouter";
import { Brain, Twitter, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-blue border-t border-gray-800">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-main rounded-xl flex items-center justify-center">
                <Brain className="text-white" size={18} />
              </div>
              <h3 className="text-xl sm:text-2xl font-sora font-bold">StartupDeck</h3>
            </div>
            <p className="text-sm sm:text-base text-baby-blue mb-4 sm:mb-6">
              The AI-powered platform that helps entrepreneurs validate their business ideas 
              and create professional pitch decks in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-baby-blue hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-baby-blue hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-baby-blue hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-sora font-semibold mb-4 sm:mb-6">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/#features" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-sora font-semibold mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/contact" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-sora font-semibold mb-4 sm:mb-6">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm sm:text-base text-baby-blue hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-baby-blue text-xs sm:text-sm">
              © 2024 StartupDeck. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-baby-blue text-xs sm:text-sm">Made with</span>
              <Heart className="text-red-400" size={14} />
              <span className="text-baby-blue text-xs sm:text-sm">for entrepreneurs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
