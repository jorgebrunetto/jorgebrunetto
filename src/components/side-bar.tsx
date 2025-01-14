import { ContactBar } from "./contact-bar";
import { Navigation } from "./navigation";
import { TitleBar } from "./title-bar";

export const SideBar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-80 h-screen fixed top-0 left-0 bg-slate-200 dark:bg-black text-black dark:text-gray-100">
      <ContactBar />
      <Navigation />
      <TitleBar />
    </aside>
  );
};
