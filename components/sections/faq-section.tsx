"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";

export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="faq"
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 w-full"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-40 left-[15%] w-72 h-72 rounded-full bg-[#35D1C3]/5 blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[25%] w-80 h-80 rounded-full bg-[#0F83B6]/5 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
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
              className="border-[#0F83B6] text-[#35D1C3]"
            >
              Common Questions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#35D1C3] to-[#0F83B6]">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about SeiZen and epilepsy
              monitoring.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            <motion.div variants={itemVariants}>
              <AccordionItem
                value="item-1"
                className="border-b border-[#35D1C3]/20"
              >
                <AccordionTrigger className="text-[#0F83B6] dark:text-[#35D1C3] hover:text-[#35D1C3] dark:hover:text-[#0F83B6]">
                  How does SeiZen detect seizures?
                </AccordionTrigger>
                <AccordionContent>
                  SeiZen uses advanced EEG sensors combined with machine
                  learning algorithms to detect the electrical activity patterns
                  in the brain that indicate a seizure event. Our technology has
                  been trained on thousands of seizure events to recognize the
                  unique signatures of different types of seizures with high
                  accuracy.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AccordionItem
                value="item-2"
                className="border-b border-[#35D1C3]/20"
              >
                <AccordionTrigger className="text-[#0F83B6] dark:text-[#35D1C3] hover:text-[#35D1C3] dark:hover:text-[#0F83B6]">
                  Is SeiZen covered by insurance?
                </AccordionTrigger>
                <AccordionContent>
                  Many insurance providers cover SeiZen as a medical device for
                  epilepsy management. We work directly with insurance companies
                  to verify coverage and handle the paperwork. Contact our
                  support team for assistance with your specific insurance plan.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AccordionItem
                value="item-3"
                className="border-b border-[#35D1C3]/20"
              >
                <AccordionTrigger className="text-[#0F83B6] dark:text-[#35D1C3] hover:text-[#35D1C3] dark:hover:text-[#0F83B6]">
                  How comfortable is the SeiZen device to wear?
                </AccordionTrigger>
                <AccordionContent>
                  SeiZen is designed with comfort as a priority. The sensors are
                  lightweight, discreet, and made from hypoallergenic materials.
                  Most users report forgetting they&apos;re wearing the device
                  after a short adjustment period. The device is also designed
                  to be worn during sleep without disrupting normal sleep
                  patterns.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AccordionItem
                value="item-4"
                className="border-b border-[#35D1C3]/20"
              >
                <AccordionTrigger className="text-[#0F83B6] dark:text-[#35D1C3] hover:text-[#35D1C3] dark:hover:text-[#0F83B6]">
                  Can SeiZen be used by children?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, SeiZen offers pediatric versions of our monitoring
                  solution specifically designed for children of different age
                  groups. The pediatric versions feature child-friendly designs,
                  appropriate sizing, and specialized algorithms calibrated for
                  children&apos;s brain activity patterns.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AccordionItem
                value="item-5"
                className="border-b border-[#35D1C3]/20"
              >
                <AccordionTrigger className="text-[#0F83B6] dark:text-[#35D1C3] hover:text-[#35D1C3] dark:hover:text-[#0F83B6]">
                  How is my data protected?
                </AccordionTrigger>
                <AccordionContent>
                  SeiZen takes data security very seriously. All patient data is
                  encrypted both in transit and at rest using industry-standard
                  encryption protocols. Our platform is fully HIPAA-compliant,
                  and we never share your personal health information without
                  your explicit consent. You have complete control over who can
                  access your monitoring data.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
