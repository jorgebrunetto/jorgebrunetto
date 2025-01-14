"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { contentSkills } from "@/data/about";
import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../icon";
import { useLanguage } from "../language-provider";
import { TitlePage } from "../title-page";
import { Button } from "../ui/button";

const About = () => {
  const [visibleCards, setVisibleCards] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useLanguage();

  const categories = Array.from(
    new Set(contentSkills.map(skill => skill.category))
  );
  const showMoreCards = () => {
    setVisibleCards(prev => Math.min(prev + 12, contentSkills.length));
  };
  const filteredSkills = selectedCategory
    ? contentSkills.filter(skill => skill.category === selectedCategory)
    : contentSkills;

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
            {categories.map(category => (
              <Badge
                key={category}
                variant={
                  selectedCategory === category ? "default" : "secondary"
                }
                className="text-sm cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
            {selectedCategory && (
              <Badge
                variant="outline"
                className="text-sm cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                Clear filter <Icon name="PiX" className="w-3 h-3 ml-1" />
              </Badge>
            )}
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredSkills.slice(0, visibleCards).map(skill => (
              <motion.div key={skill.name} variants={item}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center relative">
                        <Icon
                          name={skill.icon}
                          className="-mb-2 z-10 animate-bounce"
                          size={28}
                        />

                        <div className="w-5 h-3 rounded-[100%] animate-ping delay-500 absolute dark:bg-white/10 bg-black/10 opacity-75 flex bottom-1"></div>
                        <div className="w-12 h-5 rounded-[100%] bg-muted flex"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 relative">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 text-right absolute right-0 bottom-4">
                        {skill.proficiency}%
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
