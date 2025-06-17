// components/BinaryCodeBackground.js
import React from 'react';

export const BinaryCodeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/000/0F0?text=BINARY_CODE_VIDEO')] bg-cover bg-center animate-fade-in-slow"></div>
    </div>
  );
};
