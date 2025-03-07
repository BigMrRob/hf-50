"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.2, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export function ContactForm() {
  return (
    <section
      id="contact"
      className="relative bg-[#1a1a1a] py-16 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#e65c25]/5 mix-blend-screen blur-[128px]"
        ></motion.div>
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#e65c25]/5 mix-blend-screen blur-[128px]"
        ></motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 min-h-[calc(100vh-6rem)] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center pt-8"
          >
            <motion.div variants={itemVariants} className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-[#262626] text-[#e65c25] ring-1 ring-inset ring-[#e65c25]/20 mb-6"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e65c25] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e65c25]"></span>
                </span>
                Early Access
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the Future of
                <span className="bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] text-transparent bg-clip-text">
                  {" "}
                  Outdoor Licensing
                </span>
              </h2>
              <p className="text-lg text-[#a3a3a3] mb-8 leading-relaxed">
                Be among the first to experience our revolutionary platform.
                Sign up now and get exclusive early access when we launch in
                your state.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3 text-[#a3a3a3] group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center group-hover:bg-[#e65c25]/10 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#e65c25]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-[#e65c25] transition-colors duration-300">
                      Instant Digital Access
                    </h3>
                    <p className="text-sm">
                      Get your licenses instantly, right on your phone
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-[#a3a3a3] group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center group-hover:bg-[#e65c25]/10 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#e65c25]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-[#e65c25] transition-colors duration-300">
                      Secure & Compliant
                    </h3>
                    <p className="text-sm">
                      Enterprise-grade security for all transactions
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-[#a3a3a3] group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#262626] flex items-center justify-center group-hover:bg-[#e65c25]/10 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[#e65c25]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-[#e65c25] transition-colors duration-300">
                      Multi-State Support
                    </h3>
                    <p className="text-sm">
                      One platform for all your outdoor adventures
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center pt-16"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl border border-[#333333] bg-[#262626]/80 backdrop-blur-xl p-8 md:p-10 hover:border-[#404040] transition-all duration-300 group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e65c25]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Form Content */}
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Get Early Access
                  </h3>
                  <p className="text-[#a3a3a3]">
                    Join our waitlist and be first in line
                  </p>
                </div>
                <WaitlistForm />
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center justify-center gap-6 text-sm text-[#a3a3a3]"
            >
              <div className="flex items-center gap-2 group">
                <svg
                  className="w-4 h-4 text-[#e65c25] group-hover:text-[#ff8f4d] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Secure
                </span>
              </div>
              <div className="w-px h-4 bg-[#333333]"></div>
              <div className="flex items-center gap-2 group">
                <svg
                  className="w-4 h-4 text-[#e65c25] group-hover:text-[#ff8f4d] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Private
                </span>
              </div>
              <div className="w-px h-4 bg-[#333333]"></div>
              <div className="flex items-center gap-2 group">
                <svg
                  className="w-4 h-4 text-[#e65c25] group-hover:text-[#ff8f4d] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="group-hover:text-white transition-colors duration-300">
                  Fast
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
    </section>
  );
}
