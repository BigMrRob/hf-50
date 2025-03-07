"use client";

import { useEffect, useRef } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function SpotLight({ className = "", fill = "#fff" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      mouseX.current = e.clientX - rect.left;
      mouseY.current = e.clientY - rect.top;
      divRef.current.style.setProperty("--mouse-x", `${mouseX.current}px`);
      divRef.current.style.setProperty("--mouse-y", `${mouseY.current}px`);
    };

    const div = divRef.current;
    if (div) {
      div.addEventListener("mousemove", handleMouseMove);
      return () => div.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={divRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${fill}, transparent 40%)`,
        }}
      />
    </div>
  );
}
