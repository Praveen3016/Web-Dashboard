"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome } from "react-icons/ai";
import { MdTableRows } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { PiVirtualRealityFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { BsSliders } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";
import { CiLink } from "react-icons/ci";
import { RiPageSeparator } from "react-icons/ri";
import { FaMapLocation } from "react-icons/fa6";


function NavLink() {

    const pathname = usePathname()


 const   navlink =[
        {
            name: "Dashboard",
         rout : "",
         icon : <AiFillHome className={`${pathname == "/" ? "text-white" : 'text-dark'  } `}/>


        },
        {
            name: "Popup",
         rout : "popup",
         icon :  <MdTableRows className={`${pathname == "/popup" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "Web Info",
         rout : "info",
         icon :  <FaMoneyBillAlt className={`${pathname == "/info" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "Personal Details",
         rout : "personalDetail",
         icon : <PiVirtualRealityFill className={`${pathname == "/personalDetail" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "News",
         rout : "news",
         icon : <FaRegNewspaper className={`${pathname == "/news" ? "text-white" : 'text-dark'  } `}/>
        },
        {
            name: "Slider Image",
         rout : "sliderImage",
         icon :   <BsSliders className={`${pathname == "/sliderImage" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "Board",
         rout : "board",
         icon :  <FaChalkboardTeacher className={`${pathname == "/board" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "Gallery",
         rout : "gallery",
         icon :  <GrGallery className={`${pathname == "/gallery" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "Document",
         rout : "document",
         icon : <IoMdDocument className={`${pathname == "/document" ? "text-white" : 'text-dark'  } `}/>

        },
        {
            name: "Custom Link",
         rout : "customLink",
        
         icon :  <RiPageSeparator className={`${pathname == "/customLink" ? "text-white" : 'text-dark'  } `}/>
        },
        {
          name: "Custom Page",
       rout : "customPage",
      
       icon :  <RiPageSeparator className={`${pathname == "/customPage" ? "text-white" : 'text-dark'  } `}/>
      },
        {
            name: "Maps",
         rout : "maps",
        
         icon :  <FaMapLocation className={`${pathname == "/maps" ? "text-white" : 'text-dark'  } `}/>
        }

    ]

  return (
<>
    {
        navlink.map((elem) =>{
          return  <li className="nav-item" key={elem.name}>
            <Link className={`${pathname == `/${elem.rout}` ? "active nav-link " : 'nav-link'  }`} href={`/${elem.rout}`}>
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                {elem.icon}  
              </div>
              <span className="nav-link-text ms-1">{elem.name}</span>
            </Link>
          </li>
        })
    }
</>
  )
}

export default NavLink
