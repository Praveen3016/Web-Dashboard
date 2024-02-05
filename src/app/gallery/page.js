"use client";
import React , {useState, useRef} from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
import { IoIosCloudUpload } from "react-icons/io";
import { useContext } from 'react';
import { GallaryContext } from '@/galaryContext/galaryContext';
import Fullimage from '@/component/Fullimage';




function page() {
  const [images, setimages] = useState([]);

  const hiddenFileInput = useRef(null);


  const {imageshow,setimageshow,imgURL , setimgURL} = useContext(GallaryContext)

  const handleChange = event => {

    if (event.target.files && event.target.files[0]) {
      const data = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(data)
      reader.onload = () => {
        console.log(reader.result)
        const newdata = reader.result;
        setimages((previouse) =>[...previouse , newdata])


      }
    }
  }


  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  
  return (
    <>
       {   
        imageshow ?    <div className="outer ">
        <div className='iner' >
          <Fullimage/>
        </div>
      </div> : "" 
      }
       
      
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
         <Topheader/>

         <div className="container-fluid mb-3 RightSideContent ">
        <div className="content bg-white radias shadoww p-4 ">       
        <h6>Gallary</h6>
        <div className='imageContainer'>
          <div className="row">
            <div className="col-sm-2 mb-4 "> 
            <div className='border p-1 rounded-1'>
              <img src={'/assets/img/optim.jpg'} className='rounded-1 img-fluid border cursor-pointer' style={{height:"100px "}} alt="" onClick={(e) =>{ setimgURL(e.target.src); setimageshow(true);}} />
              </div>
            </div>
            <div className="col-sm-2 mb-4">
            <div className='border p-1 rounded-1'>
              <img src={'/assets/img/optim.jpg'} className='rounded-1 img-fluid border  cursor-pointer' style={{height:"100px "}}  alt="" onClick={(e) =>{ setimgURL(e.target.src); setimageshow(true);}} />
            </div>
            </div>
            {
              images.map((elem)=>{
               return <div className="col-sm-2 mb-4 " >
                <div className='border p-1 rounded-1'>
                <img src={elem} className='rounded-1 img-fluid border w-100 cursor-pointer' style={{height:"100px "}}  alt="" onClick={(e) =>{ setimgURL(e.target.src); setimageshow(true);}} />
                </div>
              </div>
              })

            }          

            <div className="col-sm-2 position-relative py-1 " style={{height : "180px"}}>
            <button className='position-absolute start-0 h-100 w-100 ' style={{ cursor: "pointer" ,opacity:"0.0" }} onClick={handleClick}  >click</button>
            <input type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }} />
              <div className='rounded-3 border'>
            <IoIosCloudUpload className=' h-100 w-50 center text-opacity-50 py-3'  />
            </div>
            </div>

          </div>

        </div>
        </div>
      </div>

        <footer className=' footer1'>
        <div className="container ">
          <div className="content px-3 d-flex justify-content-between rounded align-items-center px-2 py-2 shadow bg-white">
            <p className="fontsizze m-0 p-0 ">2024 SOFT-TECH SOLUTIONS</p>
            <p className='fontsizze m-0 p-0'>Current Date Time : <span>12-01-2024</span></p></div>
        </div>
      </footer>

      </main>
      </> 
  )
}

export default page





