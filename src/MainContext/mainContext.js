// "use client";
// import React, { useState } from 'react'
// import { createContext } from 'react'
// export const mainContext = createContext();

// export const mainContextProvider =({children}) => {
//     const [popupImage ,setpopupImage] = useState("hello jihow aare you")
//     const [name , setname] = useState("praveen")

//   return (
//     <mainContext.Provider value={{popupImage, setpopupImage ,name}}>
//         <div>
//         {children}
//         </div>
//     </mainContext.Provider>
//   )
// }


"use client";
import React, { useState } from 'react'
import { createContext } from 'react'
export const postContext = createContext()

export const PostContextProvider = ({ children }) => {

  const [munuhandle, setmunuhandle] = useState(false)

  const [formShow, setformShow] = useState(false);
const [editehandle , seteditehandle] = useState(false)
const [indexhandle , setindexhandle] = useState(0)


  const [newstitle, setnewstitle] = useState("");
  const [newsurl, setnewsurl] = useState("");
  const [newsseq, setnewsseq] = useState("");
  const [newsdate, setnewsdate] = useState("");

  // user news data

  const [news, setnews] = useState([{
    "sno": "1",
    "title": 'Robbery at the bank of baroda',
    "newslink": "https://stackoverflow.com/questions/72789466/remove-the-up-down-increment-decrement-buttons-on-number-inputs-using-css",
    "seq": "4",
    "expire_date": "12-12-1222",

  }])


  function edite(id)
  {
    seteditehandle(true)
 news.map((elem,index)=>{
    if((index+1) == id) 
    {
      setindexhandle(id)
      setnewstitle(elem.title);
      setnewsurl(elem.newslink);
      setnewsseq(elem.seq);
      setnewsdate(elem.expire_date)
    }
  })

  console.log(news)
 
}

  return (
    <postContext.Provider value={({setindexhandle,indexhandle, editehandle,seteditehandle,edite, setnews, news, munuhandle, setmunuhandle, formShow, setformShow, newstitle, setnewstitle, newsurl, setnewsurl, newsseq, setnewsseq, newsdate, setnewsdate })}>
      <div>
        {children}
      </div>
    </postContext.Provider>
  )
}




