import { Search, TrendingUp, FileText, CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Analysis",
      description: "Get instant market size estimation, competitor analysis, and target audience insights powered by advanced AI.",
      features: [
        "TAM/SAM/SOM Analysis",
        "Competitor Insights",
        "Market Validation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Live Scoreboard",
      description: "Track your validation progress with real-time scoring and detailed analytics dashboard.",
      features: [
        "0-100% Validation Score",
        "AI Confidence Level",
        "Strength/Weakness Analysis"
      ]
    },
    {
      icon: FileText,
      title: "Auto Pitch Deck",
      description: "Generate professional pitch decks automatically with PDF export and sharing capabilities.",
      features: [
        "10-Slide Professional Deck",
        "PDF Export",
        "Shareable Links"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-dark-blue relative">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-xl font-sora font-bold mb-4 sm:mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary-blue to-baby-blue bg-clip-text text-transparent">
              Validate Your Idea
            </span>
          </h2>
          <p className="text-responsive-md text-baby-blue max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive business idea validation in minutes, not months.
          </p>
        </div>
        
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <div key={index} className="glass-morphism-blue card-responsive hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-main rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="text-white" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-bold mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-sm sm:text-base text-baby-blue mb-4 sm:mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2">
                    <CheckCircle className="text-primary-blue flex-shrink-0" size={14} />
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
