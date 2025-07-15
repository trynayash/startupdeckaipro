import { Button } from "@/components/ui/button";
import { Rocket, Play, CheckCircle, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-background min-h-screen flex items-center relative overflow-hidden">
      <div className="mesh-bg absolute inset-0"></div>
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold mb-4 sm:mb-6 leading-tight">
                Validate Your
                <span className="bg-gradient-to-r from-baby-blue to-white bg-clip-text text-transparent">
                  {" "}Startup Idea
                </span>
                {" "}with AI
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-baby-blue mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Get instant AI-powered analysis, market insights, and pitch deck generation. 
                Join 200,000+ entrepreneurs who've validated their ideas with StartupDeck.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <a href="/api/login">
                  <Button className="bg-gradient-main btn-responsive rounded-full text-white font-semibold hover:shadow-2xl transition-all duration-300 pulse-glow w-full sm:w-auto">
                    <Rocket className="mr-2" size={16} />
                    Start Validation - Free
                  </Button>
                </a>
                <Button variant="outline" className="glass-morphism btn-responsive rounded-full text-white font-semibold hover:bg-white hover:text-dark-blue transition-all duration-300 border-white border-opacity-20 w-full sm:w-auto">
                  <Play className="mr-2" size={16} />
                  Watch Demo
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-baby-blue" size={16} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-baby-blue" size={16} />
                  <span>5-minute analysis</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="glass-morphism-blue card-responsive floating-animation max-w-lg mx-auto">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-sora font-semibold">AI Analysis Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-baby-blue">Live Analysis</span>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gradient-main rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-medium">Validation Score</span>
                        <span className="text-xl sm:text-2xl font-bold">82%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-baby-blue text-xs sm:text-sm mb-1">Market Size</div>
                        <div className="text-lg sm:text-xl font-bold">$2.4B</div>
                      </div>
                      <div className="glass-morphism rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="text-baby-blue text-xs sm:text-sm mb-1">Competition</div>
                        <div className="text-lg sm:text-xl font-bold">Medium</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
