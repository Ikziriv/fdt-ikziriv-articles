import {  h, ComponentChildren } from "preact";

export interface LayoutProps {
    children: ComponentChildren;
    title: string;
    description: string;
    canonical: string;
    hasHeader?: boolean;
    hasFooter?: boolean;
  }