
import React, { useEffect, useState } from "react";
// const CircularProgress = ({ size, strokeWidth, percentage, color }) => {
  // const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   setProgress(percentage);
  // }, [percentage]);
  import { useInView } from "react-intersection-observer";

  const CircularProgress = ({ size, strokeWidth, percentage, color }) => {
    const [progress, setProgress] = useState(0);
    const [ref, inView] = useInView({ threshold: 0 });
  
    useEffect(() => {
      if (inView) {
        setProgress(percentage);
      }
      else{
        setProgress(0);
      }
    }, [inView, percentage]);
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <>
    <div ref= {ref}>

    <svg width={size} height={size} viewBox={viewBox}>
      <circle
      fill="none"
      stroke="#ccc"
      cx={size * 0.5}
      cy={size / 2}
      r={radius}
      strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{ transition: "all ease 4s" }}
        />
      <text
        fill="black"
        fontSize="20px"
        x="50%"
        y="40%"
        dy="20px"
        textAnchor="middle"
        >
        {`${percentage}%`}
      </text>
    </svg>
          </div>
        </>
  );
};

export default CircularProgress;
