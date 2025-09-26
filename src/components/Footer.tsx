import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  isRTL: boolean;
}

export const Footer = ({ isRTL }: FooterProps) => {
  return (
    <footer className="bg-card shadow-uae border-t border-border mt-4">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            {isRTL 
              ? '© 2025 الهيئة العامة للشؤون الإسلامية والأوقاف. جميع الحقوق محفوظة.'
              : '© 2025 General Authority of Islamic Affairs and Endowments. All rights reserved.'
            }
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <span className="text-muted-foreground text-xs">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              {isRTL ? 'شروط الاستخدام' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};