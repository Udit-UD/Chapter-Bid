import React from 'react'
import { Sidebar } from '../Sidebar'
import { WishlistMain } from './WishlistMain'

export const Wishlistt = () => {
  return (
    <>
        <div className='h-90 w-full mb-12 flex justify-center items-center' >
            <div className="mt-32 h-banner w-90% flex justify-center  items-center">
                <Sidebar activePage="wishlist"/>
                <div className="w-4/5 h-banner flex justify-center">
                  <WishlistMain />
                </div>
            </div>
        </div>
    </>

  )
}
