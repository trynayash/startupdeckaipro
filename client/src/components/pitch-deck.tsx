import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PitchDeckSlide {
  title: string;
  content: string;
  slideType: string;
  notes?: string;
}

interface PitchDeckProps {
  slides: PitchDeckSlide[];
}

export default function PitchDeck({ slides }: PitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleExportPDF = () => {
    // This would implement PDF export functionality
    alert("PDF export functionality would be implemented here");
  };

  const handleShare = () => {
    // This would implement sharing functionality
    alert("Share functionality would be implemented here");
  };

  if (!slides || slides.length === 0) {
    return (
      <Card className="glass-morphism-blue border-0 text-white">
        <CardContent className="p-8 text-center">
          <FileText className="mx-auto text-baby-blue mb-4" size={48} />
          <p className="text-baby-blue">No pitch deck slides available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Pitch Deck Header */}
      <Card className="glass-morphism-blue border-0 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-sora">Pitch Deck</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportPDF}
                className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
              >
                <Download className="mr-2" size={16} />
                Export PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
              >
                <Share2 className="mr-2" size={16} />
                Share
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Slide Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
        >
          <ChevronLeft className="mr-2" size={16} />
          Previous
        </Button>
        
        <div className="flex items-center space-x-2">
          <span className="text-baby-blue text-sm">
            {currentSlide + 1} of {slides.length}
          </span>
          <Badge variant="secondary" className="bg-primary-blue text-white">
            {slides[currentSlide]?.slideType}
          </Badge>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="glass-morphism border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
        >
          Next
          <ChevronRight className="ml-2" size={16} />
        </Button>
      </div>

      {/* Current Slide */}
      <Card className="glass-morphism-blue border-0 text-white min-h-[400px]">
        <CardHeader>
          <CardTitle className="font-sora text-2xl">{slides[currentSlide]?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none">
            <div 
              className="text-baby-blue leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: slides[currentSlide]?.content?.replace(/\n/g, '<br />') || '' 
              }}
            />
          </div>
          {slides[currentSlide]?.notes && (
            <div className="mt-6 p-4 bg-dark-blue bg-opacity-50 rounded-lg">
              <h4 className="font-semibold text-primary-blue mb-2">Presenter Notes:</h4>
              <p className="text-sm text-baby-blue">{slides[currentSlide].notes}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Slide Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {slides.map((slide, index) => (
          <Card
            key={index}
            className={`glass-morphism-blue border-0 text-white cursor-pointer transition-all duration-200 ${
              index === currentSlide ? 'ring-2 ring-primary-blue' : 'hover:ring-1 hover:ring-baby-blue'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <CardContent className="p-3">
              <div className="text-xs text-baby-blue mb-1">{index + 1}</div>
              <div className="text-sm font-medium line-clamp-2">{slide.title}</div>
              <Badge variant="secondary" className="bg-primary-blue text-white text-xs mt-2">
                {slide.slideType}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
