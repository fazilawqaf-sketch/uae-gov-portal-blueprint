import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: number;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  date: string;
  isImportant: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    titleEn: "H.E. Dr. Omar Habtoor Al Darei, Chairman of the General Authority of Islamic Affairs, Endowments, and Zakat (Awqaf), received at the Authority's headquarters in Abu Dhabi H.H. Prince Amir Nasser Ibrahim...",
    titleAr: "معالي الدكتور عمر حبتور الدارعي رئيس الهيئة العامة للشؤون الإسلامية والأوقاف والدعوة استقبل في مقر الهيئة بأبوظبي سمو الأمير ناصر إبراهيم...",
    summaryEn: "Important meeting discussing cooperation in Islamic affairs",
    summaryAr: "اجتماع مهم لمناقشة التعاون في الشؤون الإسلامية",
    date: "2025-09-26",
    isImportant: true
  },
  {
    id: 2,
    titleEn: "New Initiative for Digital Transformation in Islamic Services",
    titleAr: "مبادرة جديدة للتحول الرقمي في الخدمات الإسلامية",
    summaryEn: "Launching comprehensive digital services for better citizen experience",
    summaryAr: "إطلاق خدمات رقمية شاملة لتحسين تجربة المواطنين",
    date: "2025-09-25",
    isImportant: false
  },
  {
    id: 3,
    titleEn: "Annual Islamic Heritage Festival Announcement",
    titleAr: "إعلان مهرجان التراث الإسلامي السنوي",
    summaryEn: "Celebrating UAE's rich Islamic heritage and culture",
    summaryAr: "احتفالاً بالتراث والثقافة الإسلامية الغنية في دولة الإمارات",
    date: "2025-09-24",
    isImportant: false
  },
];

interface NewsCarouselProps {
  isRTL: boolean;
}

export const NewsCarousel = ({ isRTL }: NewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        isRTL ? (prev === 0 ? newsItems.length - 1 : prev - 1)
             : (prev === newsItems.length - 1 ? 0 : prev + 1)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isRTL]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      isRTL ? (prev === 0 ? newsItems.length - 1 : prev - 1)
           : (prev === newsItems.length - 1 ? 0 : prev + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      isRTL ? (prev === newsItems.length - 1 ? 0 : prev + 1)
           : (prev === 0 ? newsItems.length - 1 : prev - 1)
    );
  };

  const currentNews = newsItems[currentIndex];

  return (
    <div className="bg-card rounded-lg shadow-card p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          {isRTL ? 'آخر الأخبار' : 'Latest News'}
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="h-8 w-8"
          >
            {isRTL ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="h-8 w-8"
          >
            {isRTL ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className={`transition-transform duration-500 ease-in-out ${
            isRTL ? 'animate-slide-right' : 'animate-slide-left'
          }`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{new Date(currentNews.date).toLocaleDateString(isRTL ? 'ar-AE' : 'en-AE')}</span>
                {currentNews.isImportant && (
                  <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium ml-2">
                    {isRTL ? 'عاجل' : 'Breaking'}
                  </span>
                )}
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </div>
            
            <h4 className="font-semibold text-foreground mb-2 line-clamp-2 leading-relaxed">
              {isRTL ? currentNews.titleAr : currentNews.titleEn}
            </h4>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
              {isRTL ? currentNews.summaryAr : currentNews.summaryEn}
            </p>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};