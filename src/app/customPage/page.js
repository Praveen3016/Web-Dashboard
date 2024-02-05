"use client";
import React, {  useState } from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import NewsFormCompo from '@/component/NewsFormCompo';
import { useContext } from 'react';
import { postContext } from '@/MainContext/mainContext';

function page() {

  
  const {editehandle,seteditehandle,edite,count,setformShow,formShow,news,setnews,newstitle,setnewstitle,newsurl,setnewsurl,newsseq,setnewsseq,newsdate,setnewsdate} = useContext(postContext)  
  // console.log(news);


//   function edite(id)
//   {

//  news.map((elem,index)=>{
//     if((index+1) == id) 
//     {
//       elem.title = "newstitle"
//       elem.url = newsurl
//       elem.seq = newsseq
//       elem.expire_date = newsdate
//     }
//   })

  

//   console.log(news)
//   setnewstitle("");
//   setnewsurl("");
//   setnewsseq("");
//   setnewsdate("");
// }

function detetedata(id)
{
 const array =  news.filter((fruit,index) =>{
    console.log("delete")
   return index+1 !== id
  })

  setnews(array)
}

  return (
    <>
  
      {   
        formShow ?    <div className="formouter ">
        <div className='forminer' >
          <NewsFormCompo />
        </div>
      </div> : "" 
      }
        {   
        editehandle ?    <div className="formouter ">
        <div className='forminer' >
          <NewsFormCompo />
        </div>
      </div> : "" 
      }


    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
      <Topheader />

      
   
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
