import React, { useEffect, useState } from 'react'
import { BodyText, Heading2, Heading5, SubHeading1, SubHeading2 } from '../components/Typography';
import { useData } from '../context/DataContext'

function Destination() {
  const data = useData();
  const [name, setname] = useState("Moon");
  const [Destination, setDestination] = useState(null);


  useEffect(() => {
    if(data){
   
      let currentData = data.destinations.filter((ele)=>{
        return ele.name === name;
      })[0]
     setDestination(currentData);
    }
  }, [data,name]);


  return (
    <div className='w-full destination-bg min-h-screen pt-[20vh]'>
        <div className="container md:flex md:flex-col mx-auto grid grid-cols-2  py-10 ">
            <div className="col md:justify-center md:items-center md:min-h-[auto] md:my-10 min-h-[80vh] flex justify-start items-start flex-col">
            <SubHeading1 className={"text-white pt-0 "}><span className='opacity-50 mr-5'>01</span> PICK YOUR DESTINATION</SubHeading1>
                <img className='my-10 w-[60%] object-cover' src={Destination ? Destination.images.png : ""} alt="" />
            </div>
            <div className="col flex-col min-h-[80vh] md:min-h-[auto] flex justify-start items-start">
            <div className="tab-header flex justify-center">
                <SubHeading2 onClick = {()=>setname("Moon")} className={name==="Moon"?"text-white border-b-2 border-white cursor-pointer  mx-3":"text-primary cursor-pointer opacity-50 mx-3"}>MOON</SubHeading2>
                <SubHeading2 onClick = {()=>setname("Mars")} className={name==="Mars"?"text-white border-b-2 border-white cursor-pointer  mx-3":"text-primary cursor-pointer opacity-50 mx-3"}>MARS</SubHeading2>
                <SubHeading2 onClick = {()=>setname("Europa")} className={name==="Europa"?"text-white border-b-2 border-white cursor-pointer  mx-3":"text-primary cursor-pointer opacity-50 mx-3"}>EUROPA</SubHeading2>
                <SubHeading2 onClick = {()=>setname("Titan")} className={name==="Titan"?"text-white border-b-2 border-white cursor-pointer  mx-3":"text-primary cursor-pointer opacity-50 mx-3"}>TITAN</SubHeading2>

          </div>

           <Heading2 >{Destination ? Destination.name : ""}</Heading2>
           <BodyText className={"text-primary"} > {Destination ? Destination.description : ""} </BodyText>
           <div className="line w-full h-[1px] bg-[#979797] opacity-50 mt-12 mb-5"></div> 
               <div className="grid w-full grid-cols-2">
                <div className="col">
                <SubHeading2 className={"text-primary my-5"}>AVG DISTANCE</SubHeading2>
                <Heading5 className={"text-white uppercase"}> {Destination ? Destination.distance : "" } </Heading5>
                </div>
                <div className="col">
                <SubHeading2 className={"text-primary my-5"}>AVG DISTANCE</SubHeading2>
                <Heading5 className={"text-white uppercase"}> {Destination ? Destination.travel  : "" } </Heading5>

                </div>
               </div>
             </div>
    

        </div>
    </div>
  )
}

export default Destination