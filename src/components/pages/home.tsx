"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "../animated-text";
import { useLanguage } from "../language-provider";
import { SocialBar } from "../social-bar";
import { Button } from "../ui/button";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div
      id="home"
      className="px-4 md:pl-80 min-h-screen w-full flex flex-col items-center text-center gap-4 justify-center"
    >
      <Image
        src="/images/home/perfil.jpg"
        height={300}
        width={300}
        alt="Minha imagem de perfil"
        className="rounded-tl-[60%] rounded-tr-[70%] rounded-bl-[70%] rounded-br-[60%]"
      />

      <h5 className="font-semibold text-xl text-gray-500 dark:text-white">
        {t("welcomeMessage")}
      </h5>

      <AnimatedText />

      <h5 className="font-medium text-base text-gray-500 dark:text-gray-400 w-full max-w-md">
        {t("smallIntro")}
      </h5>

      <SocialBar />

      <div className="flex gap-2">
        <Link
          className="hover:animate-jump"
          href="https://wa.me/5515981376495?text=Conheci%20seu%20trabalho%20no%20site"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="mt-4" variant="download" size="lg">
            Whatsapp
          </Button>
        </Link>
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
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
