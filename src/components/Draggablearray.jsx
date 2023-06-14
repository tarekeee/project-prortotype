"use client"
import React, { useRef } from 'react'
import Drag from './drag'
import { ResizableBox } from 'react-resizable'

const Draggablearray = ({list}) => {
  return (
    <div id="container">
      {list.map((item,index) => {
        return (
          <Drag key={index} id={index} type={item.type} />
          )
      })}
      
    </div>
  )
}

export default Draggablearray