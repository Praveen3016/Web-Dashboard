"use client";
import React from 'react'
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { postContext } from '@/MainContext/mainContext';
import Link from 'next/link';



function Header() {

  const {munuhandle} = useContext(postContext)  
  
console.log(munuhandle)
  const pathname = usePathname()


  
  return (
    <>
      
      <aside style={{ background: "#f8f9fa" }} className={` ${munuhandle ? 'munuhandle' : "munuhandlenone"}  sidenav   navbar navbar-vertical  navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3`} id="sidenav-main">
        <div className="sidenav-header  q" style={{height : '3.89rem'}}>
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <img src="../assets/img/logos/logo.png" width={100} className=" w-50 mx-5" alt="main_logo" />
       
        </div>
        <hr className="horizontal dark mt-0" />
        <div style={{ height: "100%" }} className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
        
            <NavLink />
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Header
