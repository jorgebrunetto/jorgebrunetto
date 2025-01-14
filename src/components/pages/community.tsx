"use client";

import { communityItemItems } from "@/data/community";
import { CommunityItem } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "../icon";
import { useLanguage } from "../language-provider";
import { PortfolioModal } from "../portfolio-modal";
import { TitlePage } from "../title-page";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const ITEMS_PER_PAGE = 8;

const Community = () => {
  const { t } = useLanguage();

  const [selectedItem, setSelectedItem] = useState<CommunityItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const handleShowMore = () => {
    setDisplayCount(prev =>
      Math.min(prev + ITEMS_PER_PAGE, communityItemItems.length)
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
      id="community"
      className="md:pl-80 py-12 min-h-screen w-full flex flex-col"
    >
      <div className="px-5 md:container space-y-6">
        <TitlePage title="community" />

        <div className="flex flex-col gap-6"></div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {communityItemItems.slice(0, displayCount).map(communityItem => (
            <motion.div key={communityItem.id} variants={item}>
              <Card className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={communityItem.image}
                      alt={communityItem.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSelectedItem(communityItem);
                          setIsModalOpen(true);
                        }}
                      >
                        {t("portViewDetails")}
                        <Icon name="PiCaretRight" />
                      </Button>
                      <Button
                        variant="secondary"
                        className="mt-4"
                        onClick={() => window.open(communityItem.link)}
                      >
                        {t("accessSite")}
                        <Icon name="PiLinkLight" />
                      </Button>
                    </div>
                  </div>
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => {
                      setSelectedItem(communityItem);
                      setIsModalOpen(true);
                    }}
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {communityItem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {communityItem.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {displayCount < communityItemItems.length && (
            <motion.div variants={item}>
              <Card className="cursor-pointer h-full" onClick={handleShowMore}>
                <CardContent className="h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Icon name="PiPlus" />
                    </div>
                    <h3 className="font-semibold text-lg">
                      {t("portMoreProjects")}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {communityItemItems.length - displayCount}{" "}
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

export default Community;
