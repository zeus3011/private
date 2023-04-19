import React from 'react'
import Cibilg from "../../assets/Images/hscore.png"
import { Link } from 'react-router-dom'
const Cibilstr = () => {
  return (
    <>
    <div className="relative shadow-lg rounded-xl p-8  overflow-hidden bg-white">
      <div className=" grid md:grid-cols-2 grid-cols-1 justify-between">
          <div className="sm:max-w-lg m-auto space-y-8">
            <h1 className=" text-3xl font-semibold tracking-tight text-blue-900 md:text-5xl">
            Smart choices can improve your credit score, don't be silly.
            </h1>
            <p className="mt-4 md:text-xl text-md text-gray-500">
            A business credit report (CCR) is a record of your business credit history. It was created from data submitted to CIBIL by lenders across India. CIBIL RANK summarizes your CCR as a number on a scale of 1 to 10, where 1 is the best ranking. The CIBIL Rank & Company Credit Report (CCR) is an indicator of your loan eligibility.
            </p>
            <Link
               to="/Credit-score"
                className="inline-block  rounded-md border border-transparent bg-indigo-600 py-2 px-4 mx-auto text-center font-medium text-white hover:bg-indigo-700"
              >
                Check Cibil Now
              </Link>
          </div>
          <div className='flex m-auto'>
            <div className="md:w-3/5 w-4/5 m-auto">
              {/* Decorative image grid */}
             <img src={Cibilg} className='' alt=''/>

           
            </div>
            
          </div>
        </div>
    </div>

    </>
  )
}

export default Cibilstr