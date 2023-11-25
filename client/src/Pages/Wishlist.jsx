import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Wishlistt } from '../Components/Profile/Wishlist/Wishlistt'
import { Footer } from '../Components/Home/Footer'

export const Wishlist = () => {
  return (
    <div>
        <Navbar />
        <Wishlistt />
        <Footer />
    </div>
  )
}
