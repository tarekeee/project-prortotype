"use client";
import useDrag from "@/lib/useDrag";
import React, { useEffect, useState, useRef } from "react";
import { ResizableBox } from "react-resizable";



const Drag = ({ id,type }) => {
  const elementRef = useRef(null);
  const [dragging,setDragging] = useState(true);
  const [size, setSize] = useState([60,60]);

  useDrag(`${id}`)
  if (dragging) {
  return (
      <div className={type} ref={elementRef} id={id} style={{height:size[0],width:size[1]}} >
      </div>
  );
  }
};

export default Drag;
