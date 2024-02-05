

"use client";
import React, { useState } from 'react'
import { createContext } from 'react'
export const PersonalContext = createContext()

export const PersonalContextProvider = ({ children }) => {

  const [disable, setdisable] = useState(true)

  const [contectNo1, setcontectNo1] = useState("0989678780")
  const [contectNo2, setcontectNo2] = useState("0989678780")
  const [email1, setemail1] = useState("adm1@gmail.com")

  const [email2, setemail2] = useState("adm2@gmail.com")
  const [faxNo, setfaxNo] = useState("0989678780")
  const [address, setaddress] = useState("Upli Bazar, Bardoli, Surat, India")

  const [aboutDesc, setaboutDesc] = useState("")
  const [vissionDesc, setvissionDesc] = useState("")
  const [historyDesc, sethistoryDesc] = useState("")

  const inputhandle = () => {

    if (!contectNo1) {
      alert('Required contect no. (primary)')
    } else if (!/^[0-9]{10}$/i.test(contectNo1)) {
      alert('Invalid Contect No. (primary)')
    } else if (!contectNo2) {
      alert('Required Contect no. 2')
    } else if (!/^[0-9]{10}$/i.test(contectNo2)) {
      alert('Invalid Contect No. 2')
    } else if (!email1) {
      alert('Required email (primary)')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email1)) {
      alert('Invalid email address (primary)')
    } else if (!email2) {
      alert('Required Email 2')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email2)) {
      alert('Invalid email address 2')
    } else if (!faxNo) {
      alert('Required Fax no.')
    } else if (!/^[0-9]{10}$/i.test(faxNo)) {
      alert('Invalid Fax no.')
    } else {

      const PersonalData = {
        "ContectNo1": contectNo1,
        "ContectNo2": contectNo2,
        "Email1": email1,
        "Email2": email2,
        "FaxNo": faxNo,
        "Adress": address,
        "AboutDesc": aboutDesc,
        "VissionDesc": vissionDesc,
        "HistoryDesc": historyDesc

      }
      console.log(PersonalData);
    }

  }




  return (
    <PersonalContext.Provider value={({ contectNo1, setcontectNo1, contectNo2, setcontectNo2, email1, setemail1, email2, setemail2, faxNo, setfaxNo, address, setaddress, aboutDesc, setaboutDesc, vissionDesc, setvissionDesc, historyDesc, sethistoryDesc, inputhandle, disable, setdisable })}>
      <div>
        {children}
      </div>
    </PersonalContext.Provider>
  )
}

