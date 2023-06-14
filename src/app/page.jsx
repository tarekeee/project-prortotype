"use client";

import Draggablearray from "@/components/Draggablearray";
import Drag from "@/components/drag";
import DraggableComponent from "@/components/drag";
import useDrag from "@/lib/useDrag";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Resizable, ResizableBox } from "react-resizable";

export default function Home() {
  const [list, setList] = useState([]);
  const handleClick = (type) => {
    setList((prevList) => {
      return [
        ...prevList,
        {
          type: type,
          x: 0,
          y: 0,
          key: prevList.length,
        },
      ];
    });
  };
  useEffect(() => {}, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="selector border-2 h-20 w-[800px] m-0 p-0 flex flex-row justify-start items-center gap-0">
          <button
            onClick={() => handleClick("square")}
            className="square-btn h-20 w-20 m-0 p-0 flex justify-center items-center"
          >
            <div className="bg-pink-500 h-1/2 w-1/2 "></div>
          </button>
          <button onClick={() => handleClick("circle")} className="circle-btn h-20 w-20 m-0 p-0 flex justify-center items-center">
          <div  className="h-1/2 w-1/2 rounded-full" style={{backgroundColor:"blue"}}></div>
          </button>
        </div>
        <Draggablearray list={list} />
        <button
          onClick={() => {
            list.forEach((item) => {
              const element = document.getElementById(item.key);
              item.x = element.offsetLeft;
              item.y = element.offsetTop;
              console.log(item);
            });
          }}
          className="w-[800px] h-20 bg-blue-500 text-white text-xl"
        >
          compile
        </button>
      </div>
    </main>
  );
}
