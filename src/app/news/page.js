"use client";
import React, { useState } from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import NewsFormCompo from '@/component/NewsFormCompo';
import { useContext } from 'react';
import { postContext } from '@/MainContext/mainContext';

function page() {


  const { editehandle, seteditehandle, edite, count, setformShow, formShow, news, setnews, newstitle, setnewstitle, newsurl, setnewsurl, newsseq, setnewsseq, newsdate, setnewsdate } = useContext(postContext)


  function detetedata(id) {
    const array = news.filter((fruit, index) => {
      console.log("delete")
      return index + 1 !== id
    })

    setnews(array)
  }

  return (
    <>

      {
        formShow ? <div className="formouter ">
          <div className='forminer' >
            <NewsFormCompo />
          </div>
        </div> : ""
      }
      {
        editehandle ? <div className="formouter ">
          <div className='forminer' >
            <NewsFormCompo />
          </div>
        </div> : ""
      }


      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
        <Topheader />

        <div className="container-fluid mb-3 RightSideContent">
          <div className="content bg-white radias shadoww p-4 ">
            <div className='d-flex justify-content-between w-100'>
              <div>
                <h6 className='mb-0'>Bank News Detail</h6>
                <p style={{ fontSize: "0.9rem" }}>Bank News Detail provided by Bank</p>
              </div>
              <div>
                <button className='btn btn-primary px-3 py-2 m-0 ' onClick={() => setformShow(true)} >Add News</button>
              </div>
            </div>
            <section>
              <div >

                <table class="table table-sm ">

                  <thead className='Theadnews'>
                    <tr  >
                      <th>S.NO</th>
                      <th style={{ width: "25%" }}>TITLE</th>
                      <th style={{ width: "30%" }}>NEWS LINK</th>
                      <th style={{ width: "15%" }}>NEWS SEQ</th>
                      <th style={{ width: "15%" }}>EXPIRE DATE</th>
                      <th style={{ width: "10%" }} >ACTION</th>
                    </tr>
                  </thead>



                  <tbody className='Tbodynews'>
                    {
                      news.map((elem, index) => {
                        return <tr>
                          <td>{index + 1}</td>
                          <td><textarea className='tableInput' row={5} style={{ overflow: "auto" }} type="text" value={elem.title} onChange={(e) => setnewstitle(e.target.value)} /></td>
                          <td><textarea className='tableInput' row={5} style={{ overflow: "auto" }} value={elem.newslink} type="text" onChange={(e) => setnewsurl(e.target.value)} /></td>
                          <td ><input style={{ width: "10%" }} className='outlineNone border-0 ' type="number" value={elem.seq} onChange={(e) => setnewsseq(e.target.value)} /></td>
                          <td><input className='outlineNone border-0 ' type="date" value={elem.expire_date} onChange={(e) => setnewsdate(e.target.value)} /></td>
                          <td>
                            <div className='d-flex gap-1'>
                              <button className='btn btn-success penbtn '><FaRegPenToSquare onClick={(e) => { edite(index + 1); seteditehandle(true); }} /></button>
                              <button className='btn btn-danger penbtn ' onClick={() => detetedata(index + 1)}><RiDeleteBinLine /></button>
                            </div> </td>
                        </tr>
                      })

                    }

                  </tbody>
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
    </>
  )
}

export default page
