import { Quote } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

interface HeroBannerProps {
  isRTL: boolean;
}

export const HeroBanner = ({ isRTL }: HeroBannerProps) => {
  return (
    <div className="relative h-80 overflow-hidden rounded-lg shadow-card mb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Quote className="h-16 w-16 mx-auto mb-6 opacity-80" />
          
          <div className={`space-y-4 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? (
              <>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  المجتمع القوي والمتماسك والمستقر يعني
                </h2>
                <p className="text-xl md:text-2xl font-medium opacity-95 leading-relaxed">
                  وطناً قادراً على تحقيق طموحاته ومواجهة تحدياته والتخطيط السليم لمستقبله
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  A STRONG, COHESIVE, AND STABLE SOCIETY MEANS
                </h2>
                <p className="text-xl md:text-2xl font-medium opacity-95 leading-relaxed">
                  A NATION CAPABLE OF REALIZING ITS AMBITIONS, CONFRONTING ITS CHALLENGES, AND PLANNING WISELY FOR ITS FUTURE
                </p>
              </>
            )}
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-1 w-16 bg-white/60" />
            <Quote className="h-8 w-8 rotate-180 opacity-60" />
            <div className="h-1 w-16 bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};