"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PortfolioItem } from "@/lib/types";
import { Link } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-provider";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const { t } = useLanguage();
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground">{item.longDescription}</p>

          {item.features && (
            <div>
              <h4 className="font-semibold mb-2">{t("portKeyFeatures")}</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {item.technologies && (
            <div>
              <h4 className="font-semibold mb-2">{t("portTechUsages")}</h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Button
            className="mt-4"
            size="lg"
            onClick={() => window.open(item.link, "_blank")}
          >
            <Link className="mr-2" />
            {t("portViewProjcet")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
