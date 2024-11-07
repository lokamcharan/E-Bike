import React from 'react'

import SparePartsList from '../Fetch'
import Footer from '../Footer'
import Direct from './Navbar'



function Home() {
  return (
    <div>
       <Direct/>
       
        <SparePartsList/>
        <br></br>
        <Footer/>
      
    </div>
  )
}

export default Home
