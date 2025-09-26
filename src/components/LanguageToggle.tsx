import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  onLanguageChange: (isRTL: boolean) => void;
}

export const LanguageToggle = ({ onLanguageChange }: LanguageToggleProps) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
    onLanguageChange(newLang === 'ar');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 min-w-[80px] border-border hover:bg-secondary"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {currentLang === 'en' ? 'EN' : 'عر'}
      </span>
      <span className="text-muted-foreground text-xs">
        {currentLang === 'en' ? '| عربي' : '| EN'}
      </span>
    </Button>
  );
};