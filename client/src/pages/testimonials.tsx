import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "SaaS Founder",
      company: "DataFlow Analytics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b5fc0ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5,
      quote: "IdeaValidator helped me identify key market opportunities I hadn't considered. The AI analysis was spot-on and saved me months of research. The pitch deck generator created a professional presentation that impressed investors and helped me secure $2.5M in funding.",
      validationScore: 89,
      category: "SaaS"
    },
    {
      name: "Marcus Rodriguez",
      role: "E-commerce Entrepreneur",
      company: "EcoMarket Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5,
      quote: "The competitor analysis and market sizing were incredibly detailed. IdeaValidator showed me gaps in the market I never would have found on my own. The platform gave me the confidence to pivot my business model, which increased our revenue by 300%.",
      validationScore: 84,
      category: "E-commerce"
    },
    {
      name: "Lisa Thompson",
      role: "HealthTech Founder",
      company: "MedConnect Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5,
      quote: "This platform is a game-changer for entrepreneurs. The validation score gave me confidence to move forward with my healthcare startup. The AI recommendations helped me refine my target audience and now we're serving 50,000+ patients.",
      validationScore: 91,
      category: "HealthTech"
    },
    {
      name: "David Kim",
      role: "Fintech Innovator",
      company: "PayStream Technologies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5,
      quote: "The speed and accuracy of the analysis blew me away. In 5 minutes, I had insights that would have taken my team weeks to compile. The pitch deck helped us close our Series A funding round.",
      validationScore: 87,
      category: "Fintech"
    },
    {
      name: "Jennifer Walsh",
      role: "EdTech Entrepreneur",
      company: "SkillBridge Learning",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5,
      quote: "IdeaValidator's recommendations were actionable and practical. The platform helped me understand my competition better and identify unique positioning opportunities. Our user acquisition costs dropped by 40% after implementing their suggestions.",
      validationScore: 82,
      category: "EdTech"
    },
    {
      name: "Alex Thompson",
      role: "AI Startup Founder",
      company: "Neural Insights",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5,
      quote: "As someone building AI products, I was impressed by the sophistication of IdeaValidator's analysis. The market insights were comprehensive and the competitive landscape analysis was thorough. Highly recommend for any serious entrepreneur.",
      validationScore: 93,
      category: "AI/ML"
    }
  ];

  const stats = [
    { icon: Users, label: "Entrepreneurs Served", value: "200,000+" },
    { icon: TrendingUp, label: "Average Score Improvement", value: "23%" },
    { icon: Award, label: "Successful Launches", value: "15,000+" }
  ];

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              What Entrepreneurs Are{" "}
              <span className="bg-gradient-to-r from-primary-blue to-baby-blue bg-clip-text text-transparent">
                Saying
              </span>
            </h1>
            <p className="text-xl text-baby-blue max-w-3xl mx-auto mb-8">
              Join thousands of successful entrepreneurs who've validated their ideas 
              and built thriving businesses with IdeaValidator.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-morphism-blue border-0 text-white">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="mx-auto text-primary-blue mb-3" size={32} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-baby-blue text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="glass-morphism-blue border-0 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-main text-white">Featured Story</Badge>
              </div>
              <CardContent className="p-8">
                <Quote className="text-primary-blue mb-6" size={48} />
                <blockquote className="text-xl text-baby-blue leading-relaxed mb-6">
                  "IdeaValidator completely transformed how I approach business validation. 
                  The AI analysis revealed market opportunities I never considered, and the 
                  pitch deck generator helped me secure $2.5M in Series A funding. This 
                  platform is essential for any serious entrepreneur."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-sora font-semibold text-lg">{testimonials[0].name}</div>
                    <div className="text-baby-blue">{testimonials[0].role}, {testimonials[0].company}</div>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={16} />
                        ))}
                      </div>
                      <Badge className="bg-primary-blue text-white text-xs">
                        {testimonials[0].validationScore}% Score
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-sora font-bold text-center mb-12">
              Success Stories from Every Industry
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.slice(1).map((testimonial, index) => (
                <Card key={index} className="glass-morphism-blue border-0 text-white hover:transform hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <CardTitle className="font-sora font-semibold">{testimonial.name}</CardTitle>
                          <p className="text-baby-blue text-sm">{testimonial.role}</p>
                          <p className="text-baby-blue text-xs">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex space-x-1 mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-current" size={14} />
                          ))}
                        </div>
                        <Badge className="bg-primary-blue text-white text-xs">
                          {testimonial.validationScore}% Score
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Quote className="text-primary-blue mb-3" size={24} />
                    <p className="text-baby-blue leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                    <Badge variant="secondary" className="bg-midnight-blue text-baby-blue">
                      {testimonial.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Breakdown */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-sora font-bold text-center mb-12">
              Trusted Across Industries
            </h2>
            
            <Card className="glass-morphism-blue border-0 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { industry: "SaaS", percentage: "32%", color: "bg-blue-600" },
                    { industry: "E-commerce", percentage: "24%", color: "bg-green-600" },
                    { industry: "HealthTech", percentage: "18%", color: "bg-red-600" },
                    { industry: "Fintech", percentage: "12%", color: "bg-yellow-600" },
                    { industry: "EdTech", percentage: "8%", color: "bg-purple-600" },
                    { industry: "AI/ML", percentage: "6%", color: "bg-pink-600" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                        <span className="text-white font-bold">{item.percentage}</span>
                      </div>
                      <div className="font-semibold">{item.industry}</div>
                      <div className="text-baby-blue text-sm">of our users</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <Card className="glass-morphism-blue border-0 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-sora font-bold mb-6">
                  Ready to Join Thousands of Successful Entrepreneurs?
                </h2>
                <p className="text-xl text-baby-blue mb-8">
                  Start validating your business ideas today and get the insights you need to succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/api/login">
                    <Button className="bg-gradient-main px-8 py-4 rounded-full text-white font-semibold hover:shadow-2xl transition-all duration-300">
                      <TrendingUp className="mr-2" size={20} />
                      Start Free Validation
                    </Button>
                  </a>
                  <Link href="/pricing">
                    <Button variant="outline" className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-full font-semibold">
                      View Pricing
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
