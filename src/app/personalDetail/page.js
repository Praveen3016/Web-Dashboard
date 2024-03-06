"use client";
import React, { useState } from 'react'
import Topheader from '@/component/Topheader'
import PersonalInputComp from '@/component/PersonalInputComp'
import "../../../public/assets/css/style.css";
import { useContext } from 'react';
import { PersonalContext } from '@/personalContext/personalDetailContect';
function page() {

  const {contectNo1,setcontectNo1,contectNo2,setcontectNo2,email1,setemail1,email2,setemail2,faxNo,setfaxNo,address,setaddress,aboutDesc,setaboutDesc,vissionDesc,setvissionDesc,historyDesc,sethistoryDesc,inputhandle,disable,setdisable} = useContext(PersonalContext)

  // console.log(` disable :${disable}`)
  const [save , setsave] = useState(false)
  // console.log(save);
 
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
      <Topheader />

      <div className="container-fluid mb-3 RightSideContent">
        <div className="content bg-white radias shadoww p-4 ">
          <h6>Bank Personal Detail</h6>
         
          <div className="bankingDetail position-relative    ">
            <div className="row">
              <div className="col-sm-4">
                <PersonalInputComp name='CONTACT NO.(PRIMARY)' value={contectNo1} set={setcontectNo1} disable={disable} />
              </div>
              <div className="col-sm-4">
                <PersonalInputComp name='CONSTACT NO.2' value={contectNo2} set={setcontectNo2} disable={disable} />
           
              </div>
              <div className="col-sm-4">
                <PersonalInputComp name='IMAIL ADDRESS (PRIMARY)' value={email1} set={setemail1} disable={disable} />
              </div>
            </div>
            <div className="row pb-5 pt-3 ">
              <div className="col-sm-4">
                <PersonalInputComp name='IMAIL ADDRESS 2' value={email2} set={setemail2} disable={disable} />
              </div>
              <div className="col-sm-4">
                <PersonalInputComp name='FAX NO.' Plceholder='Fax no.' value={faxNo} set={setfaxNo} disable={disable} />
              </div>
              <div className="col-sm-4">
                <PersonalInputComp name='ADDRESS' value={address} set={setaddress} disable={disable} />
              </div>
            </div>
          </div>

          <div className="aboutBank position-relative border-top pt-3">
            <span className=' personalAbout'>About Bank</span>
            <div className="textarea">
              <span className="textheading">ABOUT DESCRIPTION</span>
              <textarea name="" id="" className='personalcompo w-100' placeholder='write some thing' value={aboutDesc} onChange={(e) =>setaboutDesc(e.target.value) } ></textarea>         
            </div>
            <div className="textarea">
              <span className="textheading">MISSION AND VISION DESCRIPTION</span>
              <textarea name="" id="" className='personalcompo w-100' placeholder='write some thing' value={vissionDesc} onChange={(e) => setvissionDesc(e.target.value)}  ></textarea>
            </div>
            <div className="textarea">
              <span className="textheading">HISTORY DESCRIPTION</span>
              <textarea name="" id="" className='personalcompo w-100' placeholder='write some thing'value={historyDesc} onChange={(e) =>  sethistoryDesc(e.target.value)} ></textarea>
            </div>
          </div>
<div className='d-flex gap-2'>
        {
         save?  <button className='btn btn-primary px-4 py-2 m-0 ' onClick={(e) => {  setdisable(disable ? true : true); setsave(save ? false : false); inputhandle()}} >Save</button> 
         : <button className='btn btn-success px-4 py-2 m-0 ' onClick={(e) => {setdisable(disable ? false : false); setsave(save ? true : true);}} >Edit</button>
        
        }
          {/* <button className='btn btn-success px-4 py-2 m-0 ' onClick={inputhandle}>Submit</button> */}
          </div>
        </div>
      </div>

      <footer className=' footer1'>
        <div className="container ">
          <div className="content px-3 d-flex justify-content-between rounded align-items-center px-2 py-2 shadow bg-white">
            <p className="fontsizze m-0 p-0 ">2024 SOFT-TECH SOLUTIONS</p>
            <p className='fontsizze m-0 p-0'>Current Date Time : <span>12-01-2024</span></p>
          </div>
        </div>
      </footer>

    </main>
  )
}

export default page
