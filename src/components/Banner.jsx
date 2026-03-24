import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center
    justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558fe] to-[#A9CFFF]
    max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
         <div classname="text-white">
            <h2>Do You Own a Luxury Car?</h2>
            <p>Monetize your vehicle effortlessly by listing it on carrental.</p>
            <p>We take care of insurance,driver verification and secure payments-
                so you can passive income,stress-free.
            </p>
         </div>
         <img src={assets.banner_car_image} alt="car" className="max-h-45 mt-10"/>
    </div>
  )
}

export default Banner