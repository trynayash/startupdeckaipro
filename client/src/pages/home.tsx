import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  Target,
  Users
} from "lucide-react";

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();

  const { data: validations, error: validationsError } = useQuery({
    queryKey: ["/api/validations"],
    retry: false,
  });

  const { data: usageStats, error: usageError } = useQuery({
    queryKey: ["/api/usage-stats"],
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-blue text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-baby-blue">Loading...</p>
        </div>
      </div>
    );
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "free": return "bg-gray-600";
      case "pro": return "bg-blue-600";
      case "team": return "bg-purple-600";
      default: return "bg-gray-600";
    }
  };

  const getUsageLimit = (plan: string) => {
    switch (plan) {
      case "free": return 1;
      case "pro": return 10;
      case "team": return "Unlimited";
      default: return 0;
    }
  };

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Welcome Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Welcome back, {user?.firstName || "Entrepreneur"}!
            </h1>
            <p className="text-xl text-baby-blue mb-8">
              Ready to validate your next big idea? Let's turn your vision into reality.
            </p>
            <Link href="/analyze">
              <Button className="bg-gradient-main px-8 py-4 rounded-full text-white font-semibold hover:shadow-2xl transition-all duration-300 pulse-glow">
                <TrendingUp className="mr-2" size={20} />
                Start New Validation
              </Button>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-morphism-blue border-0 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Badge className={`${getPlanColor(usageStats?.plan || "free")} text-white`}>
                    {usageStats?.plan?.toUpperCase() || "FREE"}
                  </Badge>
                  <span className="font-sora">Current Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary-blue">
                  {usageStats?.usageCount || 0} / {getUsageLimit(usageStats?.plan || "free")}
                </div>
                <p className="text-baby-blue text-sm">Validations used</p>
              </CardContent>
            </Card>

            <Card className="glass-morphism-blue border-0 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="text-primary-blue" size={20} />
                  <span className="font-sora">Total Validations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary-blue">
                  {validations?.length || 0}
                </div>
                <p className="text-baby-blue text-sm">Ideas analyzed</p>
              </CardContent>
            </Card>

            <Card className="glass-morphism-blue border-0 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="font-sora">Validation Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  {usageStats?.canValidate ? "Ready" : "Limit Reached"}
                </div>
                <p className="text-baby-blue text-sm">
                  {usageStats?.canValidate ? "You can validate ideas" : "Upgrade to continue"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Validations */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-sora font-bold">Recent Validations</h2>
              <Link href="/analyze">
                <Button variant="outline" className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                  New Validation
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>

            {validations && validations.length > 0 ? (
              <div className="grid gap-6">
                {validations.slice(0, 3).map((validation: any, index: number) => (
                  <Card key={index} className="glass-morphism-blue border-0 text-white hover:transform hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-sora line-clamp-1">
                          {validation.ideaText?.substring(0, 100)}...
                        </CardTitle>
                        <Badge className="bg-primary-blue text-white">
                          {validation.validationScore}% Score
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="text-primary-blue" size={16} />
                          <span className="text-sm">Market: {validation.marketSize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="text-yellow-400" size={16} />
                          <span className="text-sm">Competition: {validation.competitionLevel}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="text-baby-blue" size={16} />
                          <span className="text-sm">
                            {new Date(validation.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-baby-blue">
                            {validation.strengths?.length || 0} Strengths
                          </div>
                          <div className="text-sm text-baby-blue">
                            {validation.recommendations?.length || 0} Recommendations
                          </div>
                        </div>
                        <Link href={`/results/${validation.id}`}>
                          <Button variant="outline" size="sm" className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="glass-morphism-blue border-0 text-white text-center py-12">
                <CardContent>
                  <TrendingUp className="mx-auto text-baby-blue mb-4" size={48} />
                  <h3 className="text-xl font-sora font-semibold mb-2">No Validations Yet</h3>
                  <p className="text-baby-blue mb-6">
                    Start by validating your first business idea to see detailed analysis and insights.
                  </p>
                  <Link href="/analyze">
                    <Button className="bg-gradient-main px-6 py-3 rounded-full text-white font-semibold">
                      Validate Your First Idea
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Quick Actions */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-sora font-bold mb-8 text-center">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-morphism-blue border-0 text-white hover:transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="text-primary-blue" size={20} />
                    <span className="font-sora">Analyze Idea</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-baby-blue mb-4">
                    Get comprehensive AI analysis of your business idea with scoring and insights.
                  </p>
                  <Link href="/analyze">
                    <Button className="w-full bg-gradient-main hover:opacity-90">
                      Start Analysis
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="glass-morphism-blue border-0 text-white hover:transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="text-primary-blue" size={20} />
                    <span className="font-sora">View History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-baby-blue mb-4">
                    Browse through all your previous validations and download pitch decks.
                  </p>
                  <Button className="w-full bg-primary-blue hover:bg-midnight-blue">
                    View All Validations
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-morphism-blue border-0 text-white hover:transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="text-primary-blue" size={20} />
                    <span className="font-sora">Upgrade Plan</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-baby-blue mb-4">
                    Get more validations and advanced features with our Pro or Team plans.
                  </p>
                  <Link href="/pricing">
                    <Button className="w-full bg-gradient-main hover:opacity-90">
                      View Pricing
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
