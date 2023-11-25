import React from 'react'
import { ProdNav } from '../Components/ProductPage/ProdNav'
import { BiddingMain } from '../Components/Bidding/BiddingMain'
import { Footer } from '../Components/Home/Footer'

export const Bidding = () => {
  return (
    <>
       <ProdNav />
       <div className="min-h-screen">
        <BiddingMain />
       </div>
       <Footer />
    </>
  )
}
