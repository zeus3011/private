import React from 'react'
import random from "../../assets/Images/pers.png"
import leftpic from "../../assets/Images/ploan.png"
// import { useState } from 'react'
import eligibility from './loaneligibility'
import Loanform from './Loanform'


const Hloan = () => {
  // const [eligible, setEligible] = useState(eligibility);
  return (
  

    <>
    {/* starting tile area starts  */}
    <div className="mx-2">
        <div className="mx-auto container shadow-md bg-indigo-100 rounded-lg">
        <div class=" overflow-hidden ">
      <div class="md:flex">
        <div class="p-8">
          <div class="uppercase text-small text-blue-00 font-semibold text-blue-900">home loan</div>
          <p class="mt-2 text-blue-800">Banks, along with Housing Finance Companies (HFCs), offer home loans that range from 75% to 90 per cent of the property's worth according to the credit history of the loanee subject to the limits on LTV ratios set by banks and RBI. The term of a home loan could be as long as 30 years, based on the borrower's age and capacity to repay the loan applicant. On CreditKlick.com, We help you evaluate the interest rates for housing loans and other services that leading banks and HFCs offer. You can also apply online to get the best option for your credit report.</p>
        </div>
        <div class="md:shrink-0 ">
          <img class=" object-contain rounded-xl max-w-xs mx-auto p-2" src={random} alt="Modern building architecture"/>
        </div>
      </div>
    </div>
    </div>
    </div>
    {/* tile area ends */}
    
    
    {/* apply here starts */}
    
    <Loanform />
    
    {/* apply here ends */}
    
    <div className="mx-2 p-2">
    <div className="container mx-auto text-center">
      <p className='text-lg font-semibold text-indigo-800'>Home Loan Eligibility Criteria</p>
      <p  className='text-teal-800'>The following factors are taken into consideration when a lender goes through your loan application. If you meet these criteria, you are eligible for a home loan:</p>
      <table className='table-auto mx-auto mt-4 mt-3' >
        <thead  className='border bg-blue-200 text-blue-900' >
          <tr>
            <th className='border p-3'>Criteria</th>
            <th className=' border p-3'>Salaried</th>
            <th className='p-3'>Self-Employed</th>
          </tr>
        </thead>
        {eligibility.map((itemcr)=>(
        <tbody className='border' key={itemcr}>
          <tr>
            <td className='border p-2'>{itemcr.criteria}</td>
            <td className='border p-2'>{itemcr.salaried}</td>
            <td className='border p-2'>{itemcr.selfemployed}</td>
          </tr>
        </tbody>
         ))
        }
      </table>
    </div>
    </div>
        </>
  )
}

export default Hloan