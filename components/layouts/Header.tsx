/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header class={tw`fixed inset-x-0 top-0 w-full h-auto z-50 bg-transparent border-b py-2`}>
      <div class={tw`flex flex-row justify-between items-center w-auto h-32 md:h-auto px-4 md:px-16 py-2`}>
        <a href="/" class={tw`sm:block md:hidden w-auto h-auto z-50`}>
          <img class={tw`w-16 h-16 shadow rounded-full`} src="/ikziriv_logo.svg" alt="Ikziriv Logo" />
        </a>
        <nav class={tw`flex flex-row md:flex-col w-auto h-auto py-4 flex space-x-3 md:space-x-0 space-y-0 pr-4 md:pr-0`}>
          <a class={tw`font-black text-sm`} href="/">Home</a>
          <a class={tw`font-thin text-sm`} href="/article">Article</a>
          <a class={tw`font-thin text-sm`} href="/contact">Contact</a>
          <a class={tw`font-thin text-sm`} href="https://github.com/Ikziriv/fresh-fetch-article" target="_blank">
            Github
          </a>
        </nav>
      </div>
    </header>
  );
}