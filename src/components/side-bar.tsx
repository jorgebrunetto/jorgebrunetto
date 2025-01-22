import { ContactBar } from "./contact-bar";
import { Navigation } from "./navigation";
import { TitleBar } from "./title-bar";

export const SideBar = () => {
  return (
    <aside className="bg-transparent md:bg-background md:w-80 w-full md:h-screen fixed md:top-0 md:bottom-auto bottom-0 left-0 p-2 z-50">
      <section className="rounded-xl lg:flex flex-col bg-slate-200 dark:bg-black text-black dark:text-gray-100 h-full">
        <ContactBar />
        <Navigation />
        <TitleBar />
      </section>
    </aside>
  );
};
