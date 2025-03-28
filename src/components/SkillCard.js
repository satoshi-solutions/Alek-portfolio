import React from 'react';

const SkillCard = ({ skill }) => (
  <div className="relative bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-gray-850 to-gray-900 p-6 rounded-lg shadow-lg text-white text-lg">
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        rx="8"
        strokeDasharray="20, 300"
        strokeDashoffset="0"
        className="animate-border-flow"
      />
    </svg>
    {skill}
  </div>
);

export default SkillCard;