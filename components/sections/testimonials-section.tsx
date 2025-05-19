"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { motion, useInView } from "framer-motion";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="testimonials"
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden w-full"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[30%] w-80 h-80 rounded-full bg-[#35D1C3]/5 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-[20%] w-96 h-96 rounded-full bg-[#0F83B6]/5 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-[#35D1C3] text-[#0F83B6]"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#0F83B6] to-[#35D1C3]">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from patients, caregivers, and healthcare professionals who
              have experienced the difference with SeiZen.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
}
