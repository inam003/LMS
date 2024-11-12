import React from "react";

export const CircleChart = ({ progress }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="size-60">
      <circle
        className="text-red-200"
        strokeWidth="12"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="116"
        cy="116"
      />
      <circle
        className="text-green-500"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="116"
        cy="116"
      />
      <text
        className="text-3xl font-bold"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};
