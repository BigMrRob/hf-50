"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative mx-auto max-w-4xl">
      {data.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: index * 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          key={index}
          className="relative mb-16 last:mb-0"
        >
          {/* Content */}
          <motion.div
            className="relative rounded-xl overflow-hidden bg-[#262626]/50 border border-white/[0.08] hover:border-[#e65c25]/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Vertical accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e65c25] to-[#ff8f3c]" />

            {/* Card content */}
            <div className="pl-8 pr-6 py-6">
              <motion.h3
                className="text-3xl font-bold text-white mb-6 flex items-center gap-4"
                transition={{ duration: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#e65c25] to-[#ff8f3c] bg-clip-text text-transparent">
                  {item.title}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#e65c25]/20 to-transparent" />
              </motion.h3>

              <div className="relative">
                <div className="relative transition-all duration-300">
                  {item.content}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
