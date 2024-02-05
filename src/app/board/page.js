"use client";
import React from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
import { useState, useRef } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosCloudUpload } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";



function page() {

  const [details, setdetails] = useState([])
  const [Name, setName] = useState("")
  const [aboutName, setaboutName] = useState("")
  const [imageURL, setimageURL] = useState("")
  const [seq, setseq] = useState("")



  function addDetail() {
    const newdoc = {
      "Bname": Name,
      "aboutBname": aboutName,
      "imageURL": imageURL,
      "seq": seq
    }

    setdetails([...details, newdoc]);
    console.log(details)

    setName("");
    setaboutName("");
    setimageURL("");
    setseq("");

  }

  const hiddenFileInput = useRef(null);

  const handleChange = event => {

    if (event.target.files && event.target.files[0]) {
      const data = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(data)
      reader.onload = () => {
        console.log(reader.result)
        const newdata = reader.result;
        setimageURL(newdata)


      }
    }
  }


  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  function deleterow(id)
  {
    const newarry = details.filter((elem,index)=>{
      return index !== id;
    });

    setdetails(newarry);
  }
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
      <Topheader />

      <div className="container-fluid mb-3 RightSideContent ">
        <div className="content bg-white radias shadoww p-4 ">
          <div className=' w-100'>
            <div>

              <h6 className='mb-0'>Bank News Detail</h6>
              <p style={{ fontSize: "0.9rem" }}>Bank News Detail provided by Bank</p>
            </div>

          </div>
          <section>
            <div >

              <table class="table table-sm ">

                <thead className='Theadnews'>
                  <tr  >
                    <th>S.NO</th>
                    <th>DETAILS</th>
                    <th>IMAGE</th>
                    <th>SEQ</th>
                    <th>ACTION</th>

                  </tr>
                </thead>

                <tbody className='Tbodynews'>
                  {/* <tr className=''>
                    <td className=''>1</td>
                    <td   >
                      <div className='d-flex flex-column  '>
                        <input className=' backcolor border outlineNone py-1 px-2 rounded w-85' type="text" placeholder='Enter name' />
                        <textarea placeholder='work' className=' w-85 backcolor tableInput border  rounded' row={5} style={{ overflow: "auto" }} type="text" >  </textarea>
                      </div>
                    </td>
                    <td><img src='/assets/img/praveen.jpg' height={100} alt="" /></td>
                    <td style={{ width: "20%" }}>
                      <div className='h-100 d-flex align-itemsw-center'>
                        <input className='outlineNone border rounded backcolor  px-1 py-1' type="number" value={"1"} />
                      </div>
                    </td>

                    <td>
                      <div className='d-flex gap-1'>
                        <button className='btn btn-success penbtn '><FaRegPenToSquare /></button>
                        <button className='btn btn-danger penbtn '><RiDeleteBinLine /></button>
                      </div> </td>
                  </tr> */}
                  {
                    details.map((elem, index) => {
                      return <tr>
                        <td>{index+1}</td>
                        <td>  <div className='d-flex flex-column'>
                          <input className=' w-85 backcolor border outlineNone py-1 px-2 rounded' type="text" placeholder='Enter name' value={elem.Bname} />
                          <textarea placeholder='work' className='px-2 w-85 backcolor tableInput border  rounded' row={5} style={{ overflow: "auto" }} type="text" value={elem.aboutBname} >  </textarea>
                        </div></td>
                        <td  style={{ width: "10%" }} ><img src={elem.imageURL} height={100} width={100} className='rounded' /></td>
                        {console.log(elem.imageURL)}
                        <td style={{ width: "20%" , paddingLeft : "5px" }}><input className='outlineNone border rounded backcolor  px-1 py-1' type="number" value={elem.seq} /></td>
                        <td>
                          <div className='d-flex gap-1'>
                            <button className='btn btn-success penbtn '><FaRegPenToSquare /></button>
                            <button className='btn btn-danger penbtn '><RiDeleteBinLine onClick={() => deleterow(index)} /></button>
                          </div> </td>
                      </tr>
                    })
                  }

                </tbody>
                <tfoot>
                  <tr>
                    <td>*</td>
                    <td>  <div className='d-flex flex-column'>
                      <input className=' w-85 backcolor border outlineNone py-1 px-2 rounded' type="text" placeholder='Enter name' value={Name} onChange={(e) => setName(e.target.value)} />
                      <textarea placeholder='work' className='px-2 w-85 backcolor tableInput  border  rounded' row={5} style={{ overflow: "auto" }} type="text" value={aboutName} onChange={(e) => setaboutName(e.target.value)} >  </textarea>
                    </div></td>
                    <td className='position-relative' style={{ width: "10%" }}>
                      <button className='position-absolute start-0 h-100 w-100 ' style={{ cursor: "pointer", opacity: "0.0" }} onClick={handleClick}  >click</button>
                      <input type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }} />
                        {
                        imageURL ? <img src={imageURL} height={100} width={100} className='rounded-2 w-100 center' />
                      :<div className='rounded-3 border '>
                            <IoIosCloudUpload className=' h-100 w-50 center text-opacity-50 py-3' />
                            </div>
                        }
                      </td>
                    <td style={{ width: "20%" }}><input className='outlineNone border rounded backcolor px-1 py-1' type="number" value={seq} onChange={(e) => setseq(e.target.value)} /></td>

                    <td>
                      <button className='btn btn-success penbtn ' onClick={addDetail}><FaPlus /></button>
                    </td>
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
