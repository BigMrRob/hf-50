import React from "react";
import { Icon, CardPattern } from "../ui/evervault-card";
import { useMotionValue, motion } from "framer-motion";
import { useState, useEffect } from "react";

export function DigitalStorageCard() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div className="relative w-full">
      <div
        onMouseMove={onMouseMove}
        className="group/card border border-[#404040] hover:border-[#e65c25]/50 transition-all duration-300 rounded-xl p-4 sm:p-6 relative overflow-hidden"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#e65c25]" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#e65c25]" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#e65c25]" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#e65c25]" />

        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="relative z-10">
          <h4 className="text-base sm:text-lg md:text-xl font-medium text-white mb-2">
            Digital Storage
          </h4>
          <p className="text-[#a3a3a3] text-xs sm:text-sm md:text-base">
            Securely store and access all your licenses and permits in one
            digital wallet
          </p>
        </div>
      </div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
