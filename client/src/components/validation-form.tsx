import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ValidationFormProps {
  onValidationComplete: (result: any) => void;
}

export default function ValidationForm({ onValidationComplete }: ValidationFormProps) {
  const [ideaText, setIdeaText] = useState("");
  const { toast } = useToast();

  const { data: randomIdea } = useQuery({
    queryKey: ["/api/random-idea"],
    enabled: false,
  });

  const generateRandomIdea = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("GET", "/api/random-idea");
      return response.json();
    },
    onSuccess: (data) => {
      setIdeaText(data.idea);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to generate random idea. Please try again.",
        variant: "destructive",
      });
    },
  });

  const validateIdea = useMutation({
    mutationFn: async (idea: string) => {
      const response = await apiRequest("POST", "/api/validate-idea", { ideaText: idea });
      return response.json();
    },
    onSuccess: (data) => {
      onValidationComplete(data);
    },
    onError: (error) => {
      toast({
        title: "Validation Failed",
        description: "Failed to validate your idea. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaText.trim()) {
      toast({
        title: "Error",
        description: "Please enter your business idea.",
        variant: "destructive",
      });
      return;
    }
    validateIdea.mutate(ideaText);
  };

  return (
    <Card className="glass-morphism-blue border-0 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-sora font-bold">Describe Your Business Idea</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="idea" className="text-baby-blue font-medium">
              What's your business idea?
            </Label>
            <Textarea
              id="idea"
              value={ideaText}
              onChange={(e) => setIdeaText(e.target.value)}
              placeholder="A mobile app that helps busy professionals find and book last-minute fitness classes in their area with AI-powered recommendations based on their schedule and preferences..."
              className="min-h-[120px] bg-dark-blue bg-opacity-50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
              rows={6}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => generateRandomIdea.mutate()}
              disabled={generateRandomIdea.isPending}
              className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
            >
              {generateRandomIdea.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Surprise Me
            </Button>
            
            <Button
              type="submit"
              disabled={validateIdea.isPending || !ideaText.trim()}
              className="bg-gradient-main hover:opacity-90 flex-1"
            >
              {validateIdea.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="mr-2 h-4 w-4" />
              )}
              Analyze Idea
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
