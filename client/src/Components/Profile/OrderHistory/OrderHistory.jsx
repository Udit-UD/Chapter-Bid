import React from 'react'
import { Sidebar } from '../Sidebar'
import { OrderMain } from './OrderMain'

export const OrderHistory = () => {
  return (
    <>
        <div className='h-90 w-full mb-12 flex justify-center items-center' >
            <div className="mt-32 h-banner w-90% flex justify-center  items-center">
                <Sidebar activePage="orderhistory"/>
                <div className="w-4/5 h-banner flex justify-center">
                  <OrderMain />
                </div>
            </div>
        </div>
    </>

  )
}
