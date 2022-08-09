/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";
import { Layout } from "../components/layouts/Layout.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout
      title={`404 not found: ${url.pathname}`}
      description={`404 not found: ${url.pathname}`}
      canonical={""}
      hasFooter={true}
      hasHeader={true}
    >
        <div class={tw`w-full h-auto flex flex-col p-0 mx-auto`}>
            <div class={tw`flex justify-end items-end`}>
                <h1 class={tw`font-black text-6xl md:text-8xl tracking-tighter`}>404 Error.</h1>
            </div>
            <div class={tw`flex flex-col w-auto h-auto`}>
                <div class={tw`w-auto h-auto z-50`}>
                <img class={tw`w-16 h-16 shadow rounded-full`} src="/ikziriv_logo.svg" alt="Ikziriv Logo" />
                </div>
                <div class={tw`w-auto h-auto z-50 pl-16`}>
                <div class={tw`flex flex-col -space-y-2 my-6 overflow-x-auto w-full h-auto`}>
                    <h2 class={tw`text-2xl font-bold`}>ERROR!</h2>
                    <p>404 not found: {url.pathname}</p>
                </div>
                </div>
            </div>
        </div>
    </Layout>
  );
}