/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Layout } from "../components/layouts/Layout.tsx";

import { SideLeft } from "../components/global/SideLeft.tsx";

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="Welcome"
      canonical="/"
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`w-full h-auto flex flex-col p-0 mx-auto`}>
        <div class={tw`flex justify-end items-end`}>
          <h1 class={tw`font-black text-6xl md:text-8xl tracking-tighter`}>it's About</h1>
        </div>
        <div class={tw`flex flex-col w-auto h-auto`}>
        <a href="/" class={tw`hidden md:block w-auto h-auto z-50`}>
          <img class={tw`w-16 h-16 shadow rounded-full`} src="/ikziriv_logo.svg" alt="Ikziriv Logo" />
        </a>
        <div class={tw`flex flex-col justify-center md:justify-start items-start md:items-start w-full h-auto z-50 pl-8 py-8 md:py-0 pl-16 md:pl-16`}>
            <p class={tw`max-w-md my-6`}>
              経験豊富なプログラマーおよびデザイナーであり、テクノロジー業界で働いた実績があります。デザイン、Web、モバイル開発のスキル
            </p>
          </div>
          <SideLeft />
        </div>
      </div>
    </Layout>
  );
}
