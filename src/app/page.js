import Best from '@/component/Best'
import Categories from '@/component/Categories'
import Explore from '@/component/Explore'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Navbar from '@/component/Navbar'
import New from '@/component/New'
import Today from '@/component/Today'
import Topbar from '@/component/Topbar'

import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Header/>
      <Today/>
      <Categories/>
      <Best/>
      <Explore/>
      <New/>
      <Footer/>
    </div>
  )
}

export default page