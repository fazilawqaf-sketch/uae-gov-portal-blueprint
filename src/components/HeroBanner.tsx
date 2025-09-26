import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

interface HeroBannerProps {
  isRTL: boolean;
}

export const HeroBanner = ({ isRTL }: HeroBannerProps) => {
  return (
    <div className="relative mb-4 lg:mb-6 rounded-lg overflow-hidden">
      <img 
        src={heroBanner} 
        alt="UAE Government Portal Banner" 
        className="w-full h-32 sm:h-48 lg:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="container mx-auto px-3 lg:px-6">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-white text-lg sm:text-2xl lg:text-4xl font-bold mb-2 lg:mb-4 leading-tight">
              {isRTL 
                ? 'بوابة الهيئة العامة للشؤون الإسلامية والأوقاف'
                : 'General Authority of Islamic Affairs and Endowments Portal'
              }
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-xl mb-3 lg:mb-6 line-clamp-2">
              {isRTL
                ? 'خدمات متميزة لخدمة المجتمع وتعزيز القيم الإسلامية'
                : 'Excellence in serving the community and promoting Islamic values'
              }
            </p>
            <div className="flex gap-2 lg:gap-4">
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-white text-xs lg:text-sm">
                {isRTL ? 'اكتشف المزيد' : 'Discover More'}
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary text-xs lg:text-sm">
                {isRTL ? 'الخدمات الإلكترونية' : 'E-Services'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};