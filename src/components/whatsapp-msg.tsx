"use client";

import Link from "next/link";
import { PiWhatsappLogo } from "react-icons/pi";

export const WhatsappMsg = () => {
  return (
    <Link
      className="hover:animate-jump fixed bottom-24 right-4 cursor-pointer bg-background shadow-lg shadow-neutral-200 dark:shadow-neutral-700 p-2 rounded-full text-whatsapp"
      href="https://wa.me/5515981376495?text=Conheci%20seu%20trabalho%20no%20site"
      rel="noopener noreferrer"
      target="_blank"
    >
      <PiWhatsappLogo size={30} />
    </Link>
  );
};
