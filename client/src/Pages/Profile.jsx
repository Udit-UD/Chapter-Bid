import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { ProfilePage } from '../Components/Profile/ProfilePage'
import { Footer } from '../Components/Home/Footer'

export const Profile = () => {
  return (
    <>
        <Navbar />
        <ProfilePage />
        <Footer />
    </>
  )
}
