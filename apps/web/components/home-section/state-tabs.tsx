"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-[#262626]/50 p-6",
        "border border-white/[0.08] transition-all duration-300",
        "hover:bg-[#262626]/70 hover:border-[#e65c25]/20",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export function StateTabs() {
  const timelineData = [
    {
      title: "2025",
      content: (
        <FeatureCard>
          <p className="text-base font-medium leading-relaxed mb-6 text-white/80">
            Launching our first state partnership with Tennessee, establishing
            core platform features and validating our integration model.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/80">
                  Digital License Validation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/80">
                  Mobile-First Experience
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/80">
                  Real-Time Integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/80">
                  State System Connection
                </span>
              </div>
            </div>
          </div>
        </FeatureCard>
      ),
    },
    {
      title: "2026",
      content: (
        <FeatureCard>
          <p className="text-base font-medium leading-relaxed mb-6 text-white/90">
            Expanding to neighboring states in the Southeast, leveraging our
            proven integration model and building strategic partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Multi-State Management
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Cross-State Validation
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Enhanced Dashboard
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Regional Partnerships
                </span>
              </div>
            </div>
          </div>
        </FeatureCard>
      ),
    },
    {
      title: "2027",
      content: (
        <FeatureCard>
          <p className="text-base font-medium leading-relaxed mb-6 text-white/90">
            Scaling our platform across multiple regions, optimizing processes,
            and enhancing features based on user feedback.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Automated Compliance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Advanced Analytics
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Bulk Processing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Process Optimization
                </span>
              </div>
            </div>
          </div>
        </FeatureCard>
      ),
    },
    {
      title: "2028",
      content: (
        <FeatureCard>
          <p className="text-base font-medium leading-relaxed mb-6 text-white/90">
            Achieving our goal of nationwide coverage, providing a seamless
            licensing experience across all 50 states.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Nationwide Integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  AI Recommendations
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Enterprise Program
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e65c25] to-[#ff8f3c] flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="text-sm font-medium text-white/70">
                  Complete Coverage
                </span>
              </div>
            </div>
          </div>
        </FeatureCard>
      ),
    },
  ];

  return (
    <section className="relative bg-[#1a1a1a] py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#e65c25]/5 mix-blend-screen blur-[128px]"></div>
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#e65c25]/5 mix-blend-screen blur-[128px]"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-[#262626] text-[#e65c25] border-[#e65c25]/20 px-3 py-1 text-xs sm:text-sm"
          >
            Roadmap
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Our Journey to{" "}
            <span className="bg-gradient-to-r from-[#e65c25] to-[#ff8f3c] text-transparent bg-clip-text">
              All 50 States
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80">
            Follow our roadmap as we revolutionize outdoor licensing across
            America
          </p>
        </motion.div>

        <Timeline data={timelineData} />
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
    </section>
  );
}
