import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Globe, Clock, User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageToggle } from './LanguageToggle';
import { TimeDisplay } from './TimeDisplay';
import { UserInfo } from './UserInfo';
import uaeLogo from '@/assets/uae-logo.png';
import authorityLogo from '@/assets/authority-logo.png';

interface HeaderProps {
  onLanguageChange: (isRTL: boolean) => void;
}

interface MenuItem {
  name: string;
  nameAr: string;
  href: string;
  submenu?: { name: string; nameAr: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', nameAr: 'الرئيسية', href: '/' },
  { 
    name: 'About Awqaf', 
    nameAr: 'حول الأوقاف', 
    href: '/about',
    submenu: [
      { name: 'Vision & Mission', nameAr: 'الرؤية والرسالة', href: '/about/vision' },
      { name: 'Leadership', nameAr: 'القيادة', href: '/about/leadership' },
      { name: 'History', nameAr: 'التاريخ', href: '/about/history' },
    ]
  },
  { 
    name: 'Employee Guidelines', 
    nameAr: 'إرشادات الموظفين', 
    href: '/guidelines',
    submenu: [
      { name: 'Code of Conduct', nameAr: 'مدونة السلوك', href: '/guidelines/conduct' },
      { name: 'Policies', nameAr: 'السياسات', href: '/guidelines/policies' },
    ]
  },
  { name: 'Media Center', nameAr: 'المركز الإعلامي', href: '/media' },
  { 
    name: 'E-Services', 
    nameAr: 'الخدمات الإلكترونية', 
    href: '/services',
    submenu: [
      { name: 'Online Forms', nameAr: 'النماذج الإلكترونية', href: '/services/forms' },
      { name: 'Digital Certificates', nameAr: 'الشهادات الرقمية', href: '/services/certificates' },
    ]
  },
  { name: 'Knowledge Base', nameAr: 'قاعدة المعرفة', href: '/knowledge' },
];

export const Header = ({ onLanguageChange }: HeaderProps) => {
  const [isRTL, setIsRTL] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<MenuItem[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = menuItems.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameAr.includes(searchQuery) ||
        item.submenu?.some(sub => 
          sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.nameAr.includes(searchQuery)
        )
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  const handleLanguageToggle = (rtl: boolean) => {
    setIsRTL(rtl);
    onLanguageChange(rtl);
  };

  return (
    <header className="bg-card shadow-uae border-b border-border">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left Section - UAE Logo & Theme Switcher */}
          <div className="flex items-center gap-6">
            <img src={uaeLogo} alt="UAE Coat of Arms" className="h-16 w-16" />
            <ThemeSwitcher />
          </div>

          {/* Right Section - Authority Logo */}
          <div className="flex-1 flex justify-end">
            <img src={authorityLogo} alt="Authority Logo" className="h-12 max-w-md object-contain" />
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center justify-between py-3 border-t border-border">
          {/* Main Navigation */}
          <nav className="flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-secondary flex items-center gap-1">
                        {isRTL ? item.nameAr : item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card border-border shadow-card">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} className="hover:bg-secondary">
                          <a href={subItem.href} className="w-full">
                            {isRTL ? subItem.nameAr : subItem.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded-md transition-colors"
                  >
                    {isRTL ? item.nameAr : item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section - Search, Language, Time */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder={isRTL ? "البحث..." : "Search..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-input border-border"
                />
              </div>
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-card z-50">
                  {searchResults.map((result) => (
                    <div key={result.href} className="p-3 hover:bg-secondary border-b border-border last:border-b-0">
                      <a href={result.href} className="block font-medium">
                        {isRTL ? result.nameAr : result.name}
                      </a>
                      {result.submenu && (
                        <div className="mt-2 pl-4">
                          {result.submenu.map((sub) => (
                            <a 
                              key={sub.href} 
                              href={sub.href} 
                              className="block text-sm text-muted-foreground hover:text-primary"
                            >
                              {isRTL ? sub.nameAr : sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <LanguageToggle onLanguageChange={handleLanguageToggle} />

            {/* Time Display */}
            <TimeDisplay isRTL={isRTL} />

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* User Info Section */}
        <UserInfo isRTL={isRTL} />
      </div>
    </header>
  );
};