import Best from '@/component/Best'
import Categories from '@/component/Categories'
import Header from '@/component/Header'
import Navbar from '@/component/Navbar'
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
    </div>
  )
}

export default page