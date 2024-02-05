"use client";
import React, { useState } from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
// import image1 from '../../../public/assets/img/optim.jpg'
import { MdArrowDropDown } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useRef } from 'react';


function page() {

  const [images, setimages] = useState("")

  const hiddenFileInput = useRef(null);

  const handleChange = event => {

    if (event.target.files && event.target.files[0]) {
      const data = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(data)
      reader.onload = () => {
        console.log(reader.result)
        setimages(reader.result)


      }
    }
  }


  const handleClick = event => {
    hiddenFileInput.current.click();
  };


  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>

      <Topheader />

      <div className="container-fluid mb-3 RightSideContent">
        <div className="content bg-white radias shadoww p-4 ">
          <h6>Web Info</h6>

          <table className="table table-sm">
            <thead>
              <tr className='tr'>
                <th>S.NO</th>
                <th>TITLE</th>
                <th>IMAGE</th>
                <th>TYPE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=''>1</td>
                <td>
                  <div className="compo d-flex flex-column">
                    <input type="text" className='inputit w-50' value='Title' disabled />
                  </div>
                </td>
                <td className='position-relative'>
                  {/* '/assets/img/optim.jpg' */}
                  <img src={images ? images : '/assets/img/optim.jpg'} className='thumbnail' alt="not found" />


                  <input type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }} />


                  <button className='position-absolute start-0 w-100 h-100 ' style={{ cursor: "pointer" ,opacity:"0.0" }} onClick={handleClick}  >click</button>


                </td>
                <td>
                  <div className="compo inputit d-flex align-items-center justify-content-between w-50">
                    <span>Close</span>
                    <MdArrowDropDown />
                  </div>
                </td>
                <td>
                  <button className='btn btn-success penbtn '><FaRegPenToSquare /></button>
                </td>
              </tr>
           
            </tbody>
          </table>

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
  )
}

export default page
