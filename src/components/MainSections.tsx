import { 
  CheckSquare, 
  Link, 
  Lightbulb, 
  Share2, 
  Mail, 
  Calendar,
  HelpCircle,
  FileText,
  Users,
  BookOpen,
  MessageSquare,
  MapPin,
  Building,
  Phone,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MainSectionsProps {
  isRTL: boolean;
}

const taskItems = [
  { iconEn: Mail, iconAr: Mail, nameEn: 'Unread Emails', nameAr: 'رسائل غير مقروءة', count: 5 },
  { iconEn: CheckSquare, iconAr: CheckSquare, nameEn: 'My Daily Task', nameAr: 'مهامي اليومية', count: 3 },
  { iconEn: FileText, iconAr: FileText, nameEn: 'OneDrive', nameAr: 'ون درايف', count: 12 },
  { iconEn: Calendar, iconAr: Calendar, nameEn: 'Bayanati', nameAr: 'بياناتي', count: 2 },
];

const quickLinks = [
  { iconEn: MessageSquare, iconAr: MessageSquare, nameEn: 'Discussion Board', nameAr: 'لوحة النقاش' },
  { iconEn: HelpCircle, iconAr: HelpCircle, nameEn: 'IT Support', nameAr: 'الدعم التقني' },
  { iconEn: Users, iconAr: Users, nameEn: 'Committees', nameAr: 'اللجان' },
  { iconEn: Award, iconAr: Award, nameEn: 'Nomination', nameAr: 'الترشيح' },
  { iconEn: MapPin, iconAr: MapPin, nameEn: 'Send Geo Location', nameAr: 'إرسال الموقع الجغرافي' },
  { iconEn: Building, iconAr: Building, nameEn: 'Corporate Directory', nameAr: 'دليل الشركات' },
  { iconEn: Calendar, iconAr: Calendar, nameEn: 'Meeting Room Reservation', nameAr: 'حجز قاعة الاجتماعات' },
];

const employeeInitiatives = [
  { iconEn: BookOpen, iconAr: BookOpen, nameEn: 'Quran Readings', nameAr: 'قراءات قرآنية' },
  { iconEn: Calendar, iconAr: Calendar, nameEn: 'Azkar', nameAr: 'أذكار' },
  { iconEn: FileText, iconAr: FileText, nameEn: 'My Readings', nameAr: 'قراءاتي' },
  { iconEn: Share2, iconAr: Share2, nameEn: 'Shared Books', nameAr: 'الكتب المشتركة' },
];

const socialMedia = [
  { name: 'Twitter', nameAr: 'تويتر', color: 'text-blue-400', bgColor: 'bg-blue-50' },
  { name: 'Instagram', nameAr: 'انستغرام', color: 'text-pink-500', bgColor: 'bg-pink-50' },
  { name: 'Facebook', nameAr: 'فيسبوك', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'Youtube', nameAr: 'يوتيوب', color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'Snapchat', nameAr: 'سناب شات', color: 'text-yellow-400', bgColor: 'bg-yellow-50' },
  { name: 'Telegram', nameAr: 'تيليغرام', color: 'text-blue-500', bgColor: 'bg-blue-50' },
];

export const MainSections = ({ isRTL }: MainSectionsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* My Tasks */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckSquare className="h-5 w-5" />
            </div>
            {isRTL ? 'مهامي' : 'My Tasks'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {taskItems.map((item, index) => {
            const Icon = item.iconEn;
            return (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-secondary/50 rounded-md transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    {isRTL ? item.nameAr : item.nameEn}
                  </span>
                </div>
                {item.count > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {item.count}
                  </span>
                )}
              </div>
            );
          })}
          <Button variant="outline" size="sm" className="w-full mt-4">
            {isRTL ? 'المزيد...' : 'More...'}
          </Button>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <div className="bg-primary/10 p-2 rounded-full">
              <Link className="h-5 w-5" />
            </div>
            {isRTL ? 'روابط سريعة' : 'Quick Links'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickLinks.slice(0, 4).map((item, index) => {
            const Icon = item.iconEn;
            return (
              <div key={index} className="flex items-center gap-2 p-2 hover:bg-secondary/50 rounded-md transition-colors cursor-pointer">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {isRTL ? item.nameAr : item.nameEn}
                </span>
              </div>
            );
          })}
          <Button variant="outline" size="sm" className="w-full mt-4">
            {isRTL ? 'المزيد...' : 'More...'}
          </Button>
        </CardContent>
      </Card>

      {/* Employee Initiatives */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <div className="bg-primary/10 p-2 rounded-full">
              <Lightbulb className="h-5 w-5" />
            </div>
            {isRTL ? 'مبادرات الموظفين' : 'Employee Initiatives'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {employeeInitiatives.map((item, index) => {
            const Icon = item.iconEn;
            return (
              <div key={index} className="flex items-center gap-2 p-2 hover:bg-secondary/50 rounded-md transition-colors cursor-pointer">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {isRTL ? item.nameAr : item.nameEn}
                </span>
              </div>
            );
          })}
          <Button variant="outline" size="sm" className="w-full mt-4">
            {isRTL ? 'المزيد...' : 'More...'}
          </Button>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <div className="bg-primary/10 p-2 rounded-full">
              <Share2 className="h-5 w-5" />
            </div>
            {isRTL ? 'وسائل التواصل الاجتماعي' : 'Social Media'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {socialMedia.map((platform, index) => (
              <div key={index} className={`${platform.bgColor} p-3 rounded-lg hover:scale-105 transition-transform cursor-pointer`}>
                <div className={`${platform.color} font-medium text-xs text-center`}>
                  {isRTL ? platform.nameAr : platform.name}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};