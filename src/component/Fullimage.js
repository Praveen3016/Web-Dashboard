import React from 'react'
import { useContext } from 'react'
import { GallaryContext } from '@/galaryContext/galaryContext'

function Fullimage() {
    
  const {imageshow,setimageshow,imgURL , setimgURL} = useContext(GallaryContext)
 
  return (
    <div className=' rounded   h-100 w-100 p-3'>
           <img src={imgURL} className=' p-2 shadow rounded ' height={500} width={800} alt="" onClick={() => setimageshow(false)} />
        </div>
  )
}

export default Fullimage
