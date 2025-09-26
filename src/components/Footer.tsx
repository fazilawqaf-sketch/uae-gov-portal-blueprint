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
    <footer className="bg-uae-black text-uae-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-uae-gold mb-4">
              {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-uae-gold" />
                <span>+971 2 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-uae-gold" />
                <span>info@awqaf.gov.ae</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-uae-gold" />
                <span>
                  {isRTL 
                    ? 'أبوظبي، دولة الإمارات العربية المتحدة'
                    : 'Abu Dhabi, United Arab Emirates'
                  }
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-uae-gold" />
                <span>www.awqaf.gov.ae</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-uae-gold mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <div className="space-y-2">
              {[
                { en: 'About Us', ar: 'من نحن' },
                { en: 'Services', ar: 'الخدمات' },
                { en: 'Media Center', ar: 'المركز الإعلامي' },
                { en: 'Contact Us', ar: 'اتصل بنا' },
                { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
                { en: 'Terms of Use', ar: 'شروط الاستخدام' },
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block hover:text-uae-gold transition-colors duration-200 flex items-center gap-2"
                >
                  {isRTL ? link.ar : link.en}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-uae-gold mb-4">
              {isRTL ? 'خدماتنا' : 'Our Services'}
            </h3>
            <div className="space-y-2">
              {[
                { en: 'Zakat Services', ar: 'خدمات الزكاة' },
                { en: 'Endowment Management', ar: 'إدارة الأوقاف' },
                { en: 'Islamic Guidelines', ar: 'الإرشادات الإسلامية' },
                { en: 'Religious Affairs', ar: 'الشؤون الدينية' },
                { en: 'Community Programs', ar: 'البرامج المجتمعية' },
              ].map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block hover:text-uae-gold transition-colors duration-200 flex items-center gap-2"
                >
                  {isRTL ? service.ar : service.en}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-uae-gold mb-4">
              {isRTL ? 'تابعنا على' : 'Follow Us'}
            </h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, color: 'hover:text-blue-500' },
                { icon: Twitter, color: 'hover:text-blue-400' },
                { icon: Instagram, color: 'hover:text-pink-500' },
                { icon: Youtube, color: 'hover:text-red-500' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`bg-transparent border-uae-gold text-uae-gold hover:bg-uae-gold hover:text-uae-black ${social.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">
                {isRTL ? 'اشترك في النشرة الإخبارية' : 'Subscribe to Newsletter'}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={isRTL ? 'البريد الإلكتروني' : 'Enter your email'}
                  className="flex-1 px-3 py-2 bg-transparent border border-uae-gold rounded-md focus:outline-none focus:ring-2 focus:ring-uae-gold"
                />
                <Button className="bg-uae-gold text-uae-black hover:bg-uae-gold/90">
                  {isRTL ? 'اشترك' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-uae-gold/30 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <div>
            © 2025 {isRTL 
              ? 'الهيئة العامة للشؤون الإسلامية والأوقاف والدعوة - جميع الحقوق محفوظة'
              : 'General Authority of Islamic Affairs, Endowments and Zakat - All Rights Reserved'
            }
          </div>
          <div className="flex items-center gap-4">
            <span>
              {isRTL ? 'مدعوم بواسطة' : 'Powered by'}
            </span>
            <span className="text-uae-gold font-semibold">
              {isRTL ? 'الحكومة الرقمية لدولة الإمارات' : 'UAE Digital Government'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};