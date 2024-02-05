import React from 'react'
import { FaUserCircle } from "react-icons/fa";


function User() {
  return (
    <div className="User border">
        <ul>
            <li className='border-bottom d-flex gap-1 align-items-center'><FaUserCircle/> <span>Account</span> </li>
            <li className=''><FaUserCircle/> <span>Logout</span></li>
        </ul>
    </div>
  )
}

export default User
