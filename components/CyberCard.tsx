import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  gradient?: boolean;
}

export const PremiumCard: React.FC<CardProps> = ({ children, className = "", title, icon, gradient = false }) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl p-5 card-shadow transition-all duration-300
      ${gradient ? 'premium-gradient text-white' : 'bg-white text-gray-800'}
      ${className}
    `}>
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
