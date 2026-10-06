import React from 'react';

interface DumbbellIconProps {
  className?: string;
  size?: number;
}

export const DumbbellIcon: React.FC<DumbbellIconProps> = ({
  className = 'w-6 h-6 text-white',
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer left plate */}
      <rect x="1" y="4" width="2.5" height="12" rx="1.25" fill="currentColor" />
      {/* Inner left plate */}
      <rect x="5" y="1" width="3" height="18" rx="1.5" fill="currentColor" />
      {/* Center bar */}
      <rect x="8" y="8.5" width="12" height="3" rx="0.5" fill="currentColor" />
      {/* Inner right plate */}
      <rect x="20" y="1" width="3" height="18" rx="1.5" fill="currentColor" />
      {/* Outer right plate */}
      <rect x="24.5" y="4" width="2.5" height="12" rx="1.25" fill="currentColor" />
    </svg>
  );
};
