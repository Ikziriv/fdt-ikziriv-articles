/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/layouts/Layout.tsx";

import { SideLeft } from "../components/global/SideLeft.tsx";

export default function Contact(props: PageProps) {
  return (
    <Layout
      title={`Contact`}
      description={`Contact site`}
      canonical={`Contact`}
      hasFooter={true}
      hasHeader={true}
    >
    <div class={tw`w-full h-auto flex flex-col p-0 mx-auto`}>
      <div class={tw`flex justify-end items-end`}>
        <h1 class={tw`font-black text-6xl md:text-8xl tracking-tighter`}>it's Contact</h1>
      </div>
      <div class={tw`flex flex-col w-auto h-auto`}>
        <a href="/" class={tw`hidden md:block w-auto h-auto z-50`}>
          <img class={tw`w-16 h-16 shadow rounded-full`} src="/ikziriv_logo.svg" alt="Ikziriv Logo" />
        </a>
        <div class={tw`flex justify-center md:justify-start items-center md:items-start w-full h-auto z-50 pl-8 py-8 md:py-0 pl-0 md:pl-16`}>
          <div class={tw`grid grid-cols-2 gap-0 w-full max-w-md h-auto`}>
            <a href="https://www.instagram.com/ikziriv.art" target="_blank" class={tw`col-span-1 flex flex-col -space-y-4 justify-center items-center bg-white border shadow w-full h-40 md:h-32 p-4`}>
              <span class={tw`icon-instagram w-auto h-auto p-4 bg-white shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="16"></circle><rect x="36" y="36" width="184" height="184" rx="48" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><circle cx="180" cy="76" r="12"></circle></svg>
              </span>
            </a>
            <a href="https://www.behance.net/ikziriv" target="_blank"  class={tw`col-span-1 flex flex-col -space-y-4 justify-center items-center bg-white border shadow w-full h-40 md:h-32 p-4`}>
              <span class={tw`icon-behance w-auto h-auto p-4 bg-white shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="168" y1="80" x2="232" y2="80" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M160,152h80a39.9,39.9,0,1,0-11.7,28.3" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M32,124H98a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </span>
            </a>
            <a href="https://dribbble.com/Ikziriv" target="_blank"  class={tw`col-span-1 flex flex-col -space-y-4 justify-center items-center bg-white border shadow w-full h-40 md:h-32 p-4`}>
              <span class={tw`icon-dribbble w-auto h-auto p-4 bg-white shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </span>
            </a>
            <a href="https://github.com/Ikziriv" target="_blank"  class={tw`col-span-1 flex flex-col -space-y-4 justify-center items-center bg-white border shadow w-full h-40 md:h-32 p-4`}>
              <span class={tw`icon-github w-auto h-auto p-4 bg-white shadow-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M84,240a23.9,23.9,0,0,0,24-24V168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M172,240a23.9,23.9,0,0,1-24-24V168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
              </span>
            </a>
          </div>
        </div>
        <SideLeft />
      </div>
    </div>
    </Layout>
  );
}