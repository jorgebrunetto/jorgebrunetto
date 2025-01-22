import Image from "next/image";

export const ContactBar = () => {
  const contactInfo = {
    email: "jorgebrunetto@hotmail.com",
  };

  return (
    <div className="hidden md:flex flex-col border-b p-5 border-background">
      <div className="flex space-x-4 items-center">
        <Image
          src="/images/home/perfil.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="border rounded-full flex"
        />
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
