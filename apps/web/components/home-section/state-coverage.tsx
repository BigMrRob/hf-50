import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DigitalStorageCard } from "./digital-storage-card";

const states = [
  {
    name: "Tennessee",
    status: "launching",
    features: [
      "Digital Licenses",
      "Mobile App Integration",
      "Real-time Validation",
    ],
  },
  {
    name: "Southeast Region",
    status: "upcoming",
    features: [
      "Cross-state Licensing",
      "Regional Permits",
      "Unified Dashboard",
    ],
  },
  {
    name: "Nationwide",
    status: "planned",
    features: [
      "50-State Coverage",
      "Federal Integration",
      "Enterprise Solutions",
    ],
  },
];

const complianceFeatures = [
  {
    title: "Automated Verification",
    description:
      "Real-time verification of licenses, permits, and certifications across state lines",
  },
  {
    title: "Requirements Tracking",
    description:
      "Stay informed about age restrictions, training requirements, and equipment regulations",
  },
  {
    title: "Digital Storage",
    description:
      "Securely store and access all your licenses and permits in one digital wallet",
  },
];

export function StateCoverage() {
  return (
    <section className="relative bg-[#1a1a1a] py-12 sm:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#e65c25]/5 mix-blend-screen blur-3xl"></div>
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#e65c25]/5 mix-blend-screen blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <Badge
            variant="outline"
            className="mb-4 bg-[#262626] text-[#e65c25] border-[#e65c25]/20 px-3 py-1 text-xs sm:text-sm"
          >
            Coverage & Compliance
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Nationwide{" "}
            <span className="bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] text-transparent bg-clip-text">
              License Management
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#a3a3a3] max-w-2xl mx-auto px-2">
            From Tennessee to all 50 states, we're building the future of
            outdoor licensing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* State Coverage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-1">
              State Coverage
            </h3>
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-4 sm:p-6 rounded-xl bg-[#262626] border border-[#404040] hover:border-[#e65c25]/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-4">
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-white">
                    {state.name}
                  </h4>
                  <Badge
                    variant="outline"
                    className={`
                      inline-flex w-fit text-xs sm:text-sm
                      ${
                        state.status === "launching"
                          ? "bg-[#e65c25]/10 text-[#e65c25] border-[#e65c25]/30"
                          : ""
                      }
                      ${
                        state.status === "upcoming"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                          : ""
                      }
                      ${
                        state.status === "planned"
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                          : ""
                      }
                    `}
                  >
                    {state.status}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {state.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-[#a3a3a3] text-xs sm:text-sm md:text-base"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-[#e65c25] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Compliance Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 px-1">
              Compliance Features
            </h3>
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {index === 2 ? (
                  <DigitalStorageCard />
                ) : (
                  <div className="relative bg-[#262626] border border-[#404040] hover:border-[#e65c25]/50 transition-all duration-300 rounded-xl p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg md:text-xl font-medium text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-[#a3a3a3] text-xs sm:text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}

            <div className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-[#e65c25] to-[#ff8f4d]">
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-white mb-3 sm:mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-white/90 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                Join our waitlist to be among the first to experience the future
                of outdoor licensing
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-[#e65c25] hover:bg-white/90 text-sm sm:text-base py-4 sm:py-6"
              >
                Join the Waitlist
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
