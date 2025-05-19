"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of Epilepsy Patient",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "SeiZen has completely transformed our lives. Before, we lived in constant fear of my daughter's seizures, especially at night. Now, we can all sleep peacefully knowing we'll be alerted if anything happens. The data insights have also helped her neurologist optimize her medication.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Neurologist",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As a neurologist specializing in epilepsy, I've recommended SeiZen to dozens of my patients. The quality of data it provides is exceptional and has significantly improved my ability to make informed treatment decisions. The reduction in hospital visits alone makes it invaluable.",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Epilepsy Patient",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Living with epilepsy for 15 years, I've tried many monitoring solutions, but SeiZen is in a league of its own. It's comfortable enough to wear all day, the app is intuitive, and the peace of mind is priceless. I've regained my independence and confidence.",
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    role: "Caregiver",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The remote monitoring feature of SeiZen has been a game-changer for me as a caregiver. I can check on my brother's status anytime, from anywhere. The detailed seizure logs and medication tracking have made managing his care so much more organized and effective.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const indices = [];
    for (let i = 0; i < itemsPerView; i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    setVisibleTestimonials(indices);
  }, [currentIndex, itemsPerView]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            className="flex gap-4 w-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleTestimonials.map((index) => (
              <motion.div
                key={testimonials[index].id}
                className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-[#35D1C3]/20 hover:border-[#0F83B6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#35D1C3]/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={
                              testimonials[index].avatar || "/placeholder.svg"
                            }
                            alt={testimonials[index].name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-[#35D1C3] to-[#0F83B6] text-white">
                            {testimonials[index].name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-[#0F83B6] dark:text-[#35D1C3]">
                            {testimonials[index].name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonials[index].role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        &quot;{testimonials[index].content}&quot;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fixed navigation buttons with proper positioning */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none flex items-center justify-center transform-gpu"
          aria-label="Previous testimonial"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ transformOrigin: "center" }}
          initial={{ scale: 1 }}
        >
          <ChevronLeft className="h-5 w-5 text-[#0F83B6] dark:text-[#35D1C3]" />
        </motion.button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none flex items-center justify-center transform-gpu"
          aria-label="Next testimonial"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ transformOrigin: "center" }}
          initial={{ scale: 1 }}
        >
          <ChevronRight className="h-5 w-5 text-[#0F83B6] dark:text-[#35D1C3]" />
        </motion.button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              visibleTestimonials.includes(index)
                ? "bg-gradient-to-r from-[#35D1C3] to-[#0F83B6] scale-125"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
