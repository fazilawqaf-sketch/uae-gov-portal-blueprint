import { useState, useEffect } from 'react';
import { User, LogIn, LogOut, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserInfoProps {
  isRTL: boolean;
}

export const UserInfo = ({ isRTL }: UserInfoProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [checkInTime] = useState(new Date('2025-09-26T08:00:00'));
  const [checkOutTime] = useState(new Date('2025-09-26T17:00:00'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateRemainingHours = () => {
    const workDayHours = 8;
    const now = new Date();
    const todayCheckIn = new Date(now);
    todayCheckIn.setHours(8, 0, 0, 0);
    
    const workedHours = Math.max(0, (now.getTime() - todayCheckIn.getTime()) / (1000 * 60 * 60));
    const remainingHours = Math.max(0, workDayHours - workedHours);
    
    const hours = Math.floor(remainingHours);
    const minutes = Math.floor((remainingHours - hours) * 60);
    
    return { hours, minutes };
  };

  const { hours: remainingHours, minutes: remainingMinutes } = calculateRemainingHours();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(isRTL ? 'ar-AE' : 'en-AE', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Dubai'
    });
  };

  return (
    <div className="bg-gradient-uae text-primary-foreground py-4 rounded-lg mb-4">
      <div className="flex items-center justify-between px-6">
        {/* Welcome Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                {isRTL ? 'مرحباً' : 'Welcome'}
              </h3>
              <p className="text-sm opacity-90">
                {isRTL ? 'أحمد محمد الزعابي' : 'Ahmed Mohammed Al Zaabi'}
              </p>
            </div>
          </div>

          {/* Check In/Out Times */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 p-2 rounded-full">
                <LogIn className="h-4 w-4 text-green-300" />
              </div>
              <div>
                <p className="text-xs opacity-75">
                  {isRTL ? 'دخول' : 'Entry'}
                </p>
                <p className="font-mono font-bold">
                  {formatTime(checkInTime)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-red-500/20 p-2 rounded-full">
                <LogOut className="h-4 w-4 text-red-300" />
              </div>
              <div>
                <p className="text-xs opacity-75">
                  {isRTL ? 'خروج' : 'Exit'}
                </p>
                <p className="font-mono font-bold">
                  {formatTime(checkOutTime)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Time Left Section */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm opacity-75 mb-1">
              {isRTL ? 'الوقت المتبقي' : 'Time Left'}
            </p>
            <div className="flex items-center justify-end gap-2">
              <Clock className="h-5 w-5 opacity-90" />
              <span className="font-mono text-2xl font-bold">
                {String(remainingHours).padStart(2, '0')}:
                {String(remainingMinutes).padStart(2, '0')}
              </span>
            </div>
            <p className="text-xs opacity-75 mt-1">
              {isRTL ? `من أصل 8 ساعات` : 'of 8 hours total'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};