import React, { useEffect, useState } from 'react'
import { BodyText, Heading3, SubHeading1, SubHeading3 } from '../components/Typography'
import { useData } from '../context/DataContext';
function Technology() {
    const Data = useData();
    const [idx, setidx] = useState(0);
    const [technology, settechnology] = useState(null);
 
    useEffect(()=>{
     if(Data){
         let current = Data.technology.filter((ele,id)=>{
             if(id===idx){
                 return ele;
             }
         })[0]
         console.log(current)
         settechnology(current);
     }
    },[Data,idx])

  return (
    <div className='w-full min-h-screen tech-bg pt-[20vh]'>
        <div className="ml-20 md:ml-0 md:px-5 md:grid-cols-1 py-20  grid grid-cols-[7fr_5fr] ">
            <div className="col flex justify-between min-h-full flex-col">
            <SubHeading1 className={"text-white pt-0 "}><span className='opacity-50 mr-5'>03</span>SPACE LAUNCH 101</SubHeading1>
            <div className="grid my-10 w-full grid-cols-[2fr_10fr]">
                <div className="index block px-5">
                    <button onClick={()=>setidx(0)}  className={idx===0 ? "w-16 md:w-12 md:h-12 md:text-xl   block my-5 rounded-full text-[28px] font-Bellefair h-16 bg-white  " : "w-16 md:w-12 md:h-12 md:text-xl   block my-5 rounded-full text-[28px] font-Bellefair h-16 bg-transparent border-white border-2 text-white"}>1</button>
                    <button onClick={()=>setidx(1)}  className={idx===1 ? "w-16 md:w-12 md:h-12 md:text-xl   block my-5 rounded-full text-[28px] font-Bellefair h-16 bg-white  " : "w-16 md:w-12 md:h-12 md:text-xl   block my-5 rounded-full text-[28px] font-Bellefair h-16 bg-transparent border-white border-2 text-white"}>2</button>
                    <button onClick={()=>setidx(2)}  className={idx===2 ? "w-16 md:w-12 md:h-12 md:text-xl   block my-5 rounded-full text-[28px] font-Bellefair h-16 bg-white  " : "w-16 md:w-12 md:h-12 md:text-xl   block my-5 rounded-full text-[28px] font-Bellefair h-16 bg-transparent border-white border-2 text-white"}>3</button>

                </div>
                <div className="text">
                    <SubHeading3 className={"text-white/50"}>THE TERMINOLOGY</SubHeading3>
                    <Heading3>{technology?.name}</Heading3>
                    <BodyText className={"text-primary"}>
                        {technology?.description}
                    </BodyText>
                </div>
            </div>
            <span></span>
            </div>
            <div className="col flex justify-end items-end md:justify-center md:items-center ">
                <img src={technology?.images.portrait} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Technology