import { useEffect } from "react";
import { useRoute } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AnalysisDashboard from "@/components/analysis-dashboard";
import PitchDeck from "@/components/pitch-deck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, BarChart3, TrendingUp, FileText, Calendar } from "lucide-react";

export default function Results() {
  const [match, params] = useRoute("/results/:id");
  const { isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const validationId = params?.id;

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

  const { data: validation, isLoading: validationLoading, error } = useQuery({
    queryKey: ["/api/validations", validationId],
    enabled: !!validationId && isAuthenticated,
    retry: false,
  });

  if (isLoading || validationLoading) {
    return (
      <div className="min-h-screen bg-dark-blue text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-baby-blue">Loading validation results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    if (isUnauthorizedError(error as Error)) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return null;
    }

    return (
      <div className="min-h-screen bg-dark-blue text-white">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="glass-morphism-blue border-0 text-white">
                <CardContent className="p-8">
                  <h1 className="text-3xl font-sora font-bold mb-4">Validation Not Found</h1>
                  <p className="text-baby-blue mb-6">
                    The validation you're looking for doesn't exist or you don't have permission to view it.
                  </p>
                  <Link href="/">
                    <Button className="bg-gradient-main hover:opacity-90">
                      <ArrowLeft className="mr-2" size={16} />
                      Back to Home
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!validation) {
    return (
      <div className="min-h-screen bg-dark-blue text-white">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="glass-morphism-blue border-0 text-white">
                <CardContent className="p-8">
                  <h1 className="text-3xl font-sora font-bold mb-4">Validation Not Found</h1>
                  <p className="text-baby-blue mb-6">
                    The validation you're looking for doesn't exist.
                  </p>
                  <Link href="/">
                    <Button className="bg-gradient-main hover:opacity-90">
                      <ArrowLeft className="mr-2" size={16} />
                      Back to Home
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link href="/">
                <Button variant="outline" className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white mb-4">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Home
                </Button>
              </Link>
              
              <h1 className="text-4xl lg:text-5xl font-sora font-bold mb-4">
                Validation Results
              </h1>
              <p className="text-xl text-baby-blue max-w-3xl">
                {validation.ideaText?.substring(0, 200)}...
              </p>
            </div>

            {/* Validation Summary */}
            <Card className="glass-morphism-blue border-0 text-white mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="font-sora">Validation Summary</span>
                  <Badge className="bg-gradient-main text-white text-lg px-4 py-2">
                    {validation.validationScore}% Score
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <BarChart3 className="mx-auto text-primary-blue mb-2" size={24} />
                    <div className="text-lg font-semibold">{validation.marketSize}</div>
                    <div className="text-sm text-baby-blue">Market Size</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="mx-auto text-yellow-400 mb-2" size={24} />
                    <div className="text-lg font-semibold">{validation.competitionLevel}</div>
                    <div className="text-sm text-baby-blue">Competition</div>
                  </div>
                  <div className="text-center">
                    <FileText className="mx-auto text-green-400 mb-2" size={24} />
                    <div className="text-lg font-semibold">{validation.pitchDeck?.slides?.length || 0} Slides</div>
                    <div className="text-sm text-baby-blue">Pitch Deck</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="mx-auto text-baby-blue mb-2" size={24} />
                    <div className="text-lg font-semibold">
                      {new Date(validation.createdAt).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-baby-blue">Created</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabbed Results */}
            <Tabs defaultValue="analysis" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-dark-blue">
                <TabsTrigger value="analysis" className="data-[state=active]:bg-gradient-main">
                  Detailed Analysis
                </TabsTrigger>
                <TabsTrigger value="pitch" className="data-[state=active]:bg-gradient-main">
                  Pitch Deck
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="analysis" className="mt-8">
                <AnalysisDashboard analysis={validation.analysis} />
              </TabsContent>
              
              <TabsContent value="pitch" className="mt-8">
                <PitchDeck slides={validation.pitchDeck?.slides || []} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
