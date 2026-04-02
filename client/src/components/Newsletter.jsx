import React from 'react'

export const Newsletter = () => {
  return (
    <div className="flex justify-center py-20 bg-light">

        <div className="flex flex-col items-center bg-white shadow-[0px_4px_25px_0px_#0000000D] text-gray-900/60 rounded-xl max-w-lg md:w-full w-11/12 md:py-8 py-6">

            {/* Icon */}
            <div className="flex items-center justify-center p-3 bg-blue-100 rounded-full">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/model/faceIcon.svg"
                  alt="newsletter icon"
                />
            </div>

            {/* Heading */}
            <h2 className="text-slate-900 font-medium mt-3 text-lg">
                Get Exclusive Car Rental Deals
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-900/60 mt-1 md:w-80 w-72 text-center">
                Subscribe to receive special discounts, new car updates, and travel offers directly to your inbox.
            </p>

            {/* Email input */}
            <div className="flex items-center mt-5 w-full md:px-16 px-6">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-sm border-r-0 outline-none border border-gray-500/50 pl-3 w-full h-10 rounded-l-md"
                />

                <button
                    type="button"
                    className="font-medium text-sm text-white bg-primary w-36 h-10 rounded-r-md"
                >
                    Subscribe
                </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-500/20 mt-5"></div>

            {/* Login text */}
            <p className="text-sm mt-4">
                Already a member? 
                <a className="text-blue-500 underline ml-1" href="#">
                    Sign In
                </a>
            </p>

        </div>

    </div>
  )
}