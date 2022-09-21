import React from 'react'

const PrimaryButton = ({children})=>{
      return <button className='w-[200px] h-[200px] mx-10 transition-all  hover:ring-[#979797]/20  hover:ring-[50px] rounded-full bg-white  text-3xl font-Bellefair tracking-[2px]'>
{children}
      </button>
}

export  {PrimaryButton};