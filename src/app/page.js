import Header from '@/component/Header'
import Navbar from '@/component/Navbar'
import Topbar from '@/component/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default page