import Best from '@/component/Best'
import Categories from '@/component/Categories'
import Explore from '@/component/Explore'
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
    </div>
  )
}

export default page