import React from 'react'
import { Product } from '../Components/ProductPage/Product'
import { ProdNav } from '../Components/ProductPage/ProdNav'
import { Footer } from "../Components/Home/Footer";
import { data } from "../constants/BooksData";



export const ProductPage = () => {
  return (
    <div>
        <ProdNav />
        <Product data={data} />
        <div className="mt-16">
          <Footer />
        </div>
    </div>
  )
}
