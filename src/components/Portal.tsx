import { useState } from 'react';
import { Header } from './Header';
import { HeroBanner } from './HeroBanner';
import { NewsCarousel } from './NewsCarousel';
import { MainSections } from './MainSections';
import { BottomSections } from './BottomSections';
import { Footer } from './Footer';

export const Portal = () => {
  const [isRTL, setIsRTL] = useState(false);

  const handleLanguageChange = (rtl: boolean) => {
    setIsRTL(rtl);
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = rtl ? 'ar' : 'en';
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl font-arabic' : 'ltr'}`}>
      <Header onLanguageChange={handleLanguageChange} />
      
      <main className="container mx-auto px-2 lg:px-4 py-3 lg:py-4">
        {/* Hero Banner */}
        <HeroBanner isRTL={isRTL} />
        
        {/* News Carousel */}
        <NewsCarousel isRTL={isRTL} />
        
        {/* Main Sections Grid */}
        <MainSections isRTL={isRTL} />
        
        {/* Bottom Sections */}
        <BottomSections isRTL={isRTL} />
      </main>
      
      <Footer isRTL={isRTL} />
    </div>
  );
};