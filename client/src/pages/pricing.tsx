import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Pricing() {
  const { isAuthenticated } = useAuth();

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for first-time entrepreneurs",
      features: [
        "1 idea validation per month",
        "Basic AI analysis",
        "Simple pitch deck",
        "PDF export"
      ],
      buttonText: "Get Started Free",
      buttonAction: isAuthenticated ? "/" : "/api/login",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      description: "For serious entrepreneurs",
      features: [
        "10 idea validations per month",
        "Advanced AI analysis",
        "Professional pitch decks",
        "Competitor analysis",
        "Market size estimation",
        "Shareable links"
      ],
      buttonText: "Start Pro Trial",
      buttonAction: isAuthenticated ? "/" : "/api/login",
      popular: true
    },
    {
      name: "Team",
      price: "$99",
      description: "For growing teams",
      features: [
        "Unlimited validations",
        "Team collaboration",
        "Advanced analytics",
        "Custom branding",
        "Priority support",
        "API access"
      ],
      buttonText: "Contact Sales",
      buttonAction: "/contact",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Choose Your Validation Plan
            </h1>
            <p className="text-xl text-baby-blue max-w-2xl mx-auto">
              Start free, scale as you grow. All plans include our core AI validation features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`glass-morphism-blue border-0 text-white hover:transform hover:scale-105 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-primary-blue' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-main text-white px-4 py-2 text-sm font-semibold">
                      <Star className="mr-1" size={16} />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-sora font-bold mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary-blue mb-2">{plan.price}</div>
                  <p className="text-baby-blue">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary-blue" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href={plan.buttonAction} className="block">
                    <Button 
                      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-main hover:shadow-lg' 
                          : 'bg-primary-blue hover:bg-midnight-blue'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-sora font-bold text-center mb-12">
              Compare Features
            </h2>
            
            <Card className="glass-morphism-blue border-0 text-white">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left py-4 font-sora font-semibold">Feature</th>
                        <th className="text-center py-4 font-sora font-semibold">Starter</th>
                        <th className="text-center py-4 font-sora font-semibold">Pro</th>
                        <th className="text-center py-4 font-sora font-semibold">Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Monthly Validations", starter: "1", pro: "10", team: "Unlimited" },
                        { feature: "AI Analysis", starter: "Basic", pro: "Advanced", team: "Advanced" },
                        { feature: "Pitch Deck Generation", starter: "✓", pro: "✓", team: "✓" },
                        { feature: "PDF Export", starter: "✓", pro: "✓", team: "✓" },
                        { feature: "Market Size Analysis", starter: "✗", pro: "✓", team: "✓" },
                        { feature: "Competitor Analysis", starter: "✗", pro: "✓", team: "✓" },
                        { feature: "Team Collaboration", starter: "✗", pro: "✗", team: "✓" },
                        { feature: "Custom Branding", starter: "✗", pro: "✗", team: "✓" },
                        { feature: "API Access", starter: "✗", pro: "✗", team: "✓" },
                        { feature: "Priority Support", starter: "✗", pro: "✗", team: "✓" }
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-700">
                          <td className="py-4 text-baby-blue">{row.feature}</td>
                          <td className="py-4 text-center">{row.starter}</td>
                          <td className="py-4 text-center">{row.pro}</td>
                          <td className="py-4 text-center">{row.team}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-sora font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I upgrade or downgrade my plan anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll be charged or credited proportionally."
                },
                {
                  question: "What happens if I exceed my validation limit?",
                  answer: "If you exceed your monthly validation limit, you'll be prompted to upgrade your plan. Your existing validations and data remain accessible."
                },
                {
                  question: "Is there a money-back guarantee?",
                  answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full."
                },
                {
                  question: "Do you offer discounts for annual subscriptions?",
                  answer: "Yes, we offer 20% off all plans when you choose annual billing. Contact our sales team for more details."
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-morphism-blue border-0 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-sora font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-baby-blue">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
