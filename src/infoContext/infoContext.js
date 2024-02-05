
"use client";
import React, { useState } from 'react'
import { createContext } from 'react'

export const InfoContext = createContext()

export const InfoContextProvider = ({ children }) => {

  const [disable, setdisable] = useState(true)

  const [title, settitle] = useState("SBI bank Ltd.")
  const [time, settime] = useState("10.00 A.M To 5.00 P.M")
  const [location, setlocation] = useState("Bardoli")

  const [ragistrationNo, setragistrationNo] = useState("Se 4869")
  const [rbiLicenceNo, setrbiLicenceNo] = useState("UBD Gj.717 P Dt. 06-12-86")
  const [bankIFSC, setbankIFSC] = useState("HFGH5647654")

  const [panNo, setpanNo] = useState("AEFAA9999A")
  const [tanNo, settanNo] = useState("SRTT00128C")
  const [gstNo, setgstNo] = useState("24AAAAT3967C1ZN")

  const [bankingLink, setbankingLink] = useState("NET BANKING LINK")
  const [androidAppLink, setandroidAppLink] = useState("http://localhost:3000/info")
  const [iosAppLink, setiosAppLink] = useState("https://chrome.google.com/webstore?hl=en")

  const [facebookLink, setfacebookLink] = useState("Facebook Link")
  const [instagram, setinstagram] = useState("Instagram Link")
  const [twitter, settwitter] = useState("Twitter Link")
  const [youtube, setyoutube] = useState("Youtube Link")

  const inputhandle = () => {
    if (!bankIFSC) {
      alert('Required BankIFSC ')
    } else if (!/^[A-Za-z]{4}\d{7}$/.test(bankIFSC)) {
      alert('Invalid BankIFSC no.')
    } else if (!panNo) {
      alert('Required Pan No. ')
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNo)) {
      alert('Invalid Pan No.')
    } else if (!tanNo) {
      alert('Required TAN No. ')
    } else if (!/^[A-Z]{4}[0-9]{5}[A-Z]{1}$/.test(tanNo)) {
      alert('Invalid TAN No.')
    } else if (!gstNo) {
      alert('Required GST No. ')
    } else if (!/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(gstNo)) {
      alert('Invalid GST No.')
    }

    else {

      const WebInfoData = {
        "Title": title,
        "Time": location,
        "RagistrationNo": ragistrationNo,
        "RbiLicenceNo": rbiLicenceNo,
        "BankIFSC": bankIFSC,
        "PanNo": panNo,
        "TanNo": tanNo,
        "GstNo": gstNo,
        "BankingLink": bankingLink,
        "AndroidAppLink": androidAppLink,
        "IosAppLink": iosAppLink,
        "FacebookLink": facebookLink,
        "Instagram": instagram,
        "Twitter": twitter,
        "Youtube": youtube

      }
      console.log(WebInfoData);
    }
  }

  return (
    <InfoContext.Provider value={({ title, settitle, time, settime, location, setlocation, ragistrationNo, setragistrationNo, rbiLicenceNo, setrbiLicenceNo, bankIFSC, setbankIFSC, panNo, setpanNo, tanNo, settanNo, gstNo, setgstNo, bankingLink, setbankingLink, androidAppLink, setandroidAppLink, iosAppLink, setiosAppLink, facebookLink, setfacebookLink, instagram, setinstagram, twitter, settwitter, youtube, setyoutube, inputhandle, disable, setdisable })}>
      <div>
        {children}
      </div>
    </InfoContext.Provider>
  )
}

