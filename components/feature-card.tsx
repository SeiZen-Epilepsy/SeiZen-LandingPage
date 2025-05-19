"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  hoverEffect?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  hoverEffect,
}: FeatureCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card
        className={`overflow-hidden h-full transition-all duration-300 ${
          hoverEffect ||
          "hover:border-[#35D1C3]/50 hover:shadow-lg hover:shadow-[#35D1C3]/10"
        }`}
      >
        <CardContent className="p-6">
          <motion.div
            className="mb-4"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0F83B6] to-[#35D1C3]">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
