"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-20 md:pt-24 lg:pt-32 overflow-hidden min-h-[90vh] flex items-center w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#35D1C3]/20 to-[#0F83B6]/20 dark:from-slate-950 dark:to-slate-900 -z-10" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#35D1C3]/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#0F83B6]/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
              <Badge className="inline-flex bg-gradient-to-r from-[#35D1C3] to-[#0F83B6] text-white hover:from-[#35D1C3] hover:to-[#0F83B6]">
                Continuous Epilepsy Monitoring
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#0F83B6] to-[#35D1C3] dark:from-[#35D1C3] dark:to-[#0F83B6]">
                Redefining Epilepsy Care with SeiZen
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Advanced, non-invasive monitoring solution that provides
                real-time seizure detection and alerts for people living with
                epilepsy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#35D1C3] to-[#0F83B6] hover:from-[#2bb3a6] hover:to-[#0d6f9a] text-white transition-all duration-300 transform hover:scale-105"
              >
                Download <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#35D1C3]/20 to-[#0F83B6]/20 rounded-full blur-3xl animate-pulse" />
              <Image
                src="/SeiZen-Product.svg"
                alt="SeiZen Device"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
