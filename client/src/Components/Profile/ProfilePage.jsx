import React from 'react'
import { Sidebar } from './Sidebar'
import { ProfileMain } from './ProfileMain'

export const ProfilePage = () => {
  return (
    <>
        <div className='mt-16 h-90 w-full flex justify-center items-center' >
            <div className="h-banner w-90% flex justify-center  items-center">
                <Sidebar activePage="profile"/>
                <div className="w-4/5 h-banner flex justify-center">
                  <ProfileMain />
                </div>
            </div>
        </div>
    </>

  )
}
