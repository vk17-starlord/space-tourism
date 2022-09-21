import React, { useState } from 'react'
import logo from '../../assets/shared/logo.svg'
import {Link} from 'react-router-dom'
import { SubHeading3 } from '../Typography'
import { useLocation} from 'react-router-dom';
import SideBar from './SideBar';

function Header() {
  const location = useLocation();
  const [openMenu, setopenMenu] = useState(false);
  const toggle = ()=>{
    setopenMenu(!openMenu)
  }
  return (
    <div className='w-full    py-10 min-h-[20vh] fixed'>
      {
        openMenu?<SideBar toggle={toggle}/>: null
      }
  <div className=" sm:flex  sm:mx-5 sm:justify-between  items-center ml-20 grid grid-cols-[2fr_3fr_7fr] mx-auto">
  <img src={logo} alt="" />
      <div className="line sm:hidden z-80 w-full min-h-[2px]  bg-[#979797]" ></div>
      <div className="link sm:hidden px-10 backdrop-blur-xl flex  justify-center items-center bg-white/10 w-full ">
        <Link to={'/'}>
          <SubHeading3 className={location.pathname !== '/' ? "py-8 mx-5 hover:border-b-2 border-white" : "py-8 my-3 border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>00</span> HOME
          </SubHeading3>
        </Link>
        <Link to={'/Destination'}>
          <SubHeading3 className={location.pathname !== '/Destination' ? "py-8 mx-5 hover:border-b-2 border-white" : "py-8 my-3 border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>01</span> DESTINATION
          </SubHeading3>
        </Link>
        <Link to={'/Crew'}>
          <SubHeading3 className={location.pathname !== '/Crew'? "py-8 mx-5 hover:border-b-2 border-white" : "py-8 my-3 border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>02</span> CREW
          </SubHeading3>
        </Link>
        <Link to={'/Technology'}>
          <SubHeading3 className={location.pathname !== '/Technology' ? "py-8 mx-5 hover:border-b-2 border-white" : "py-8 my-3 border-b-2 border-white"}>
            <span className='mr-3 md:hidden'>03</span> TECHNOLOGY
          </SubHeading3>
        </Link>
      </div>
      <button className='hidden sm:flex' onClick={()=>toggle()}>
        <img src="./assets/shared/icon-hamburger.svg" alt="" />
      </button>
  </div>
    </div>
  )
}

export default Header