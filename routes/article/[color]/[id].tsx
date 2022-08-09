/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Layout } from "../../../components/layouts/Layout.tsx";

import { SideLeft } from "../../../components/global/SideLeft.tsx";

interface ArticleProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const handler: Handlers<ArticleProps | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const post: ArticleProps = await res.json();
    return ctx.render(post);
  },
};

export default function Page(props: PageProps<ArticleProps>) {
  const { id, title, body } = props.data;

  const bgColor = props.params.color;

  if (!props.data) {
    return <div class={tw`flex justify-center items-center w-full h-auto shadow`}>
      <span class={tw`font-thin text-sm uppercase`}><span class={tw`font-black`}>Articles</span> not found</span>
    </div>;
  }

  return (
    <Layout
      title={title}
      description={body}
      canonical={`/post/${id}`}
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`w-full h-auto flex flex-col p-0 mx-auto`}>
        <div class={tw`flex justify-end items-end`}>
          <h1 class={tw`font-black text-6xl md:text-8xl tracking-tighter`}>it's Article</h1>
        </div>
        <div class={tw`flex flex-col w-auto h-auto`}>
          <a href="/" class={tw`w-auto h-auto z-50`}>
            <img class={tw`w-16 h-16 shadow rounded-full`} src="/ikziriv_logo.svg" alt="Ikziriv Logo" />
          </a>
          <div class={tw`w-auto h-auto z-50 pl-16`}>
            <div class={tw`flex justify-end items-end`}>
              <div class={tw`flex justify-center items-center w-auto h-auto py-2 px-8 bg-white hover:bg-gray-100 shadow`}>
                <a href="/article" class={tw`font-bold`}>Back</a>
              </div>
            </div>
            <div class={tw`section flex flex-col space-y-2 my-6 overflow-y-auto w-full h-48`}>
              <div class={tw`h-1 ${"bg-[#" + bgColor + "]"} w-64`} />
              <h2 class={tw`text-2xl font-bold`}>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
          <SideLeft />
        </div>
      </div>
    </Layout>
  );
}