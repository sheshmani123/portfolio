"use client";

import React, { useRef, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
}

const TiltCard: React.FC<TiltCardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const offsetX = ((x - centerX) / centerX) * 15; // Reduced rotation
      const offsetY = ((y - centerY) / centerY) * 15; // Reduced rotation

      card.style.transform = `perspective(500px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-xl transition-transform duration-300 transform-style-preserve-3d shadow-md hover:shadow-lg dark:bg-secondary dark:border dark:border-secondary-foreground"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
