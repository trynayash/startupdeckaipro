import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Users, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";

interface AnalysisDashboardProps {
  analysis: {
    validationScore: number;
    marketSize: string;
    competitionLevel: string;
    targetAudience: string;
    strengths: string[];
    weaknesses: string[];
    recommendations: string[];
    businessModel: string;
    techStack: string[];
    estimatedCosts: string;
    timeline: string;
    risks: string[];
    opportunities: string[];
  };
}

export default function AnalysisDashboard({ analysis }: AnalysisDashboardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getCompetitionColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "low": return "bg-green-600";
      case "medium": return "bg-yellow-600";
      case "high": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Validation Score Card */}
      <Card className="glass-morphism-blue border-0 text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="font-sora">Validation Score</span>
            <span className={`text-3xl font-bold ${getScoreColor(analysis.validationScore)}`}>
              {analysis.validationScore}%
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={analysis.validationScore} className="h-3" />
          <p className="text-baby-blue text-sm mt-2">
            Based on market analysis, competition, and viability factors
          </p>
        </CardContent>
      </Card>

      {/* Market Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="text-primary-blue" size={20} />
              <span className="font-sora">Market Size</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-blue mb-2">{analysis.marketSize}</div>
            <p className="text-baby-blue text-sm">Total Addressable Market</p>
          </CardContent>
        </Card>

        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="text-primary-blue" size={20} />
              <span className="font-sora">Competition</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className={`${getCompetitionColor(analysis.competitionLevel)} text-white mb-2`}>
              {analysis.competitionLevel}
            </Badge>
            <p className="text-baby-blue text-sm">Competition Level</p>
          </CardContent>
        </Card>
      </div>

      {/* Target Audience */}
      <Card className="glass-morphism-blue border-0 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="text-primary-blue" size={20} />
            <span className="font-sora">Target Audience</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-baby-blue">{analysis.targetAudience}</p>
        </CardContent>
      </Card>

      {/* Business Model & Tech Stack */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="text-primary-blue" size={20} />
              <span className="font-sora">Business Model</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-baby-blue mb-4">{analysis.businessModel}</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Estimated Costs:</span>
                <span className="text-sm font-semibold">{analysis.estimatedCosts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Timeline:</span>
                <span className="text-sm font-semibold">{analysis.timeline}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="font-sora">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {analysis.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-primary-blue text-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="text-green-400" size={20} />
              <span className="font-sora">Strengths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="text-green-400 mt-0.5" size={16} />
                  <span className="text-baby-blue text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="text-yellow-400" size={20} />
              <span className="font-sora">Areas for Improvement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="text-yellow-400 mt-0.5" size={16} />
                  <span className="text-baby-blue text-sm">{weakness}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="glass-morphism-blue border-0 text-white">
        <CardHeader>
          <CardTitle className="font-sora">Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {analysis.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-blue rounded-full mt-2"></div>
                <span className="text-baby-blue">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Risks & Opportunities */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="text-red-400" size={20} />
              <span className="font-sora">Risks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.risks.map((risk, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="text-red-400 mt-0.5" size={16} />
                  <span className="text-baby-blue text-sm">{risk}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-morphism-blue border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="text-green-400" size={20} />
              <span className="font-sora">Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <TrendingUp className="text-green-400 mt-0.5" size={16} />
                  <span className="text-baby-blue text-sm">{opportunity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
