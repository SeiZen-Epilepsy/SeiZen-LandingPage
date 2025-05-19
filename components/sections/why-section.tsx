"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function WhySection() {
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
      id="why"
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 w-full"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-40 right-[20%] w-72 h-72 rounded-full bg-[#35D1C3]/5 blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-[#0F83B6]/5 blur-3xl"
          animate={{
            y: [0, 70, 0],
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <Badge
              variant="outline"
              className="border-[#0F83B6] text-[#35D1C3]"
            >
              Unmatched Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#35D1C3] to-[#0F83B6]">
              Why SeiZen?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              SeiZen offers unique advantages that set it apart from traditional
              epilepsy monitoring solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Bento Grid for Why SeiZen */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="md:col-span-8">
            <Card className="overflow-hidden border-[#35D1C3]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#35D1C3]/10">
              <CardContent className="p-0">
                <Tabs defaultValue="accuracy" className="w-full">
                  <div className="p-6">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-slate-800">
                      <TabsTrigger
                        value="accuracy"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#35D1C3] data-[state=active]:to-[#0F83B6] data-[state=active]:text-white"
                      >
                        Accuracy
                      </TabsTrigger>
                      <TabsTrigger
                        value="comfort"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#35D1C3] data-[state=active]:to-[#0F83B6] data-[state=active]:text-white"
                      >
                        Comfort
                      </TabsTrigger>
                      <TabsTrigger
                        value="insights"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#35D1C3] data-[state=active]:to-[#0F83B6] data-[state=active]:text-white"
                      >
                        Insights
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <AnimatePresence mode="wait">
                    <TabsContent
                      key="accuracy-tab"
                      value="accuracy"
                      className="p-6 pt-0"
                    >
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold text-[#0F83B6] dark:text-[#35D1C3]">
                          Superior Detection Accuracy
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Our proprietary algorithms achieve 95% accuracy in
                          seizure detection, significantly higher than industry
                          standards, reducing false alarms and missed events.
                        </p>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={`accuracy-star-${i}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.1 }}
                            >
                              <Star className="h-5 w-5 fill-current text-[#35D1C3]" />
                            </motion.div>
                          ))}
                          <span className="ml-2 text-sm text-gray-500">
                            95% accuracy rate
                          </span>
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent
                      key="comfort-tab"
                      value="comfort"
                      className="p-6 pt-0"
                    >
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold text-[#0F83B6] dark:text-[#35D1C3]">
                          Designed for Everyday Life
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Lightweight, discreet wearable sensors that can be
                          comfortably worn throughout the day and night,
                          allowing patients to maintain their normal lifestyle.
                        </p>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={`comfort-star-${i}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.1 }}
                            >
                              <Star className="h-5 w-5 fill-current text-[#35D1C3]" />
                            </motion.div>
                          ))}
                          <span className="ml-2 text-sm text-gray-500">
                            User comfort rating
                          </span>
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent
                      key="insights-tab"
                      value="insights"
                      className="p-6 pt-0"
                    >
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold text-[#0F83B6] dark:text-[#35D1C3]">
                          Actionable Insights
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Comprehensive analytics dashboard that provides
                          valuable insights into seizure patterns, triggers, and
                          treatment effectiveness for better clinical
                          decision-making.
                        </p>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={`insights-star-${i}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.1 }}
                            >
                              <Star className="h-5 w-5 fill-current text-[#35D1C3]" />
                            </motion.div>
                          ))}
                          <span className="ml-2 text-sm text-gray-500">
                            Data quality rating
                          </span>
                        </div>
                      </motion.div>
                    </TabsContent>
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-4 md:row-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-[#35D1C3] to-[#0F83B6] text-white border-none transition-all duration-300 hover:shadow-xl hover:shadow-[#35D1C3]/20">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <Heart className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Improved Quality of Life
                  </h3>
                  <p className="mb-6">
                    SeiZen users report a 78% improvement in quality of life due
                    to reduced anxiety, better sleep, and increased
                    independence.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="secondary"
                    className="mt-4 w-full bg-white text-[#0F83B6] hover:bg-gray-100"
                  >
                    Read Success Stories
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4">
            <Card className="overflow-hidden border-[#0F83B6]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0F83B6]/10 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#35D1C3] dark:text-[#35D1C3]">
                  Remote Monitoring
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Allows caregivers and healthcare providers to monitor patients
                  remotely, providing peace of mind and reducing hospital
                  visits.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4">
            <Card className="overflow-hidden border-[#35D1C3]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#35D1C3]/10 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0F83B6] dark:text-[#0F83B6]">
                  Medication Management
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Integrated medication tracking and reminders to ensure
                  adherence to treatment plans and optimize medication
                  effectiveness.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
