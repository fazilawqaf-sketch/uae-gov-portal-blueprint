import { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

interface TimeDisplayProps {
  isRTL: boolean;
}

export const TimeDisplay = ({ isRTL }: TimeDisplayProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(isRTL ? 'ar-AE' : 'en-AE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Dubai'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(isRTL ? 'ar-AE' : 'en-AE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Dubai'
    });
  };

  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span className="font-medium">
          {formatDate(currentTime)}
        </span>
      </div>
      <div className="flex items-center gap-2 text-primary font-bold">
        <Clock className="h-4 w-4" />
        <span>
          {formatTime(currentTime)}
        </span>
      </div>
    </div>
  );
};