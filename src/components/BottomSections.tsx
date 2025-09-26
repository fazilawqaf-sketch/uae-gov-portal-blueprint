import { useState, useEffect } from 'react';
import { Calendar, Users, Newspaper, MessageSquare } from 'lucide-react';

interface BottomSectionsProps {
  isRTL: boolean;
}

const sections = [
  {
    titleEn: 'Events',
    titleAr: 'الفعاليات',
    icon: Calendar,
    items: [
      {
        titleEn: 'UAE National Day Celebration',
        titleAr: 'احتفالية اليوم الوطني للإمارات',
        descriptionEn: 'Join us in celebrating UAE National Day with special events and activities',
        descriptionAr: 'انضم إلينا في الاحتفال باليوم الوطني للإمارات مع فعاليات وأنشطة خاصة',
        date: 'Sep 26',
        location: 'Abu Dhabi'
      },
      {
        titleEn: 'Islamic Heritage Festival',
        titleAr: 'مهرجان التراث الإسلامي',
        descriptionEn: 'Celebrating rich Islamic heritage and culture in the UAE',
        descriptionAr: 'احتفال بالتراث والثقافة الإسلامية الغنية في دولة الإمارات',
        date: 'Oct 15',
        location: 'Dubai'
      },
      {
        titleEn: 'Community Outreach Program',
        titleAr: 'برنامج التواصل المجتمعي',
        descriptionEn: 'Engaging with local communities to promote Islamic values',
        descriptionAr: 'التفاعل مع المجتمعات المحلية لتعزيز القيم الإسلامية',
        date: 'Nov 3',
        location: 'Sharjah'
      }
    ]
  },
  {
    titleEn: 'New Employees',
    titleAr: 'الموظفون الجدد',
    icon: Users,
    items: [
      {
        titleEn: 'Saeed Al Ketbi',
        titleAr: 'سعيد الكتبي',
        descriptionEn: 'Head of Sharia Research and Studies Section',
        descriptionAr: 'رئيس قسم البحوث والدراسات الشرعية',
        date: 'Sep 20',
        location: 'Research Dept'
      },
      {
        titleEn: 'Mariam Al Zaabi',
        titleAr: 'مريم الزعابي',
        descriptionEn: 'Islamic Affairs Specialist',
        descriptionAr: 'أخصائية الشؤون الإسلامية',
        date: 'Sep 22',
        location: 'Islamic Affairs'
      },
      {
        titleEn: 'Ahmed Al Mansouri',
        titleAr: 'أحمد المنصوري',
        descriptionEn: 'Endowments Coordinator',
        descriptionAr: 'منسق الأوقاف',
        date: 'Sep 25',
        location: 'Endowments'
      }
    ]
  },
  {
    titleEn: 'News',
    titleAr: 'الأخبار',
    icon: Newspaper,
    items: [
      {
        titleEn: 'Digital Transformation Initiative',
        titleAr: 'مبادرة التحول الرقمي',
        descriptionEn: 'Launching comprehensive digital services for better citizen experience',
        descriptionAr: 'إطلاق خدمات رقمية شاملة لتحسين تجربة المواطنين',
        date: 'Sep 25',
        location: 'Abu Dhabi'
      },
      {
        titleEn: 'Zakat Collection Campaign',
        titleAr: 'حملة جمع الزكاة',
        descriptionEn: 'Annual zakat collection campaign begins across the UAE',
        descriptionAr: 'تبدأ حملة جمع الزكاة السنوية في جميع أنحاء الإمارات',
        date: 'Sep 23',
        location: 'Nationwide'
      },
      {
        titleEn: 'Interfaith Dialogue Conference',
        titleAr: 'مؤتمر الحوار بين الأديان',
        descriptionEn: 'International conference promoting interfaith understanding',
        descriptionAr: 'مؤتمر دولي لتعزيز التفاهم بين الأديان',
        date: 'Oct 10',
        location: 'Dubai'
      }
    ]
  },
  {
    titleEn: 'Announcements',
    titleAr: 'الإعلانات',
    icon: MessageSquare,
    items: [
      {
        titleEn: 'Prayer Times Update',
        titleAr: 'تحديث أوقات الصلاة',
        descriptionEn: 'Updated prayer times for the winter season',
        descriptionAr: 'أوقات الصلاة المحدثة لفصل الشتاء',
        date: 'Sep 26',
        location: 'UAE'
      },
      {
        titleEn: 'Endowment Guidelines',
        titleAr: 'إرشادات الأوقاف',
        descriptionEn: 'New guidelines for endowment donations and management',
        descriptionAr: 'إرشادات جديدة لتبرعات وإدارة الأوقاف',
        date: 'Sep 24',
        location: 'All Emirates'
      },
      {
        titleEn: 'Ramadan Preparation',
        titleAr: 'الاستعداد لرمضان',
        descriptionEn: 'Early preparations for the upcoming holy month',
        descriptionAr: 'الاستعدادات المبكرة للشهر الفضيل المقبل',
        date: 'Jan 15',
        location: 'UAE'
      }
    ]
  }
];

export const BottomSections = ({ isRTL }: BottomSectionsProps) => {
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices(prev => prev.map((index, sectionIndex) => {
        const maxItems = sections[sectionIndex].items.length;
        return (index + 1) % maxItems;
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
      {sections.map((section, sectionIndex) => {
        const currentItem = section.items[currentIndices[sectionIndex]];
        return (
          <div key={section.titleEn} className="bg-card rounded-lg shadow-card p-3 lg:p-4 h-48 lg:h-52">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <section.icon className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm lg:text-base">
                {isRTL ? section.titleAr : section.titleEn}
              </h3>
            </div>
            
            <div className="h-32 lg:h-36 overflow-hidden">
              <div className="transition-all duration-500 ease-in-out transform">
                <div className="border-l-4 border-primary/30 pl-3 h-full">
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base line-clamp-2">
                    {isRTL ? currentItem.titleAr : currentItem.titleEn}
                  </h4>
                  <p className="text-muted-foreground text-xs lg:text-sm mb-2 line-clamp-3">
                    {isRTL ? currentItem.descriptionAr : currentItem.descriptionEn}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{currentItem.date}</span>
                    <span>•</span>
                    <span className="truncate">{currentItem.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-1 mt-2">
              {section.items.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentIndices[sectionIndex] ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};