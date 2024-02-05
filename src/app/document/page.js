"use client";
import React, { useState } from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function page() {

  const [docName , setdocName] = useState();
  const [aboutdocName , setaboutdocName] = useState();
  const [docs , setdocs] = useState([])

  function addDocs()
  {
    const newdoc = {
      "docname" : docName,
      "aboutdocname" : aboutdocName
    }

    setdocs([...docs , newdoc]);
    console.log(docs)
    setdocName(" ");
    setaboutdocName(" ");
    
  }

  function deletefunc(id)
  {
   const array =  docs.filter((elem,index)=>{
    return index !== id ;
   })


    setdocs(array)
  }


  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
      <Topheader />

      <div className="container-fluid mb-3 RightSideContent ">
        <div className="content bg-white radias shadoww p-4 ">
          <div className=' w-100'>
            <div>

              <h6 className='mb-2'>Bank Document</h6>
            
            </div>

          </div>
          <section>
            <div >

              <table class="table table-sm ">

                <thead className='Theadnews'>
                  <tr>
                    <th>S.NO</th>
                    <th>DOCUMENT DETAILS</th>
                    <th>FILE</th>
                    <th>ACTION</th>

                  </tr>
                </thead>



                <tbody className='Tbodynews'>
                {/* <tr className=''>
                      <td className='tdcenter'>1</td>
                      <td>
                        <div className='d-flex flex-column  '>
                          <input className=' backcolor border outlineNone py-1 px-2 rounded w-85' type="text" placeholder='Enter name' />
                          <textarea placeholder='work' className=' w-85 backcolor tableInput border  rounded' row={5} style={{ overflow: "auto" }} type="text" >  </textarea>
                        </div>
                      </td>
  
                      <td style={{ width: "20%" }} className='tdcenter'>
                        <MdCloudUpload />
                      </td>
  
                      <td className='tdcenter'>
                        <div className='d-flex gap-1'>
                          <button className='btn btn-success penbtn '><FaRegPenToSquare /></button>
                          <button className='btn btn-danger penbtn '><RiDeleteBinLine /></button>
                        </div> </td>
                    </tr> */}
                    {
                    
                    docs.map((elem,index) =>{
                    return  <tr className=''>
                      <td className='tdcenter'>{index+1}</td>
                      <td>
                        <div className='d-flex flex-column  '>
                          <input className=' backcolor border outlineNone py-1 px-2 rounded w-85' type="text" placeholder='Enter name' value={elem.docname} />
                          <textarea placeholder='work' className=' w-85 backcolor tableInput border  rounded' row={5} style={{ overflow: "auto" }} type="text" value={elem.aboutdocname} >  </textarea>
                        </div>
                      </td>
  
                      <td style={{ width: "20%" }} className='tdcenter'>
                        <MdCloudUpload className='iconSize m-auto' />
                      </td>
  
                      <td className='tdcenter'>
                        <div className='d-flex gap-1'>
                          {/* <button className='btn btn-success penbtn '><FaRegPenToSquare /></button> */}
                          <button className='btn btn-danger penbtn ' onClick={() => deletefunc(index)}><RiDeleteBinLine /></button>
                        </div> </td>
                    </tr>
                    })
                  }
                 
                </tbody>
                <tfoot>
                <tr>
                    <td  style={{ width: "7%" }} className='tdcenter'>
                      <input type="text" className='w-50' />
                    </td>
                    <td>  
                      <div className='d-flex flex-column'>
                      <input  value={docName} onChange={(e) => setdocName(e.target.value)} className=' w-85 backcolor border outlineNone py-1 px-2 rounded' type="text" placeholder='Enter name' />
                      <textarea  value={aboutdocName} onChange={(e) => setaboutdocName(e.target.value)}  placeholder='About Work' className=' w-85 backcolor tableInput  border  rounded' row={5} style={{ overflow: "auto" }} type="text" >  </textarea>
                    </div>
                    </td>
                    <td style={{ width: "20%" }} className='tdcenter'>
                      <MdCloudUpload className='iconSize m-auto' />
                    </td>
                    <td  className='tdcenter'>
                      <div className='d-flex gap-1'>
                        <button className='btn btn-success penbtn ' onClick={addDocs}><FaPlus /></button>
                      </div> </td>
                  </tr>
                  
                </tfoot>
              </table>
            </div>
          </section>
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
