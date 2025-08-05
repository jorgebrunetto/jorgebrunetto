import { socialBarContent } from "@/data/social";

export const SocialBar = () => {
  return (
    <div className="flex justify-around mt-6 text-gray-500 dark:text-gray-400 divide-x z-10">
      {socialBarContent.map(item => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-wiggle flex items-center justify-center py-2 md:py-3 px-2 md:px-4 hover:dark:text-white  dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
