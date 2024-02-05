

"use client";
import React, { useState } from 'react'
import { createContext } from 'react'
export const GallaryContext = createContext()

export const GallaryContextProvider = ({ children }) => {

 const [imageshow , setimageshow] = useState(false)
 const [imgURL , setimgURL ] = useState("")


  return (
    <GallaryContext.Provider value={({imageshow,setimageshow,imgURL , setimgURL})}>
      <div>
        {children}
      </div>
    </GallaryContext.Provider>
  )
}

