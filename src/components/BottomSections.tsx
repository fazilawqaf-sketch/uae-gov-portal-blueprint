import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Bell, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BottomSectionsProps {
  isRTL: boolean;
}

const newEmployees = [
  {
    id: 1,
    nameEn: 'Saeed Ayed Saeed Al Ketbi',
    nameAr: 'سعيد عايد سعيد الكتبي',
    positionEn: 'Head of Sharia Research and Studies Section',
    positionAr: 'رئيس قسم البحوث والدراسات الشرعية',
    department: 'Sharia Research and Studies Section',
    departmentAr: 'قسم البحوث والدراسات الشرعية',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
];

const events = [
  {
    id: 1,
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1569592651122-ace7bb74a6b5?w=400&h=200&fit=crop',
    titleEn: 'UAE National Day Celebration',
    titleAr: 'احتفالية اليوم الوطني للإمارات',
  }
];

const announcements = [
  {
    id: 1,
    date: '22 September 2025',
    titleEn: 'Zakat Calculation Guidelines',
    titleAr: 'إرشادات حساب الزكاة',
    type: 'announcement'
  },
  {
    id: 2,
    date: '22 September 2025',
    titleEn: 'Endowment Donations Process',
    titleAr: 'عملية التبرعات الوقفية',
    type: 'announcement'
  }
];

export const BottomSections = ({ isRTL }: BottomSectionsProps) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* New Employees */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-primary border-b border-primary/20 pb-2">
            {isRTL ? 'الموظفون الجدد' : 'New Employees'}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {newEmployees.map((employee) => (
            <div key={employee.id} className="space-y-4">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-uae p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold text-primary text-lg">
                  {isRTL ? employee.nameAr : employee.nameEn}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {isRTL ? employee.positionAr : employee.positionEn}
                </p>
                <p className="text-xs text-muted-foreground">
                  {isRTL ? employee.departmentAr : employee.department}
                </p>
              </div>

              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <Button key={num} variant="outline" size="sm" className="w-8 h-8 rounded-full p-0">
                    {num}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Events */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-primary border-b border-primary/20 pb-2 flex items-center justify-between">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {isRTL ? 'الفعاليات' : 'Events'}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {events.map((event) => (
            <div key={event.id} className="space-y-4">
              <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-lg">
                {event.date}
              </div>
              
              <div className="relative h-32 rounded-lg overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-white to-red-600 opacity-20" />
                <div className="absolute inset-0 bg-primary/10" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Calendar className="h-8 w-8 mx-auto text-primary" />
                    <p className="text-sm font-medium text-foreground">
                      {isRTL ? event.titleAr : event.titleEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Announcements */}
      <Card className="shadow-card hover:shadow-uae transition-shadow animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-primary border-b border-primary/20 pb-2">
            {isRTL ? 'الإعلانات' : 'Announcements'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div className="text-sm text-primary font-bold">
                  {announcement.date}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
              
              <h4 className="font-medium text-foreground mb-2">
                {isRTL ? announcement.titleAr : announcement.titleEn}
              </h4>
              
              <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                {isRTL ? 'المزيد...' : 'More...'}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};