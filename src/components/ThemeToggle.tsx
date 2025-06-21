import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, GripVertical } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [isClick, setIsClick] = useState(true);
  const dragRef = useRef<HTMLButtonElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsClick(true), 100);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragRef.current) return;
      setIsClick(false);
      const newX = e.clientX - offsetRef.current.x;
      const newY = e.clientY - offsetRef.current.y;
      setPosition({ x: newX, y: newY });
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!dragRef.current) return;
    setIsDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (!dragRef.current) return;
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = dragRef.current.getBoundingClientRect();
    offsetRef.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (!isDragging || !dragRef.current) return;
    setIsClick(false);
    const touch = e.touches[0];
    const newX = touch.clientX - offsetRef.current.x;
    const newY = touch.clientY - offsetRef.current.y;
    setPosition({ x: newX, y: newY });
  };
  
  const handleToggleTheme = () => {
    if (isClick) {
      toggleTheme();
    }
  };

  return (
    <button
      ref={dragRef}
      onClick={handleToggleTheme}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      className="fixed z-50 p-3 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-grab active:cursor-grabbing"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="flex items-center">
        {theme === 'light' ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
        <GripVertical className="w-4 h-4 ml-2 text-gray-400 dark:text-gray-600 opacity-50" />
      </div>
    </button>
  );
};

export default ThemeToggle; 