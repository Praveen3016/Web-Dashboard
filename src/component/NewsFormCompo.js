import React from 'react'
import { useContext } from 'react';
import { postContext } from '@/MainContext/mainContext';


function NewsFormCompo() {
    const {setindexhandle,indexhandle,editehandle,seteditehandle,setnews,news,setformShow,formShow,newstitle,setnewstitle,newsurl,setnewsurl,newsseq,setnewsseq,newsdate,setnewsdate} = useContext(postContext);

   function addformdata()
   {
    console.log("hello")
    const newdata = {
        "sno" : "1",
        "title" : newstitle,
        "newslink" :newsurl,
        "seq" : newsseq,
        "expire_date" :newsdate
      }

      setnews([...news, newdata]);
      setnewstitle("");
      setnewsurl("");
      setnewsseq("");
      setnewsdate("");

      console.log(news)
   }

   function addupdatedata(){
    news.map((elem,index)=>{
        if(indexhandle == index+1)
        {
            elem.title = newstitle
            elem.newslink = newsurl
            elem.seq = newsseq
            elem.expire_date = newsdate

            setnewstitle("");
            setnewsurl("");
            setnewsseq("");
            setnewsdate("");
        }
    })
   }

   function savehandle()
   {
    if(editehandle){
        seteditehandle(false)
        addupdatedata();
      
    } else{
        addformdata();
        setformShow(false);
    }     
   }

    return (
        <div className='border rounded shadow bg-white h-100 w-100 p-3'>
            <h6>Add News</h6>
            <div>
                <label htmlFor="title " className='m-0 pt-2'>NEWS TITLE</label>
                <input type="text" className='w-100  inputform ' placeholder="Enter News Title" value={newstitle} onChange={(e) => setnewstitle(e.target.value)} />
                <label htmlFor="title" className='m-0 pt-2'>LINK</label>
                <input type="text" className='w-100 inputform ' placeholder="Enter Link"  value={newsurl} onChange={(e) => setnewsurl(e.target.value)}  />
                <div className="row   ">
                    <div className=' col-sm-6 d-flex flex-column'>
                        <label htmlFor="" className='m-0 pt-2'>SEQ.</label>
                        <input type="text" className='inputform w-100 ' placeholder='Link Seq' value={newsseq} onChange={(e) => setnewsseq(e.target.value)}  />
                    </div>
                    <div className='col-sm-6 d-flex flex-column'>
                        <label htmlFor="" className='m-0 pt-2'>EXPIRE DATE</label>
                        <input className='inputform w-100 ' type="date" value={newsdate} onChange={(e) => setnewsdate(e.target.value)}  />
                    </div>
                </div>
                <div className='w-100 gap-2 formfillbutton'>
               
                        <button className="btn px-3 py-2 m-1  " onClick={() => setformShow(false)} >Cancel</button>
                        <button className="btn btn-success px-3   m-1 py-2 " onClick={() => savehandle()}>Save</button>
                  
                </div>
            </div>
        </div>
    )
}

export default NewsFormCompo
