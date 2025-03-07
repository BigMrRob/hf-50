"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Smart License Recommendations",
    description:
      "Get personalized license suggestions based on your activity history, location, and season",
    icon: (
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Location Intelligence",
    description:
      "Discover prime hunting and fishing spots with AI-powered location recommendations",
    icon: (
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Compliance Assistant",
    description:
      "Stay compliant with automated tracking of certifications, requirements, and restrictions",
    icon: (
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
    ),
  },
  {
    title: "Smart Timing",
    description:
      "Never miss an opportunity with AI-powered alerts for season openings and license renewals",
    icon: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function Features() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create wave geometry
    const geometry = new THREE.PlaneGeometry(15, 15, 100, 100);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#e65c25") },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          vUv = uv;
          
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          float elevation = sin(modelPosition.x * 2.0 + uTime * 0.5) * 
                           sin(modelPosition.y * 2.0 + uTime * 0.5) * 0.2;
          
          modelPosition.z += elevation;
          
          vElevation = elevation;
          
          gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vElevation;
        
        void main() {
          float alpha = (vElevation + 0.2) * 0.2;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI * 0.5;
    waves.position.y = -2;
    scene.add(waves);

    camera.position.z = 5;

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative bg-[#1a1a1a] py-12 sm:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#e65c25]/5 mix-blend-screen blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#e65c25]/5 mix-blend-screen blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <Badge
            variant="outline"
            className="mb-4 bg-[#262626] text-[#e65c25] border-[#e65c25]/20 px-3 py-1 text-xs sm:text-sm"
          >
            AI-Powered Features
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Intelligent{" "}
            <span className="bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] text-transparent bg-clip-text">
              License Management
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#a3a3a3] max-w-2xl mx-auto px-2">
            Our AI-powered platform streamlines your outdoor licensing
            experience with smart recommendations and automated compliance
            tracking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#262626] border-[#404040] hover:border-[#e65c25]/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-start sm:items-center gap-4 space-y-0 pb-2">
                  <div className="p-2 rounded-xl bg-[#1a1a1a] border border-[#404040] shrink-0">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-base sm:text-lg md:text-xl leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#a3a3a3] text-xs sm:text-sm md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
