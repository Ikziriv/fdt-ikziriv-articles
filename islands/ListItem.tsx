/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";

interface Articels {
  item: {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
}

export default function ListItem({ item }: Articels) {
  const { id, title } = item;
  const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  const [bgColor, setBgColor] = useState(randomColor);

  useEffect(() => {
    if (!bgColor) {
      setBgColor(randomColor);
    }
  }, []);

  return (
    <div
      class={tw`w-64 h-48 p-2 my-2 border-l-4 border-[${bgColor}] bg-white hover:bg-gray-50 shadow-lg`}
    >
      <a class={tw`flex jusitfy-start items-start w-64 h-full p-4`} href={`/article/${bgColor.substring(1)}/${id}`}>
        <div class={tw`w-auto h-auto`}>
          <h2 class={tw`font-thin text-sm`}>{title}</h2>
        </div>
      </a>
    </div>
  );
}