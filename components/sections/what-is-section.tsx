"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Shield, BrainCircuit, Activity } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import FeatureCard from "@/components/feature-card";

export default function WhatIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="what"
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden w-full"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#35D1C3]/5 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-40 right-[15%] w-80 h-80 rounded-full bg-[#0F83B6]/5 blur-3xl"
            animate={{
              y: [0, -60, 0],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <Badge
              variant="outline"
              className="border-[#35D1C3] text-[#0F83B6]"
            >
              Innovative Technology
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#0F83B6] to-[#35D1C3]">
              What is SeiZen?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              SeiZen is a comprehensive epilepsy monitoring solution that
              combines wearable technology with AI-powered analytics to provide
              continuous seizure detection and management.
            </p>
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Feature */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2"
          >
            <Card className="overflow-hidden h-full bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border-[#35D1C3]/20 dark:border-[#35D1C3]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#35D1C3]/10">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0F83B6] dark:text-[#35D1C3]">
                    Real-Time Seizure Detection
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Our advanced AI algorithms analyze brain activity patterns
                    to detect seizure events with high accuracy, providing
                    immediate alerts to caregivers and medical professionals.
                  </p>
                </div>
                <motion.div
                  className="relative h-[200px] w-full mt-4 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#35D1C3]/20 to-[#0F83B6]/20 z-10 mix-blend-overlay" />
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Real-Time Monitoring"
                    fill
                    className="object-cover rounded-lg transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Activity className="h-10 w-10 text-[#35D1C3]" />}
              title="Physiology Monitoring"
              description="Tracks vital signs such as heart rate and SpO₂ using advanced sensors for comprehensive health monitoring."
              hoverEffect="hover:border-[#35D1C3]/50 hover:shadow-lg hover:shadow-[#35D1C3]/10"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-[#0F83B6]" />}
              title="24/7 Monitoring"
              description="Continuous monitoring that works around the clock, even during sleep."
              hoverEffect="hover:border-[#0F83B6]/50 hover:shadow-lg hover:shadow-[#0F83B6]/10"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<BrainCircuit className="h-10 w-10 text-[#35D1C3]" />}
              title="AI Powered Analytics"
              description="Utilizes machine learning algorithms to analyze data and improve detection accuracy over time."
              hoverEffect="hover:border-[#35D1C3]/50 hover:shadow-lg hover:shadow-[#35D1C3]/10"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-[#0F83B6]" />}
              title="Instant Alerts"
              description="Immediate notifications sent to designated caregivers and medical professionals."
              hoverEffect="hover:border-[#0F83B6]/50 hover:shadow-lg hover:shadow-[#0F83B6]/10"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-[#35D1C3]" />}
              title="Data Security"
              description="HIPAA-compliant platform with end-to-end encryption for all patient data."
              hoverEffect="hover:border-[#35D1C3]/50 hover:shadow-lg hover:shadow-[#35D1C3]/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
