"use client";
import React, { useEffect, useState } from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { useContext } from 'react';
import { postContext } from '@/MainContext/mainContext';
import { usePathname } from 'next/navigation';
import User from './User';




function Topheader() {
  const [pagename, setPagename] = useState("")
  const [ usershow , setusershow] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  useEffect(() => {
    // Using a switch statement to set the pagename based on the pathname
    switch (pathname) {
      case "/":
        setPagename("Dashboard");
        break;
      case "/popup":
        setPagename("Popup");
        break;
      case "/info":
        setPagename("Web Info");
        break;
      case "/personalDetail":
        setPagename("Personal Details");
        break;
      case "/news":
        setPagename("News");
        break;
      case "/sliderImage":
        setPagename("Slider Image");
        break;
      case "/board":
        setPagename("Board");
        break;
      case "/gallery":
        setPagename("Gallery");
        break;
      case "/document":
        setPagename("Document");
        break;
      case "/customLink":
        setPagename("Custom Link");
        break;
      case "/customPage":
        setPagename("Custom Page");
        break;
      case "/maps":
        setPagename("Maps");
        break;
      default:
        setPagename(""); // Set a default value if pathname doesn't match any case
    }
  }, [pathname]);



  const { setmunuhandle, munuhandle } = useContext(postContext)
  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid  px-3">
        <nav className=' d-flex align-items-center gap-2' aria-label="breadcrumb ">

          <AiFillDashboard />
          <h6 className="font-weight-bolder mb-0">{pagename}</h6>
        </nav>
        <IoMenu className='d-lg-none menuicon' onClick={() => setmunuhandle(munuhandle ? false : true)} />
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">

          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" className="form-control" placeholder="Type here..." />
            </div>
          
          </div>

          <ul className="navbar-nav  justify-content-end position-relative">

            {/* <li className="nav-item d-flex align-items-center">
              <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard">Online Builder</a>
            </li> */}

            <li className="nav-item d-flex align-items-center ">
              <a className="nav-link text-body font-weight-bold px-0">
              <img src="./../assets/img/user1.png" height={35} alt="" onClick={() => setusershow(usershow ? false : true)} />
             {usershow ? <div className="position-absolute end-1  user">
              <User />
              </div>
              : " "
              }
                {/* <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">  </span> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Topheader
