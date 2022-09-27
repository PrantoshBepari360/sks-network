import React from 'react'
import { Footer } from '../../common/Footer'
import { Header } from '../../common/Header'
import { Akdesh } from '../Akdesh'
import { Banner } from '../Banner'
import { Mix } from '../Mix'

export const RagulerMix = () => {
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
        <Akdesh></Akdesh>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  )
}
