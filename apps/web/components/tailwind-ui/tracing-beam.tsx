"use client";

import React, { useEffect, useRef, useState } from "react";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className = "" }: TracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beamPosition, setBeamPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let rafId: number;
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const delta = scrollTop - lastScrollTop;
      lastScrollTop = scrollTop;

      // Update beam position based on scroll
      setBeamPosition((prev) => ({
        x: prev.x,
        y: prev.y + delta,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top + window.scrollY;

      // Smooth animation
      const animate = () => {
        setBeamPosition((prev) => ({
          x: prev.x + (x - prev.x) * 0.1,
          y: prev.y + (y - prev.y) * 0.1,
        }));
        rafId = requestAnimationFrame(animate);
      };
      animate();
    };

    window.addEventListener("scroll", handleScroll);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#e65c25] to-transparent"
        style={{
          transform: `translate(${beamPosition.x}px, 0)`,
          opacity: 0.4,
        }}
      />
      <div
        className="absolute left-0 top-0 w-[500px] h-px bg-gradient-to-r from-transparent via-[#e65c25] to-transparent"
        style={{
          transform: `translate(0, ${beamPosition.y}px)`,
          opacity: 0.2,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
