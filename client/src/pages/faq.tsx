import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle, Search, BookOpen, Shield, CreditCard } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Getting Started",
      icon: BookOpen,
      color: "bg-blue-600",
      faqs: [
        {
          question: "How does IdeaValidator work?",
          answer: "IdeaValidator uses advanced AI to analyze your business idea across multiple dimensions including market size, competition, target audience, and viability. Simply describe your idea, and our AI provides a comprehensive validation report with scoring, insights, and recommendations within minutes."
        },
        {
          question: "Do I need to create an account to use IdeaValidator?",
          answer: "You can get started with one free validation without creating an account. However, to access your validation history, save results, generate pitch decks, and use advanced features, you'll need to create a free account."
        },
        {
          question: "How accurate is the AI validation?",
          answer: "Our AI is trained on thousands of successful and failed startups, market data, and validation patterns. While no prediction is 100% accurate, our validation scores have shown 85% correlation with actual market success. The AI provides data-driven insights to help inform your decisions."
        },
        {
          question: "What makes IdeaValidator different from other validation tools?",
          answer: "IdeaValidator combines AI-powered analysis with real market data, competitor insights, and automatic pitch deck generation. Unlike generic business planning tools, we focus specifically on idea validation with actionable recommendations and professional outputs."
        }
      ]
    },
    {
      category: "Features & Functionality",
      icon: Search,
      color: "bg-green-600",
      faqs: [
        {
          question: "What's included in the validation analysis?",
          answer: "Each validation includes: market size estimation (TAM/SAM/SOM), competition analysis, target audience identification, strengths and weaknesses assessment, business model recommendations, tech stack suggestions, risk analysis, opportunities identification, and actionable next steps."
        },
        {
          question: "How long does the validation process take?",
          answer: "Most validations complete within 5-10 minutes. Complex ideas with multiple components may take up to 15 minutes for comprehensive analysis including market research and competitive analysis."
        },
        {
          question: "Can I export my validation results?",
          answer: "Yes! All validations include PDF export for the analysis report. Pro and Team plans also include PowerPoint export for pitch decks and the ability to customize reports with your own branding."
        },
        {
          question: "What's the 'Surprise Me' feature?",
          answer: "The 'Surprise Me' button generates random, innovative business ideas across various industries to help spark creativity. It's perfect when you're looking for inspiration or want to explore new market opportunities."
        },
        {
          question: "Can I validate multiple variations of the same idea?",
          answer: "Absolutely! We encourage testing different variations, target markets, or business models for the same core idea. Each validation counts toward your monthly limit, but the insights help you find the best approach."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      icon: CreditCard,
      color: "bg-purple-600",
      faqs: [
        {
          question: "What's included in the free plan?",
          answer: "The free Starter plan includes 1 validation per month, basic AI analysis, simple pitch deck generation, and PDF export. It's perfect for testing the platform and validating your first idea."
        },
        {
          question: "Can I upgrade or downgrade my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be charged or credited proportionally for the remainder of your billing cycle."
        },
        {
          question: "What happens if I exceed my validation limit?",
          answer: "If you exceed your monthly validation limit, you'll be prompted to upgrade your plan. Your existing validations and data remain accessible, but you won't be able to create new validations until you upgrade or wait for your limit to reset."
        },
        {
          question: "Do you offer discounts for annual subscriptions?",
          answer: "Yes, we offer 20% off all paid plans when you choose annual billing. Students and nonprofits may qualify for additional discounts - contact our sales team for details."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with your validation results, we'll refund your payment in full."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: Shield,
      color: "bg-red-600",
      faqs: [
        {
          question: "Is my business idea data secure?",
          answer: "Absolutely. We use enterprise-grade encryption to protect your data, and we never share your ideas with third parties. All data is processed securely, and you can delete your information at any time from your account settings."
        },
        {
          question: "Who can see my validation results?",
          answer: "Your validation results are private and only visible to you unless you explicitly choose to share them. Even our team cannot access your specific validation data without your explicit permission."
        },
        {
          question: "Do you train your AI on my business ideas?",
          answer: "No, we do not train our AI models on your specific business ideas or validation data. Our AI is trained on publicly available market data, industry reports, and anonymized patterns - never on individual user submissions."
        },
        {
          question: "Can I delete my account and data?",
          answer: "Yes, you can delete your account and all associated data at any time from your account settings. This action is permanent and cannot be undone, so please export any important data before deletion."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: HelpCircle,
      color: "bg-yellow-600",
      faqs: [
        {
          question: "What if the AI analysis seems inaccurate?",
          answer: "While our AI is highly sophisticated, it's not perfect. If you believe an analysis is inaccurate, please contact our support team with specific details. We continuously improve our models based on user feedback."
        },
        {
          question: "Can I re-run a validation with more details?",
          answer: "Yes, you can create a new validation with additional details or a refined description. Each new validation counts toward your monthly limit, but more detailed inputs typically yield better results."
        },
        {
          question: "What browsers and devices are supported?",
          answer: "IdeaValidator works on all modern browsers (Chrome, Firefox, Safari, Edge) and is fully responsive on desktop, tablet, and mobile devices. No downloads or installations required."
        },
        {
          question: "How do I contact support?",
          answer: "You can reach our support team through the contact form on our website, by emailing support@ideavlidator.com, or through the in-app chat feature. Pro and Team plan users receive priority support with faster response times."
        },
        {
          question: "Do you offer API access?",
          answer: "API access is available for Team plan subscribers. Our API allows you to integrate IdeaValidator's validation capabilities into your own applications or workflows. Documentation and rate limits apply."
        }
      ]
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary-blue to-baby-blue bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-baby-blue max-w-3xl mx-auto mb-8">
              Everything you need to know about IdeaValidator. Can't find what you're looking for? 
              Contact our support team for personalized help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-main px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300">
                  <MessageCircle className="mr-2" size={20} />
                  Contact Support
                </Button>
              </Link>
              <a href="/api/login">
                <Button variant="outline" className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-full font-semibold">
                  Try IdeaValidator Free
                </Button>
              </a>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-6xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <Card className="glass-morphism-blue border-0 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="text-white" size={24} />
                      </div>
                      <span className="font-sora text-2xl">{category.category}</span>
                      <Badge className="bg-primary-blue text-white">
                        {category.faqs.length} questions
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <Collapsible key={faqIndex} open={isOpen} onOpenChange={() => toggleItem(globalIndex)}>
                          <CollapsibleTrigger asChild>
                            <Card className="glass-morphism border-0 text-white cursor-pointer hover:bg-primary-blue hover:bg-opacity-20 transition-all duration-200">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-sora font-semibold text-lg pr-4">
                                    {faq.question}
                                  </h3>
                                  {isOpen ? (
                                    <ChevronUp className="text-primary-blue flex-shrink-0" size={24} />
                                  ) : (
                                    <ChevronDown className="text-primary-blue flex-shrink-0" size={24} />
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <Card className="glass-morphism border-0 text-white mt-2">
                              <CardContent className="p-6 pt-4">
                                <p className="text-baby-blue leading-relaxed">
                                  {faq.answer}
                                </p>
                              </CardContent>
                            </Card>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Quick Help Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-sora font-bold text-center mb-12">
              Still Need Help?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-morphism-blue border-0 text-white text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <MessageCircle className="mx-auto text-primary-blue mb-4" size={48} />
                  <h3 className="font-sora font-semibold text-lg mb-3">Contact Support</h3>
                  <p className="text-baby-blue mb-6 text-sm">
                    Get personalized help from our support team. We respond to most inquiries within 24 hours.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-primary-blue hover:bg-midnight-blue w-full">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-morphism-blue border-0 text-white text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <BookOpen className="mx-auto text-green-400 mb-4" size={48} />
                  <h3 className="font-sora font-semibold text-lg mb-3">Documentation</h3>
                  <p className="text-baby-blue mb-6 text-sm">
                    Detailed guides and tutorials to help you get the most out of IdeaValidator.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 w-full">
                    View Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-morphism-blue border-0 text-white text-center hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <HelpCircle className="mx-auto text-yellow-400 mb-4" size={48} />
                  <h3 className="font-sora font-semibold text-lg mb-3">Video Tutorials</h3>
                  <p className="text-baby-blue mb-6 text-sm">
                    Watch step-by-step video guides to learn how to validate your ideas effectively.
                  </p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 w-full">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Popular Questions */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-sora font-bold text-center mb-12">
              Most Popular Questions
            </h2>
            
            <Card className="glass-morphism-blue border-0 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "How accurate is the AI validation?",
                    "Can I export my validation results?", 
                    "What's included in the free plan?",
                    "Is my business idea data secure?",
                    "How long does validation take?",
                    "Can I upgrade my plan anytime?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-dark-blue bg-opacity-50 rounded-lg">
                      <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-baby-blue">{question}</span>
                    </div>
                  ))}
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
