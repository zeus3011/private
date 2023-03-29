import React from 'react'
import random from "../../assets/Images/pers.png"
import leftpic from "../../assets/Images/ploan.png"
// import { useState } from 'react'

import rupee from "../../assets/Images/bloan/rupee.png"
import approved from "../../assets/Images/bloan/approved.jpg"
import time from "../../assets/Images/bloan/time.png"
import { useState } from 'react'

// import { useState } from 'react'

import eligibility from './loaneligibility'
import Loanform from "./Loanform"
import HowtoApply from './HowtoApply'

const currentLoaninterest=[{
  Ltype:"Interest Rate Type",
   BLoan:"Floating",
   
 },
 {
  Ltype:"For Salaried Applicants",
   BLoan:"7.70%* to 14.00%*"
 },
 {
  Ltype:"For Self-Employed applicants",
   BLoan:"7.70%* to 14.00%*"
 }]


const Ploan = () => {
  const [loantype, setLoantype] = useState(currentLoaninterest);
  
  return (
  

    <>
    {/*title area starts  */}
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
    
    <Loanform />
    
    {/* apply here ends */}
    
    
    
    {/* features area starts */}
    
    
    <div className="mx-auto container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 px-8 bs-gray-100 mx-auto">
      <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
        <img src={time} alt="" className='w-20' />
        <p className="text-semibold text-lg text-purple-600 my-2">Minimal Documentation</p>
        <p>The Personal Loan Documentation process at CreditKlick varies from individual to individual. The requirements are based on your profession, income and loan ...</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
        <img src={approved} alt="" className='w-20'/>
        <p className="text-semibold text-lg text-purple-600 my-2">Balance Transfer</p>
        <p>Balance Transfer Facility to all existing Personal Loan holders running a successful Personal Loan with an external Bank: with the transfer of the Loan the applicant will benefit.</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
        <img src={rupee} alt="" className='w-16' />
        <p className="text-semibold text-lg text-purple-600 my-2">Minimum Rs50,000 Loan Amount</p>
        <p>The best personal loan banks in India for a ₹ 50,000 loans as they offer personal loan at lowest rate of 10.49%.</p>
      </div>
    </div>
    </div>
    
    
    {/* features area ends */}
    
    
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
    
    <div className='container mx-auto my-8 bg-gray-100 p-4'>
      <p className='text-xl font-semibold text-indigo-800 text-center'>Document required for a Business Loan</p>
      <p  className='text-teal-800 my-3 mx-4 text-md'>Keep the following documents on hand when filling the online application form</p>
       
      <li className='mx-5 list-disc my-1 text-md'> <b >KYC Documents - </b>
      Aadhar card, PAN card, voter ID card, driving licence or any other government-approved KYC document</li>
          <li className='mx-5 list-disc my-1 text-md'> <b >Address Proof - </b>
          Documents such as your electricity bill, rent agreement, or passport may be used as proof of address
          </li>
          <li className='mx-5 list-disc my-1 text-md'> <b >Financial Documents - </b>
          Copy of your GST returns, bank account statement and other financial documents</li>
     <li className='mx-5 list-disc my-1 text-md'> <b >Proof of Business Ownership - </b>
     The registration documents for your business</li>
      </div>
    
    
    
      {/* fees charges area starts */}
    
      <div className="mx-2 py-8">
      <div className='bg-blue-100 p-4 mx-auto container'>
        <p className="font-semibold text-xl text-center text-blue-900 my-4">Personal Loan Interest Rate Comparison</p>
        <p className="text-teal-800 mt-1">The personal loan interest rates vary between 8.30% p.a. and 49% p.a. Depending on the loan amount availed by you, your credit score, and repayment tenure, the interest rate charged on your loan is decided. If you maintain a high credit score and have a good relationship with the bank, then the interest rate on your personal loan can be lowered.</p>
    
    
        <table className='table-auto mx-auto mt-4 mt-3 w-4/5'  >
        <thead className='border bg-blue-300 text-blue-900 mx-auto'>
          <tr>
            <th className='p-3 border-r'>TYPE OF FEES</th>
            <th className='p-3 '>CHARGES APPLICABLE</th>
          </tr>
        </thead>
        {loantype.map((loanitem)=>(
        <tbody className='border bg-blue-200' key={loanitem}>
        <tr>
          <td className='border p-3 '>{loanitem.Ltype}</td>
          <td className='border p-3 '>{loanitem.BLoan}</td>
        </tr>
      </tbody>
         ))
        }
      </table>
      </div>
      </div>
    
      {/* fees and charges area ends */}
      <HowtoApply/>
        </>
  )
}

export default Ploan