"use client";

import { Card, CardContent } from "@/components/ui/card";
import { contentSkills } from "@/data/about";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../language-provider";
import { TitlePage } from "../title-page";
import { Button } from "../ui/button";

const About = () => {
  const [visibleCards, setVisibleCards] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useLanguage();

  const categories = Array.from(
    new Set(contentSkills.map((skill) => skill.category))
  );
  const showMoreCards = () => {
    setVisibleCards((prev) => Math.min(prev + 12, contentSkills.length));
  };
  const filteredSkills = selectedCategory
    ? contentSkills.filter((skill) => skill.category === selectedCategory)
    : contentSkills;

  const clearSelection = () => {
    setSelectedCategory(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const transitionProps = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  };

  return (
    <div
      id="about"
      className="px-4 md:pl-80 py-12 min-h-screen w-full flex flex-col"
    >
      <div className="md:container space-y-12">
        <TitlePage title="about" />

        <div className="flex flex-col gap-6 text-center">
          <h3 className="font-normal text-xl">{t("welcomeMessage")}</h3>

          <h5 className="font-medium text-lg mx-auto text-gray-500 dark:text-gray-400 w-full max-w-3xl">
            {t("introText")}
          </h5>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-3 text-center">
            <strong>Skills</strong>
          </h3>

          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            <motion.div
              className="flex flex-wrap gap-3 overflow-visible"
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5,
              }}
            >
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    layout
                    initial={false}
                    animate={{
                      backgroundColor: isSelected
                        ? "#091f0f"
                        : "rgba(39, 39, 42, 0.5)",
                    }}
                    whileHover={{
                      backgroundColor: isSelected
                        ? "#091f0f"
                        : "rgba(39, 39, 42, 0.8)",
                    }}
                    whileTap={{
                      backgroundColor: isSelected
                        ? "#0d2714"
                        : "rgba(39, 39, 42, 0.9)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      mass: 0.5,
                      backgroundColor: { duration: 0.1 },
                    }}
                    className={`
                      inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                      whitespace-nowrap overflow-hidden ring-1 ring-inset
                      ${
                        isSelected
                          ? "text-[#7aff66] ring-[hsla(0,0%,100%,0.12)] "
                          : "dark:text-zinc-400 ring-[hsla(0,0%,100%,0.06)] text-white "
                      }
                    `}
                  >
                    <motion.div
                      className="relative flex items-center"
                      animate={{
                        width: isSelected ? "auto" : "100%",
                        paddingRight: isSelected ? "1.5rem" : "0",
                      }}
                      transition={{
                        ease: [0.175, 0.885, 0.32, 1.275],
                        duration: 0.3,
                      }}
                    >
                      <span>{category}</span>
                      <AnimatePresence>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                              mass: 0.5,
                            }}
                            className="absolute right-0"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#7aff66] flex items-center justify-center"></div>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
          <div>
            <AnimatePresence>
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ ...transitionProps, delay: 0.1 }}
                  className="mt-8 flex justify-center"
                >
                  <button
                    onClick={clearSelection}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    <X />
                    {t("clearSelection")}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 mt-3 lg:grid-cols-3 gap-4"
          >
            {filteredSkills
              .slice(0, visibleCards)
              .map(({ name, icon: Icon, category, proficiency }) => {
                return (
                  <motion.div key={name} variants={item}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-col items-center relative">
                            <Icon
                              className="-mb-2 z-10 animate-bounce"
                              size={28}
                            />

                            <div className="w-5 h-3 rounded-[100%] animate-ping delay-500 absolute dark:bg-white/10 bg-black/10 opacity-75 flex bottom-1"></div>
                            <div className="w-12 h-5 rounded-[100%] bg-muted flex"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {category}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 relative">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${proficiency}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground mt-2 text-right absolute right-0 bottom-4">
                            {proficiency}%
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
          </motion.div>

          {visibleCards < filteredSkills.length && (
            <div className="relative">
              <div className="absolute inset-x-0 bottom-full h-24 bg-gradient-to-t from-background to-transparent "></div>
              <div className="flex justify-center">
                <Button
                  onClick={showMoreCards}
                  className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg mt-6"
                >
                  {t("showMore")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
