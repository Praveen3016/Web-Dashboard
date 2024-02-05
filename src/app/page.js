"use client"
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'
import styles from './page.module.css'
import "../../public/assets/css/style.css"
import Topheader from '@/component/Topheader';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiPageSeparator } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { SiRoamresearch } from "react-icons/si";

// import {insta} from '../../public/assets/img/logos/insta.png';

export default function Home() {

  function sidebarColor() {

  }
  function sidebarType() {

  }
  function sidebarType() {

  }



  return (
    <>

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
       <Topheader/>


        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Total Page</p>
                        <h5 className="font-weight-bolder mb-0">
                          5
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon h-100 d-flex justify-content-center align-items-center  icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        {/* <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i> */}
                        <RiPageSeparator className='text-lg text-white fw-bolder opacity-10' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Total Enquiry</p>
                        <h5 className="font-weight-bolder mb-0">
                          23
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon h-100 d-flex justify-content-center align-items-center  icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <SiRoamresearch className='text-lg text-white fw-bolder opacity-10' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Total News</p>
                        <h5 className="font-weight-bolder mb-0">
                          50
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon h-100 d-flex justify-content-center align-items-center  icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        {/* <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i> */}
                        <FaRegNewspaper className='text-lg text-white fw-bolder opacity-10' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Extra Link</p>
                        <h5 className="font-weight-bolder mb-0">
                          36
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="h-100 d-flex justify-content-center align-items-center icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        {/* <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i> */}
                        <CiLink className='text-lg text-white fw-bolder fs-4 iconsize opacity-10' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-lg-8 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <h6 className="font-weight-bolder fs mb-3 ">Company Details</h6>
                    <div className="col-lg-6">
                      <div className="d-flex gap-3 flex-column h-100">
                        <div className="user mb-1">
                          <div className="username d-flex align-items-center gap-1">
                            <FaUserCircle />
                            <p className="m-0 text-sm fw-bold ">User Name</p>
                          </div>
                          <p className="m-0 text-dark  fw-bold font15" >Mann Deshi Foundation</p>
                        </div>
                        <div className="email">
                          <div className="email-1 d-flex align-items-center gap-1">
                            <MdEmail />
                            <p className="m-0 text-sm fw-bold ">Email</p>
                          </div>
                          <p className="m-0 text-dark  fw-bold font15 ">info@gamil.com</p>
                        </div>
                        <div className="Phone">
                          <div className="PhoneNo-1 d-flex align-items-center gap-1">
                            <FaPhone />
                            <p className="m-0 text-sm fw-bold ">Phone</p>
                          </div>
                          <p className="m-0 text-dark  fw-bold font15">1800 2122 112</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 ms-auto text-center mt-5 p-0 mt-lg-0">
                      <span className='line'></span>
                      <div className=' '>

                        <div className="email text-start">
                          <div className="email-1 d-flex align-items-center gap-1">
                            <FaLocationArrow />
                            <p className="m-0 text-sm fw-bold ">Address</p>
                          </div>
                          <span className="  text-dark fw-bold font11" >MANN DESHI Mhashwad, Mann Taluka, Stara Destrict, Stara - 415509, Maharashtra,India </span>
                        </div>
                        <div>
                          <div className="email-1 d-flex align-items-center gap-1 mt-3">
                            <LuTimerReset />
                            <p className="m-0 text-sm fw-bold "> Panel Last Login</p>
                          </div>
                          <p className="m-0 float-start text-dark  fw-bold font15 ">2024-01-12 13:20:36 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='card-body radias h-100 p-2 d-flex flex-column bg-white justify-content-center   shadoww'>
                <h6 className='text-center m-0'>Admin</h6>
                <img src="../assets/img/user1.png" className=" w-50 m-auto  " alt="xd" />
                <div className="icon w-100 d-flex justify-content-center gap-5 mb-2">
                  <FaFacebookF style={{ color: " #316FF6" }} />
                  {/* <img src='../../public/assets/img/logos/insta.png' alt="insta" /> */}
                  <FaInstagramSquare className='insta' />
                  <FaTwitter style={{ color: " #1DA1F2" }} />
                  <FaYoutube style={{ color: " #CD201F" }} />
                </div>


              </div>
            </div>
          </div>
      
   

          <div className="col-lg-12 mb-lg-0 mt-4">
            <div className="card">
              <div className="card-body p-3 ">
                <div className='row'>
                  <div className="col-sm-8">
                <h6 className='text-succes'  >Uploaded Data Details</h6>
                <p className='fontsizze' >Go to website and check the <span className='text-dark'>Uploaded Data</span> from admin panel.</p>
                  <li className="nav-item d-flex align-items-center">
                    <a className="btn btn-outline-success fontsizze px-2 m-0 py-1" target="_blank" href="#">View Website</a>
                  </li>
                  </div>
                  <div className="col-sm-4">
                    {/* <img src="../../assets/img/laptop.png" className='imges' alt="" /> */}
                  </div>
                  </div>
              </div>
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

     
     
    </>
  )
}
