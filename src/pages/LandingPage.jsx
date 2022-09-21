import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { PrimaryButton } from '../components/Buttons'
import { BodyText, Heading1,  Heading5 } from '../components/Typography'

function LandingPage() {
 
  return (
    <div className='w-full pt-[20vh] min-h-screen landing-bg'>
      <div className="container md:grid-cols-1 mx-auto grid grid-cols-2">
        <div className="col  flex justify-end flex-col min-h-[70vh] ">
          <Heading5 className={"text-primary"}>SO, YOU WANT TO TRAVEL TO</Heading5>
          <Heading1>SPACE</Heading1>
          <BodyText className={"text-primary"}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</BodyText>
        </div>
        <div className="col min-h-[70vh] flex justify-end items-end">
          <Link to={'/Destination'}>
          <PrimaryButton>Explore</PrimaryButton>
          </Link>
        </div>
      </div>
      </div>
  )
}

export default LandingPage