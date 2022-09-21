import React, { useEffect, useState } from 'react'
import { BodyText, Heading3, Heading4, SubHeading1 } from '../components/Typography';
import { useData } from '../context/DataContext'

function Crew() {
   const Data = useData();
   const [idx, setidx] = useState(0);
   const [Crew, setCrew] = useState(null);

   useEffect(()=>{
    if(Data){
        let current = Data.crew.filter((ele,id)=>{
            if(id===idx){
                return ele;
            }
        })[0]
        console.log(current)
        setCrew(current);
    }
   },[Data,idx])

  return (
    <div className='w-full pt-[20vh] crew-bg min-h-screen'>
        <div className="container md:grid-cols-1 grid grid-cols-[4fr_8fr] py-10">
            <div className="col flex justify-start flex-col ">
            <SubHeading1 className={"text-white pt-0 "}><span className='opacity-50 mr-5 '>02</span> MEET YOUR CREW</SubHeading1>
            <div className="text my-10">
            <Heading4 className={"text-white/40"}>{Crew?.role}</Heading4>
             <Heading3> {Crew?.name}  </Heading3>
             <BodyText className={"text-primary ] min-h-[30vh]"}>{Crew?.bio}</BodyText>
            </div>
            <div className="slider cursor-pointer">
            <button onClick={()=>setidx(0)} className={idx===0 ? 'w-4 cursor-pointer mx-2 rounded-full h-4  bg-white' : 'w-4 cursor-pointer mx-2  rounded-full h-4  bg-white/40'}></button>
            <button onClick={()=>setidx(1)} className={idx===1 ? 'w-4 cursor-pointer mx-2 rounded-full h-4  bg-white' : 'w-4 cursor-pointer mx-2  rounded-full h-4  bg-white/40'}></button>
            <button onClick={()=>setidx(2)} className={idx===2 ? 'w-4 cursor-pointer mx-2 rounded-full h-4  bg-white' : 'w-4 cursor-pointer mx-2  rounded-full h-4  bg-white/40'}></button>
            <button onClick={()=>setidx(3)} className={idx===3 ? 'w-4 cursor-pointer mx-2 rounded-full h-4  bg-white' : 'w-4 cursor-pointer mx-2  rounded-full h-4  bg-white/40'}></button>

            </div>
            </div>
            <div className="col  md:justify-center flex justify-end min-h-[70vh] items-end ">
                <img src={Crew?.images.webp} className="w-[50%]" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Crew