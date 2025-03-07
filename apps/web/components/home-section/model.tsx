"use client";

import { motion } from "framer-motion";

function ModelCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e65c25]/10 to-[#ff8f3c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-4 sm:p-6 md:p-8 rounded-xl bg-[#1a1a1a] border border-white/[0.05] shadow-[inset_0px_0px_40px_rgba(230,92,37,0.03)] hover:border-[#e65c25]/30 hover:bg-gradient-to-br hover:from-white/[0.075] hover:to-transparent transition-all duration-500">
        <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] text-white shadow-lg shadow-[#e65c25]/20 group-hover:shadow-[#e65c25]/30 group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/90 group-hover:bg-clip-text transition-all duration-500">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Model() {
  const features = [
    {
      title: "Instant Validation",
      description:
        "Real-time verification of hunting and fishing licenses across all states.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Seamless Integration",
      description:
        "Direct connection with state systems for efficient license processing.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade encryption protecting all transactions and personal data.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mb-6">
            Our Model
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80">
            Revolutionizing the hunting and fishing license industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <ModelCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
