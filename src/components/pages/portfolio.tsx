"use client";

import { portfolioItems } from "@/data/portfolio";
import { PortfolioItem } from "@/lib/types";
import { motion } from "framer-motion";
import { ChevronRight, Link, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../language-provider";
import { PortfolioModal } from "../portfolio-modal";
import { TitlePage } from "../title-page";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const ITEMS_PER_PAGE = 8;

const Portfolio = () => {
  const { t } = useLanguage();

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const handleShowMore = () => {
    setDisplayCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, portfolioItems.length)
    );
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

  return (
    <div
      id="portfolio"
      className="md:pl-80 py-12 min-h-screen w-full flex flex-col"
    >
      <div className="px-5 md:container space-y-6">
        <TitlePage title="portfolio" />

        <div className="flex flex-col gap-6"></div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.slice(0, displayCount).map((portfolioItem) => (
            <motion.div key={portfolioItem.id} variants={item}>
              <Card className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={portfolioItem.image}
                      alt={portfolioItem.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center flex flex-col">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSelectedItem(portfolioItem);
                          setIsModalOpen(true);
                        }}
                      >
                        {t("portViewDetails")}
                        <ChevronRight />
                      </Button>
                      <Button
                        variant="secondary"
                        className="mt-4"
                        onClick={() => window.open(portfolioItem.link)}
                      >
                        {t("accessSite")}
                        <Link />
                      </Button>
                    </div>
                  </div>
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => {
                      setSelectedItem(portfolioItem);
                      setIsModalOpen(true);
                    }}
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {portfolioItem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {portfolioItem.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {displayCount < portfolioItems.length && (
            <motion.div variants={item}>
              <Card className="cursor-pointer h-full" onClick={handleShowMore}>
                <CardContent className="h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Plus />
                    </div>
                    <h3 className="font-semibold text-lg">
                      {t("portMoreProjects")}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {portfolioItems.length - displayCount}{" "}
                      {t("portProjectsAvailable")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        <PortfolioModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedItem(null);
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
