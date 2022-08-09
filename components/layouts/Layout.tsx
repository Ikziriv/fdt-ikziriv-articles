/** @jsx h */
import { h, ComponentChildren } from "preact";

import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Meta } from "./Meta.tsx";

import { SideLeft } from "../global/SideLeft.tsx";

import { tw } from "@twind";

interface LayoutProps {
    children: ComponentChildren;
    title: string;
    description: string;
    canonical: string;
    hasHeader?: boolean;
    hasSideLeft?: boolean;
    hasFooter?: boolean;
  }

export function Layout({
    children,
    title,
    description,
    canonical,
    hasHeader,
    hasSideLeft,
    hasFooter,
  }: LayoutProps) {
    return (
      <div class={tw`w-full h-screen p-4 mx-auto max-w-7xl relative overflow-hidden`}>
        <Meta title={title} description={description} canonical={canonical} />
        {hasHeader && <Header />}
        {hasSideLeft && <SideLeft />}
        <main class={tw`w-full h-auto pt-24`}>{children}</main>
        {hasFooter && <Footer />}
      </div>
    );
  }