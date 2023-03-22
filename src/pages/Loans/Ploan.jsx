import React from 'react'
import random from "../../assets/Images/pers.png"
import leftpic from "../../assets/Images/ploan.png"
// import { useState } from 'react'

import eligibility from './loaneligibility'


const Ploan = () => {
  // const [eligible, setEligible] = useState(eligibility);
  return (
  

    <>
{/* starting tile area starts  */}
<div className="mx-2">
    <div className="mx-auto container shadow-md bg-indigo-100 rounded-lg">
    <div class=" overflow-hidden ">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase text-small text-blue-00 font-semibold text-blue-900">PERSONAL LOAN</div>
      <p class="mt-2 text-blue-800">Personal loan is a short to medium term unsecured loan granted to an individual. It has no end use restriction except for speculative purposes. Thus, one can avail personal loan for meeting wedding, education, travel or home renovation expenses; for purchasing consumer durables, two wheelers or second-hand vehicles; etc. Flexibility of usage, minimal documentation and quick processing make personal loan a preferred financing option. Unlike other loans, it usually has a shorter repayment tenure ranging from 1-5 years. Depending upon the individual applicant's profile and lender, the APR (Annual Percentage Rate) of a personal loan may vary from 11.29% to 35%. </p>
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
      <p className='text-center mx-auto my-auto'>Apply for a personal loan</p>
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
<div className="container mx-auto text-center ">
  <p className='text-lg font-semibold text-indigo-800'>Personal Loan Eligibility Criteria</p>
  <p className='text-teal-800'>The following factors are taken into consideration when a lender goes through your loan application. If you meet these criteria, you are eligible for a personal loan:</p>
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

export default Ploan