/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function SideLeft() {
  return (
    <footer  class={tw`absolute bottom-0 -left-48 md:-left-40 w-full h-screen z-40`}>
      <div class={tw`flex justify-start items-center w-full h-screen px-2 py-2`}>
        <div class={tw`w-auto h-auto -pt-8`}>
            <h1 class={tw`uppercase font-bold text-8xl rotate-90 text-black`}>Ikziriv</h1>
        </div>
      </div>
    </footer>
  );
}