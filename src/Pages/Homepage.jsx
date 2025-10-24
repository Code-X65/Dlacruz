import React from 'react'
import Hero from '../Components/Hero'
import Casestudy from '../Components/Casestudy'
import SubscriptionForm01 from '../Components/SubscriptionForm01'
import HelpOurClient from '../Components/HelpOurClient'
import Careers from '../Components/Careers'
import Socialimpact from '../Components/Socialimpact'
import HomeBanner from '../Components/HomeBanner'
const Homepage = () => {
  return (
   <>
   <Hero />
   <Casestudy /> 
   {/* <SubscriptionForm01 /> */}
   <HelpOurClient />
   <Careers />
   <Socialimpact />
   <HomeBanner />
   </>
  )
}

export default Homepage