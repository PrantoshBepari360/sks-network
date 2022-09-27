import React from 'react'
import { Footer } from '../../common/Footer'
import { Header } from '../../common/Header'
import { Banner } from '../Banner'
import { Home } from '../Home'
import { Mix } from '../Mix'

export const HomeMix = () => {
  return (
    <div>
      <div className="w-full bg-white fixed z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
        <Header></Header>
      </div>
      <br />
      <div className="w-full bg-[#5fcf80]">
        <Banner></Banner>
      </div>
      <div className="w-full">
        <Mix></Mix>
      </div>
      <div className="w-full">
        <Home></Home>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  )
}
