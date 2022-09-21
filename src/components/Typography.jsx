import React from 'react'
const Heading1 = ({children})=>{
    return <h1 className='text-white sm:text-7xl sm:my-5 font-Bellefair text-[150px]'>{children}</h1>
}

const Heading2 = ({children})=>{
    return <h2 className='text-white sm:text-6xl sm:my-5 font-Bellefair text-[100px]'>{children}</h2>
}

const Heading3 = ({children})=>{
    return <h3 className='text-white font-Bellefair text-[56px]'>{children}</h3>
}

const Heading4 = ({children,className})=>{
    return <h4 className={`font-Bellefair text-[32px] ${className} `}>{children}</h4>
}

const Heading5 = ({children,className,...props})=>{
    return <h5 {...props} className={`font-Bellefair tracking-[4.72 px] text-[28px] ${className}`}>{children}</h5>
}

const SubHeading1 = ({children,className})=>{
    return <h1 className={`font-Bellefair md:text-[20px] text-[28px] ${className}`}>{children}</h1>
}
const SubHeading2 = ({children,className,...props})=>{
    return <h2 {...props} className={` font-Barlow tracking-[2.35px]  text-[14px] ${className}`}>{children}</h2>
}
const SubHeading3 = ({children,className,...props})=>{
    return <h2 {...props} className={`text-white font-Barlow tracking-tight  text-[16px] ${className}`}>{children}</h2>
}

const BodyText = ({children,className})=>{
    return <p className={`text-white font-Barlow  leading-8 text-[18px] ${className}`}>{children}</p>
}
export {Heading1,Heading2,Heading3,Heading4,Heading5,SubHeading1,SubHeading2,SubHeading3,BodyText}