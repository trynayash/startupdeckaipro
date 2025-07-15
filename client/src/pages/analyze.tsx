import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ValidationForm from "@/components/validation-form";
import AnalysisDashboard from "@/components/analysis-dashboard";
import PitchDeck from "@/components/pitch-deck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, FileText, BarChart3 } from "lucide-react";

export default function Analyze() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const [validationResult, setValidationResult] = useState<any>(null);

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

  const handleValidationComplete = (result: any) => {
    setValidationResult(result);
    toast({
      title: "Validation Complete!",
      description: `Your idea scored ${result.analysis.validationScore}% - check out the detailed analysis below.`,
    });
  };

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
                Validate Your Business Idea
              </h1>
              <p className="text-xl text-baby-blue max-w-3xl mx-auto">
                Get instant AI-powered analysis, market insights, and a professional pitch deck 
                for your startup idea in just minutes.
              </p>
            </div>

            {/* Validation Form */}
            <div className="mb-12">
              <ValidationForm onValidationComplete={handleValidationComplete} />
            </div>

            {/* Results */}
            {validationResult && (
              <div className="space-y-8">
                {/* Validation Summary */}
                <Card className="glass-morphism-blue border-0 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="font-sora">Validation Summary</span>
                      <Badge className="bg-gradient-main text-white text-lg px-4 py-2">
                        {validationResult.analysis.validationScore}% Score
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <BarChart3 className="mx-auto text-primary-blue mb-2" size={24} />
                        <div className="text-lg font-semibold">{validationResult.analysis.marketSize}</div>
                        <div className="text-sm text-baby-blue">Market Size</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="mx-auto text-yellow-400 mb-2" size={24} />
                        <div className="text-lg font-semibold">{validationResult.analysis.competitionLevel}</div>
                        <div className="text-sm text-baby-blue">Competition</div>
                      </div>
                      <div className="text-center">
                        <FileText className="mx-auto text-green-400 mb-2" size={24} />
                        <div className="text-lg font-semibold">{validationResult.pitchDeck?.length || 0} Slides</div>
                        <div className="text-sm text-baby-blue">Pitch Deck</div>
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
                    <AnalysisDashboard analysis={validationResult.analysis} />
                  </TabsContent>
                  
                  <TabsContent value="pitch" className="mt-8">
                    <PitchDeck slides={validationResult.pitchDeck} />
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
