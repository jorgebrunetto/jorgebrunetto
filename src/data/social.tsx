import { PiCodepenLogoFill, PiFacebookLogoFill, PiFigmaLogoFill, PiGithubLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill, PiWhatsappLogoFill } from "react-icons/pi";


export const socialBarContent = [
  {
    name: "whatsapp",
    icon: <PiWhatsappLogoFill size={24} className="text-whatsapp" />,
    href: "https://wa.me/5515981376495?text=Conheci%20seu%20trabalho%20no%20site",
  },
  {
    name: "LinkedIn",
    icon: <PiLinkedinLogoFill size={24} className="text-linkedin" />,
    href: "https://linkedin.com/in/jorgebrunetto",
  },
  {
    name: "Instagram",
    icon: <PiInstagramLogoFill size={24} className="text-instagram"/>,
    href: "https://instagram.com/jorgebrunetto",
  },
  {
    name: "Facebook",
    icon: <PiFacebookLogoFill size={24} className="text-facebook" />,
    href: "https://facebook.com/jorgebrunetto",
  },
  {
    name: "GitHub",
    icon: <PiGithubLogoFill size={24} className="text-foreground" />,
    href: "https://github.com/jorgebrunetto",
  },
  {
    name: "CodePen",
    icon: <PiCodepenLogoFill size={24} className="text-foreground"/>,
    href: "https://codepen.com/jorgebrunetto",
  },
  {
    name: "Figma",
    icon: <PiFigmaLogoFill size={24} className="text-figma" />,
    href: "https://figma.com/@jorgebrunetto",
  },
];
