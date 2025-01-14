import { Icon } from "@/components/icon";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/components/pages/blog/${slug}.mdx`);

  return (
    <div
      id={slug}
      className="px-4 md:pl-80 py-12 min-h-screen w-full flex flex-col gap-4"
    >
      <div className="md:container space-y-12">
        <div className="flex items-center gap-2">
          <Icon name="PiArrowLeft" /> Voltar
        </div>
        <Post />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
