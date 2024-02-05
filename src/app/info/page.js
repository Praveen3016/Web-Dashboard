"use client";
import React from 'react'
import Topheader from '@/component/Topheader'
import "../../../public/assets/css/style.css";
import InputComp from '@/component/InputComp';
import { useContext, useState } from 'react';
import { InfoContext } from '@/infoContext/infoContext';

function page() {

  const {title,settitle,time,settime,location,setlocation,ragistrationNo,setragistrationNo,rbiLicenceNo,setrbiLicenceNo,bankIFSC,setbankIFSC,panNo,setpanNo,tanNo,settanNo,gstNo,setgstNo,bankingLink,setbankingLink,androidAppLink,setandroidAppLink,iosAppLink,setiosAppLink,facebookLink,setfacebookLink,instagram,setinstagram,twitter,settwitter,youtube,setyoutube,inputhandle,disable,setdisable} =useContext(InfoContext)

  const [save , setsave] = useState(false)




  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
      <Topheader />


      <div className="container-fluid mb-3 RightSideContent">
        <div className="content bg-white radias shadoww p-4 ">
            <h6>Web Info</h6>
            
          <div className="row border-bottom pb-5">
            <div className="col-sm-4">
              <InputComp name='WEBSITE TITLE' value={title} set={settitle} disable={disable} />
            </div>
            <div className="col-sm-4">
              <InputComp name='OPEN/CLOSE TIME'  value={time} set={settime} disable={disable} />
            </div>
            <div className="col-sm-4">
              <InputComp name='BANK LOCATION CITY' value={location} set={setlocation} disable={disable} />
            </div>
          </div>

          <div className="bankingDetail position-relative pt-4   ">         
              <span className='position-absolute banking'>Banking Details</span>
            <div className="row">  
              <div className="col-sm-4">
                <InputComp name='REGISTRATION NO.'  value={ragistrationNo} set={setragistrationNo} disable={disable} />
              </div>
              <div className="col-sm-4">
                <InputComp name='RBI LICENCE NO.'  value={rbiLicenceNo} set={setrbiLicenceNo} disable={disable} />
              </div>
              <div className="col-sm-4">
                <InputComp name='BANK IFSC'  value={bankIFSC} set={setbankIFSC} disable={disable} />
              </div>
            </div>
            <div className="row border-bottom pb-5 pt-3 ">  
              <div className="col-sm-4">
                <InputComp name='PAN NO.'  value={panNo} set={setpanNo} disable={disable} />
              </div>
              <div className="col-sm-4">
                <InputComp name='TAN NO.'  value={tanNo} set={settanNo} disable={disable} />
              </div>
              <div className="col-sm-4">
                <InputComp name='GST NO.'  value={gstNo} set={setgstNo} disable={disable} />
              </div>
            </div>
          </div>

          <div className=" position-relative  py-2 ">
            <div className="row border-bottom  pb-4">
          <span className='position-absolute bankingLink ' style={{paddingInline: "5px" }}>Net Banking Link</span>
            <div className="row mx-0 p-0  my-4">  
              <div className="col-sm-4">
                <InputComp name='NET BANKING LINK' value={bankingLink} set={setbankingLink} disable={disable}/>
              </div>
              <div className="col-sm-4">
                <InputComp name='ANDROID APPLICATION LINK' value={androidAppLink} set={setandroidAppLink} disable={disable}/>
              </div>
              <div className="col-sm-4">
                <InputComp name='IOS APPLICATION LINK' value={iosAppLink} set={setiosAppLink} disable={disable} />
              </div>
            </div>
            </div>
          </div>

          <div className="SocailMedia position-relative ">
          <div className="row">
              <span className='position-absolute bankingmedia' style={{paddingInline: "5px" }}>Socail Media</span>
            <div className="row mx-0 p-0  my-4">  
              <div className="col-sm-4">
                <InputComp name='FACEBOOK LINK' value={facebookLink} set={setfacebookLink} palceholder="Facebook Link" disable={disable} />
              </div>
              <div className="col-sm-4">
                <InputComp name='INSTAGRAM LINK'value={instagram} set={setinstagram} palceholder="Instagram Link" disable={disable} />
              </div>
              <div className="col-sm-4">
                <InputComp name='TWITTER LINK' value={twitter} set={settwitter} palceholder="Twitter Link" disable={disable} />
              </div>
              <div className="col-sm-4 mt-3">
                <InputComp name='YOUTUBE LINK' value={youtube} set={setyoutube} palceholder="Youtube Link" disable={disable} />
              </div>
            </div>
            </div>
          </div>


          <div className='d-flex gap-2'>
          {
         save?  <button className='btn btn-primary px-4 py-2 m-0 ' onClick={(e) => {setdisable(disable ? true : true); setsave(save ? false : false); inputhandle()}} >Save</button> 
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
            <p className='fontsizze m-0 p-0'>Current Date Time : <span>12-01-2024</span></p></div>
        </div>
      </footer>

    </main>
  )
}

export default page
