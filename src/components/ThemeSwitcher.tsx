import { useState } from 'react';

const themes = [
  { name: 'Gold', color: 'theme-gold', bgColor: 'bg-uae-gold' },
  { name: 'Green', color: 'theme-green', bgColor: 'bg-uae-green' },
  { name: 'Blue', color: 'theme-blue', bgColor: 'bg-theme-blue' },
  { name: 'Red', color: 'theme-red', bgColor: 'bg-theme-red' },
];

export const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState('Gold');

  const handleThemeChange = (theme: typeof themes[0]) => {
    setActiveTheme(theme.name);
    
    // Update CSS custom properties to change theme
    const root = document.documentElement;
    
    switch (theme.name) {
      case 'Gold':
        root.style.setProperty('--primary', '45 95% 50%');
        root.style.setProperty('--primary-dark', '42 85% 35%');
        root.style.setProperty('--accent', '45 70% 60%');
        break;
      case 'Green':
        root.style.setProperty('--primary', '140 60% 45%');
        root.style.setProperty('--primary-dark', '140 70% 30%');
        root.style.setProperty('--accent', '140 50% 60%');
        break;
      case 'Blue':
        root.style.setProperty('--primary', '210 85% 55%');
        root.style.setProperty('--primary-dark', '210 90% 40%');
        root.style.setProperty('--accent', '210 70% 70%');
        break;
      case 'Red':
        root.style.setProperty('--primary', '0 75% 50%');
        root.style.setProperty('--primary-dark', '0 80% 35%');
        root.style.setProperty('--accent', '0 65% 65%');
        break;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Theme:</span>
      <div className="flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => handleThemeChange(theme)}
            className={`
              w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110
              ${theme.bgColor}
              ${activeTheme === theme.name 
                ? 'border-foreground shadow-md' 
                : 'border-muted-foreground/30 hover:border-foreground/50'
              }
            `}
            title={`Switch to ${theme.name} theme`}
            aria-label={`Switch to ${theme.name} theme`}
          />
        ))}
      </div>
    </div>
  );
};