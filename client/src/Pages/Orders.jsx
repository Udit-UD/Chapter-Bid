import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { OrderHistory } from '../Components/Profile/OrderHistory/OrderHistory'
import { Footer } from '../Components/Home/Footer'

export const Orders = () => {
  return (
    <>
        <Navbar />
        <OrderHistory />
        <Footer />
    </>
  )
}
