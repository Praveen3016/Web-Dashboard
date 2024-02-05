import React from 'react';
import Topheader from '@/component/Topheader';
import "../../../public/assets/css/style.css";


function page() {
  return (


    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " style={{ background: "#f8f9fa" }}>
      <Topheader />

      <div className="container-fluid mb-3  RightSideContent ">
        <div className="content bg-white radias shadoww p-4 ">
          <h6>Bank Map</h6>
          <form action="">

            <span class="label">Map Link</span>
            <input type="text" className='w-100 inputit' placeholder="Enter Map Link" />

          </form>
          <button className='btn btn-success px-4 py-2 mt-2 ' >Edit</button>
          <div className='rouded'>
            <iframe
            className='rouded'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28953.854472212304!2d72.8291677871122!3d24.890073416087937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942da54f62fb9f5%3A0x77a44a5d416b85e!2sSirohi%2C%20Rajasthan%20307001!5e0!3m2!1sen!2sin!4v1704280184466!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">

            </iframe>
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
