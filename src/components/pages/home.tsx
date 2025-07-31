"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { PiDownloadSimple } from "react-icons/pi";
import { AnimatedText } from "../animated-text";
import { ContactForm } from "../contact-form";
import { ImageProfile } from "../image-profile";
import { useLanguage } from "../language-provider";
import { Particle } from "../particle";
import { SocialBar } from "../social-bar";
import { Button } from "../ui/button";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div
      id="home"
      className="px-4 md:pl-80 min-h-screen w-full flex flex-col items-center text-center gap-5 justify-center"
    >
      <Particle />
      <ImageProfile />
      {/* <div className="absolute z-0 inset-0 bg-gradient-to-br dark:from-indigo-500/[0.05] via-transparent dark:to-green-500/[0.05] blur-3xl" /> */}

      <h1 className="font-semibold text-xl text-gray-500 dark:text-white">
        {t("welcomeMessage")}
      </h1>

      <AnimatedText />

      <h2 className="font-medium text-base text-gray-500 dark:text-gray-400 w-full max-w-md">
        {t("smallIntro")}
      </h2>

      <SocialBar />

      <div className="flex gap-2 z-10">
        <Link
          className="hover:animate-jump"
          href={
            theme === "light"
              ? "/curriculum-jorgebrunetto-l.pdf"
              : "/curriculum-jorgebrunetto-d.pdf"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="mt-4" variant="download" size="lg">
            <PiDownloadSimple /> Curriculum
          </Button>
        </Link>
        <ContactForm />
      </div>
    </div>
  );
};

export default Hero;
