"use client";

import { useEffect, useRef } from "react";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className = "" }: BackgroundBeamsProps) {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const beams = beamsRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animate = () => {
      if (!beams) return;

      // Smooth follow
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * 0.1;
      currentY += dy * 0.1;

      const gradientString = `radial-gradient(circle at ${currentX}px ${currentY}px, var(--tw-gradient-from) 0%, transparent 70%)`;
      beams.style.backgroundImage = gradientString;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={beamsRef}
      className={`absolute inset-0 opacity-30 bg-gradient-to-r ${className}`}
      style={{
        backgroundSize: "200% 200%",
      }}
    />
  );
}
