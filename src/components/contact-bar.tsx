import { ImageProfile } from "./image-profile";

export const ContactBar = () => {
  return (
    <div className="hidden md:flex flex-col border-b p-5 border-background">
      <div className="flex space-x-4 items-center">
        <ImageProfile width={50} height={50} />
        <div className="flex flex-col">
          <h2 className="font-semibold">Jorge Brunetto</h2>
          <a
            className="text-black dark:text-muted-foreground hover:animate-jump"
            href="mailto:jorgebrunetto@hotmail.com"
            rel="noopener noreferrer"
          >
            jorgebrunetto@hotmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
