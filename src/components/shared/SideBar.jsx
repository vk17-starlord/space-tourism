import React from 'react'
import { Link } from 'react-router-dom'
import { SubHeading3 } from '../Typography'
import { useLocation } from 'react-router-dom'

function SideBar({toggle}) {
    const location = useLocation()
  return (
    <div className='fixed flex-col flex justify-center items-center text-white w-[75vw] right-0 top-0 min-h-screen backdrop-blur-xl bg-[#979797]/10 transition-all'>
   <div className="absolute top-10 py-3 right-5" onClick={()=>toggle()}>
    <img src="./assets/shared/icon-close.svg" alt="" />
   </div>
   <div className="container">
   <Link to={'/'}>
          <SubHeading3 className={location.pathname !== '/' ? "my-5 mx-5 hover:border-b-2 border-white" : "my-5 w-[max-content]  mx-5 border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>00</span> HOME
          </SubHeading3>
        </Link>
        <Link to={'/Destination'}>
          <SubHeading3 className={location.pathname !== '/Destination' ? "my-5 mx-5 hover:border-b-2 border-white" : "my-5 mx-5 w-[max-content] border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>01</span> DESTINATION
          </SubHeading3>
        </Link>
        <Link to={'/Crew'}>
          <SubHeading3 className={location.pathname !== '/Crew'? "my-5 mx-5 hover:border-b-2 border-white" : "my-5 mx-5 w-[max-content] border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>02</span> CREW
          </SubHeading3>
        </Link>
        <Link to={'/Technology'}>
          <SubHeading3 className={location.pathname !== '/Technology' ? "my-5 mx-5 hover:border-b-2 border-white" : "my-5 w-[max-content] mx-5 border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>03</span> TECHNOLOGY
          </SubHeading3>
        </Link>
 
   </div>
    </div>
  )
}

export default SideBar