/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/layouts/Layout.tsx";

import { SideLeft } from "../components/global/SideLeft.tsx";
import ListItem from "../islands/ListItem.tsx";

interface Articels {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const handler: Handlers<Articels[] | null> = {
  async GET(_, ctx) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const article: Articels[] = await res.json();
    return ctx.render(article);
  },
};

export default function Article({ data }: PageProps<Articels[] | null>) {
  
  if (!data) {
    return <div class={tw`flex justify-center items-center w-full h-auto shadow`}>
      <span class={tw`font-thin text-sm uppercase`}><span class={tw`font-black`}>Articles</span> not found</span>
    </div>;
  }

  return (
    <Layout
      title={`Article`}
      description={`Article site`}
      canonical={`Article`}
      hasFooter={true}
      hasHeader={true}
    >
    <div class={tw`w-full h-auto flex flex-col p-0 mx-auto`}>
      <div class={tw`flex justify-end items-end`}>
        <h1 class={tw`font-black text-6xl md:text-8xl tracking-tighter`}>it's Article</h1>
      </div>
      <div class={tw`flex flex-col w-auto h-auto`}>
        <a href="/" class={tw`hidden md:block w-auto h-auto z-50`}>
          <img class={tw`w-16 h-16 shadow rounded-full`} src="/ikziriv_logo.svg" alt="Ikziriv Logo" />
        </a>
        <div class={tw`flex flex-col justify-center md:justify-start items-start md:items-start w-full h-auto z-50 pl-8 py-8 md:py-0 pl-16 md:pl-16`}>
          <h1 class={tw`font-bold`}>Featured Article</h1>
          <div class={tw`section flex flex-row flex-nowrap space-x-8 my-6 overflow-x-auto w-full h-auto`}>
            {data.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <SideLeft />
      </div>
    </div>
    </Layout>
  );
}