import React from 'react'
import Cibilg from "../../assets/Images/hscore.png"
import { Link } from 'react-router-dom'
const Cibilstr = () => {
  return (
    <>
      <div className="lg:hidden sm:block ">
              {/* Decorative image grid */}
             <img src={Cibilg} className='w-60 mx-auto mt-6' alt=''/>

           
            </div>
    <div className="relative shadow-lg rounded-xl p-3  overflow-hidden bg-white">
      <div className=" ">
        <div className="flex lg:gap-48 mx-auto max-w-7xl px-4 sm:static sm:px-6 ">
          <div className="sm:max-w-lg lg:mt-48 space-y-8">
            <h1 className="font text-3xl font-semibold tracking-tight text-blue-900 sm:text-5xl">
            Smart choices can improve your credit score, don't be silly.
            </h1>
            <p className="mt-4 text-lg text-gray-500">
            A business credit report (CCR) is a record of your business credit history. It was created from data submitted to CIBIL by lenders across India. CIBIL RANK summarizes your CCR as a number on a scale of 1 to 10, where 1 is the best ranking. The CIBIL Rank & Company Credit Report (CCR) is an indicator of your loan eligibility.
            </p>
            <Link
               to="/Credit-score"
                className="inline-block mt-2 rounded-md border border-transparent bg-indigo-600 py-3 px-8 mx-auto text-center font-medium text-white hover:bg-indigo-700"
              >
                Check Cibil Now
              </Link>
          </div>
          <div className='hidden lg:block'>
            <div className="w-4/8">
              {/* Decorative image grid */}
             <img src={Cibilg} className='' alt=''/>

           
            </div>
            
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Cibilstr