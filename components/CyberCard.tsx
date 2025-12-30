import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  gradient?: boolean;
  delay?: number; // Animation delay in ms
}

export const PremiumCard: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  title, 
  icon, 
  gradient = false,
  delay = 0 
}) => {
  // Convert number delay to class string if it matches common Tailwind patterns, otherwise inline style
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl p-5 card-shadow transition-all duration-300
        animate-slide-up
        hover:scale-[1.01] hover:shadow-lg
        ${gradient 
          ? 'premium-gradient text-white border-0' 
          : 'bg-white text-gray-800 border border-gray-100/80'} 
        ${className}
      `}
      style={delayStyle}
    >
      {(title || icon) && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {icon && <div className={`${gradient ? 'text-blue-300' : 'text-blue-600'}`}>{icon}</div>}
            {title && (
              <h3 className={`text-xs font-bold uppercase tracking-wider ${gradient ? 'text-blue-100' : 'text-gray-400'}`}>
                {title}
              </h3>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};