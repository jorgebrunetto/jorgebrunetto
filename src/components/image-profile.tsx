import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

interface ImageProfileProps {
  width?: number;
  height?: number;
}

export const ImageProfile = ({
  width = 300,
  height = 300,
}: ImageProfileProps) => {
  const isMobile = useIsMobile();

  return (
    <Image
      src="/images/home/perfil.jpg"
      width={isMobile ? width * 0.7 : width}
      height={isMobile ? height * 0.7 : height}
      alt="Minha imagem de perfil"
      className="rounded-tl-[60%] rounded-tr-[70%] rounded-bl-[70%] rounded-br-[60%]"
    />
  );
};
