import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, Shield, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      
      {/* Analysis Demo Section */}
      <section className="section-padding bg-midnight-blue">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-responsive-xl font-sora font-bold mb-4 sm:mb-6">
                See StartupDeck in Action
              </h2>
              <p className="text-responsive-md text-baby-blue max-w-3xl mx-auto">
                Watch how our AI validates a real startup idea in under 5 minutes
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="glass-morphism-blue card-responsive">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-sora font-semibold">Business Idea Input</h3>
                    <span className="text-xs sm:text-sm text-baby-blue">Step 1/3</span>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-dark-blue rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <label className="block text-xs sm:text-sm font-medium text-baby-blue mb-2">
                        Describe your business idea
                      </label>
                      <textarea 
                        className="w-full bg-glass-white bg-opacity-20 rounded-lg p-3 text-white placeholder-gray-400 border border-gray-600 focus:border-primary-blue focus:outline-none text-sm sm:text-base" 
                        rows={4}
                        placeholder="A mobile app that helps busy professionals find and book last-minute fitness classes in their area with AI-powered recommendations based on their schedule and preferences..."
                        readOnly
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button className="bg-gradient-main btn-responsive rounded-full text-white font-semibold flex-1">
                        <span className="mr-2">✨</span>
                        Surprise Me
                      </Button>
                      <Button className="bg-primary-blue btn-responsive rounded-full text-white font-semibold flex-1">
                        Analyze Idea
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="glass-morphism card-responsive">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="text-base sm:text-lg font-sora font-semibold">Market Analysis</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-baby-blue">Analyzing...</span>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm">Market Size (TAM)</span>
                      <span className="text-sm sm:text-lg font-bold text-primary-blue">$48.2B</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm">Competition Level</span>
                      <span className="text-sm sm:text-lg font-bold text-yellow-400">Medium</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm">Target Audience</span>
                      <span className="text-sm sm:text-lg font-bold text-green-400">Clear</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism card-responsive">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="text-base sm:text-lg font-sora font-semibold">Validation Score</h4>
                    <span className="text-2xl sm:text-3xl font-bold text-primary-blue">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                    <div className="bg-gradient-to-r from-primary-blue to-baby-blue h-2 sm:h-3 rounded-full" style={{width: "87%"}}></div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-baby-blue">
                    <strong>Strengths:</strong> Large market, clear problem, scalable solution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Validations Section */}
      <section className="section-padding bg-dark-blue">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-xl font-sora font-bold mb-4 sm:mb-6">
              Recent Startup Validations
            </h2>
            <p className="text-responsive-md text-baby-blue max-w-3xl mx-auto">
              See how other entrepreneurs are validating their ideas
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="glass-morphism-blue card-responsive">
              <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-medium text-baby-blue mb-2">Name</h3>
                  <p className="text-sm sm:text-lg font-semibold">Member's Name</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-medium text-baby-blue mb-2">Category</h3>
                  <p className="text-sm sm:text-lg font-semibold">Business Category</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-medium text-baby-blue mb-2">Score</h3>
                  <p className="text-sm sm:text-lg font-semibold">Startup Score</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-medium text-baby-blue mb-2">Status</h3>
                  <p className="text-sm sm:text-lg font-semibold">Validation Status</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "Sarah M.", category: "SaaS", score: 84, status: "Validated" },
                  { name: "Marcus J.", category: "E-commerce", score: 72, status: "Needs Work" },
                  { name: "Lisa K.", category: "HealthTech", score: 91, status: "Validated" }
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 py-3 sm:py-4 border-b border-gray-600 last:border-b-0">
                    <div className="text-center md:text-left">
                      <p className="text-xs sm:text-sm text-baby-blue mb-1 md:hidden">Name</p>
                      <p className="text-sm sm:text-base text-white font-medium">{item.name}</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xs sm:text-sm text-baby-blue mb-1 md:hidden">Category</p>
                      <p className="text-sm sm:text-base text-baby-blue">{item.category}</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xs sm:text-sm text-baby-blue mb-1 md:hidden">Score</p>
                      <p className="text-lg sm:text-xl text-primary-blue font-bold">{item.score}</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xs sm:text-sm text-baby-blue mb-1 md:hidden">Status</p>
                      <Badge className={`${item.status === "Validated" ? "bg-green-600" : "bg-yellow-600"} text-white text-xs sm:text-sm`}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-main relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sora font-bold mb-4 sm:mb-6">
              Ready to Validate Your Next Big Idea?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join 200,000+ entrepreneurs who've already validated their ideas with StartupDeck
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <a href="/api/login">
                <Button className="bg-white text-midnight-blue btn-responsive rounded-full font-semibold hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
                  <span className="mr-2">🚀</span>
                  Start Validation - Free
                </Button>
              </a>
              <Button className="glass-morphism btn-responsive rounded-full text-white font-semibold hover:bg-white hover:text-midnight-blue transition-all duration-300 w-full sm:w-auto">
                <span className="mr-2">📅</span>
                Schedule Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-white" size={16} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-white" size={16} />
                <span>100% secure & private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-white" size={16} />
                <span>Results in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
