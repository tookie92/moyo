import React from 'react';

export function ChartRadialText() {
  const percentage = 83;
  const radius = 90;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center h-full w-full">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Cercle de fond gris */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Cercle violet de progression */}
        <circle
          stroke="hsl(270, 100%, 75%)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Texte du pourcentage */}
        <text
          x="50%"
          y="50%"
          className="transform rotate-90"
          style={{ transformOrigin: 'center' }}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#E74C3C"
          fontSize="48"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default ChartRadialText;