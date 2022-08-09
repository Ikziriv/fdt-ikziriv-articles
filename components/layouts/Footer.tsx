/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer  class={tw`fixed inset-x-0 bottom-0 w-full h-auto z-40 border-t`}>
      <div class={tw`flex justify-between items-center w-full h-auto px-8 md:px-16 py-6`}>
        <div class={tw`flex flex-col -space-y-2`}>
          <span class={tw`font-bold text-sm uppercase`}>
            <small>Experiment</small>
          </span>
          <span class={tw`font-medium text-xs uppercase tracking-widest`}>
            <small>Ikziriv Design & Development</small>
          </span>
        </div>
        <span class={tw`font-medium`}>
          <div class={tw`flex flex-row space-x-2`}>
            <div class={tw`bg-gray-100 w-6 h-6 rounded-full shadow`}></div>
            <div class={tw`bg-gray-200 w-6 h-6 shadow`}></div>
            <div class={tw`bg-gray-300 w-6 h-6 shadow`}></div>
          </div>
        </span>
      </div>
    </footer>
  );
}