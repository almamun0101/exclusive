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
    </div>
  )
}

export default page