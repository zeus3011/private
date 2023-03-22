import React from 'react'
import random from "../../assets/Images/pers.png"
import leftpic from "../../assets/Images/ploan.png"
// import { useState } from 'react'
import eligibility from './loaneligibility'



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
      <p class="mt-2 text-blue-800">Almost all scheduled banks and scores of Housing Finance Companies (HFCs) offer home loans to finance the purchase of home properties. The tenure of a home loan can go up to 30 years, depending on the age and repayment capacity of the applicant. Home loan interest rates offered to the applicants would depend on their credit score, monthly income, loan amount, LTV ratio, job profile, employer’s profile, etc. The home loan amount can go up to 75% to 90% of the home property’s value depending on the credit profile of the loan applicant and the caps on the LTV ratios set by the lenders and the RBI. At CreditKlick.com, we help you compare home loan interest rates and other features offered by top banks and HFCs and make online applications for the best home loan options. </p>
    </div>
    <div class="md:shrink-0 ">
      <img class=" object-contain rounded-xl max-w-xs p-2" src={random} alt="Modern building architecture"/>
    </div>
  </div>
</div>
</div>
</div>
{/* tile area ends */}


{/* apply here starts */}
<div className="mx-2 my-8">
<div className="bg-blue-100  mx-auto container justify-between rounded-xl shadow-md ">
  <div className="flex flex-row">
  {/* <img src={leftpic} alt="" className='max-w-xs' /> */}
      <p className='text-center mx-auto my-auto'>Apply for a home loan</p>
    <div className=' text-center mx-auto my-auto flex flex-col '>
      <form class="w-full max-w-sm">
        <div class="flex items-center border-b border-teal-500 py-2">
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight text-center focus:outline-none" type="text" placeholder="Your mobile number" aria-label="Full name"/>
        </div>   
        </form>
        <div className="flex flex-col my-4">
          <span>
        <input type="radio" />
        <label htmlFor="salaried" className='text-base font-semibold mx-1'> SALARIED</label>
        </span>
        <span>
        <input type="radio" />
        <label htmlFor="salaried" className='text-base font-semibold mx-1'> SELF EMPLOYED</label> </span>
        </div>
    </div>
  <div className='mx-auto my-auto'>
    <button class="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl w-auto">GO</button>
  </div>
  </div>
</div>
</div>

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