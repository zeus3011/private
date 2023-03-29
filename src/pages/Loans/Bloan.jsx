import React from 'react'
import bsloan from "../../assets/Images/businessloan.png"
import { useState } from 'react'
// import eligibility from './loaneligibility'
import rupee from "../../assets/Images/bloan/rupee.png"
import approved from "../../assets/Images/bloan/approved.jpg"
import percentage from "../../assets/Images/bloan/percentage.png"
import time from "../../assets/Images/bloan/time.png"
import Loanform from "./Loanform"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import HowtoApply from './HowtoApply'
import eligibility from './loaneligibility'
import fees from "./feesandcharges"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import ListBulletIcon from '@heroicons/react/20/solid'


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

const topUploan=[{
  type:"Interest Rate Type",
  topUp:"Floating"
},
{
  type:"For Salaried Applicants",
  topUp:"8.65%* to 15.00%*"
},
{
  type:"For self-Employed Applicants",
  topUp:"8.85%* to 15.00%*"
}]

const Bloan = () => {
  const [loantype, setLoantype] = useState(currentLoaninterest);
  const [tuLoan, setTuLoan] = useState(topUploan);
  return (
  

    <>
{/* starting tile area starts  */}
<div className="mx-2">
    <div className="mx-auto container shadow-md bg-blue-100 rounded-lg">
    <div class=" overflow-hidden ">
  <div class="md:flex">
  <div class="md:shrink-0 p-5 mx-auto">
      <img class=" object-cover rounded-xl max-w-xs" src={bsloan} alt="Modern building architecture"/>
    </div>
    <div class="p-8 my-auto">
      <div class="uppercase text-xl font-semibold text-blue-900">business loan</div>
      <p className='text-semibold text-base text-blue-900 my-2'>Small businesses and entrepreneurs can get business loans to meet their capital needs. Over 20 financial institutions offer tailored business loans at attractive rates to meet your financial needs.</p>
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
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-8 bs-gray-100 mx-auto">
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={time} alt="" className='w-20' />
    <p className="text-semibold text-lg text-purple-600 my-2">Apply in just 5 minutes</p>
    <p>Now a days, it is not difficult to apply for a loan in 5 minutes. Since money lending and loan applications started online, applying for instant loans became easy</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={approved} alt="" className='w-20'/>
    <p className="text-semibold text-lg text-purple-600 my-2">Get approved within 72 hours</p>
    <p>The path to achieving your life goals may be often hindered by financial hurdles that may seem too steep to skip. Now with 72 hours Loans you can avail instant offers for a range of uses</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl'>
    <img src={rupee} alt="" className='w-16' />
    <p className="text-semibold text-lg text-purple-600 my-2">Get loans up to Rs. 50 lakhs</p>
    <p>Avail Business Loan of up to Rs.50 Lakh at attractive interest rates to meet personal urgencies that can crop up anytime in life.</p>
  </div>
  <div className='hover:shadow-xl m-2 p-4 rounded-xl' > 
    <img src={percentage} alt="" className='w-16'/>
    <p className="text-semibold text-lg text-purple-600 my-2">Competitive interest rates</p>
    <p>Interest for loans with similar terms charged by private lending institutions in the same area to borrowers of equivalent creditworthiness and access to alternative credit.</p>
  </div>
</div>
</div>


{/* features area ends */}

{/* eligibility area starts */}

<div className="mx-2 p-2">
<div className="container mx-auto text-center">
  <p className='text-xl font-semibold text-indigo-800'>Business Loan Eligibility Criteria</p>
  <p  className='text-teal-800 mt-1'>The following factors are taken into consideration when a lender goes through your loan application. If you meet these criteria, you are eligible for a Business loan:</p>
 
  <table className='table-auto mx-auto mt-4 mt-3'  >
    <thead className='border bg-blue-200 text-blue-900'>
      <tr>
        <th className='border p-3'>Criteria</th>
        <th className='border p-3'>Salaried</th>
        <th className='p-3'>Self-Employed</th>
      </tr>
    </thead>
    {eligibility.map((itemcr)=>(
    <tbody className='border' key={itemcr}>
    <tr>
      <td className='border p-3'>{itemcr.criteria}</td>
      <td className='border p-3'>{itemcr.salaried}</td>
      <td className='border p-3'>{itemcr.selfemployed}</td>
    </tr>
  </tbody>
     ))
    }
  </table>


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
</div>

{/* eligibility area ends */}


{/* interest rate area starts */}

<div className="mx-2 py-8">
  <div className='bg-blue-100 p-4 mx-auto container'>
    <p className="font-semibold text-xl text-center text-blue-900 my-4">Business Loan Interest Rate Comparison</p>
    <p className="text-teal-800 mt-1">The minimum loan amount offered starts from as low as Rs. 10,000 that can be availed from Small Finance Banks (SFBs), Regional Rural Banks (RRBs), or Micro Finance Institutions (MFIs). Borrowers can avail collateral-free business loans of amounts up to Rs. 2 crores from leading Private and Public Sector Banks, NBFCs, etc. Small Business Loans are also available for Startups and MSMEs at competitive interest rates.</p>

    <p className="font-semibold text-xl text-center text-blue-900 mt-8">Current Business Loan interest rates:2022</p>

    <table className='table-auto mx-auto mt-4 mt-3 w-4/5'  >
    <thead className='border bg-blue-300 text-blue-900 mx-auto'>
      <tr>
        <th className='p-3 border-r'>LOAN TYPE</th>
        <th className='p-3 '>BUSINESS LOAN</th>
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



  <table className='table-auto mx-auto mt-4 mt-3 w-4/5'  >
    <thead className='border bg-blue-300 text-blue-900 mx-auto'>
      <tr>
        <th className='border p-3'>LOAN TYPE</th>
        <th className='border p-3'>TOP-UP LOAN</th>
      </tr>
    </thead>
    {tuLoan.map((topupitem)=>(
    <tbody className='border bg-blue-200' key={topupitem}>
    <tr>
      <td className='border p-3 '>{topupitem.type}</td>
      <td className='border p-3 '>{topupitem.topUp}</td>
    </tr>
  </tbody>
     ))
    }
  </table>

  <p className='fa-font-awesome text-lg text-red-500 p-4'>* The Values in tables may vary.</p>

  </div>
</div>

{/* interest rate area ends */}


{/* fees and charges area starts */}

    <div className=" mx-auto">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 my-3 text-left text-sm font-medium text-purple-900 hover:bg-blue-200 focus:outline-none ">
                <span>Business Loan Rates & Charges</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-4 text-sm text-gray-500">
                <div className="w-lg flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ">
          <table className='table-auto mx-auto'  >
            <thead className='border bg-blue-200 text-blue-900'>
              <tr>
                <th className='border p-3 w-60'>Type Of Fees</th>
                <th className='border p-3'>Applicable Charges</th>
              </tr>
            </thead>
          {fees.map((itemcr)=>(
            <tbody className='border' key={itemcr}>
              <tr>
                <td className='border p-3'>{itemcr.typeoffees}</td>
                <td className='border p-3'>{itemcr.appcharges}</td>
              </tr>
            </tbody>
            ))
          }
          </table>
          </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        


        <Disclosure >
          {({ open }) => (
            <>
               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 my-3 text-left text-sm font-medium text-purple-900 hover:bg-blue-200 focus:outline-none ">
                <span>Annual Maintenance Charges</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <div className="w-lg flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <table className='table-auto mx-auto'  >
            <thead className='border bg-blue-200 text-blue-900 '>
              <tr>
                <th className='border p-3 w-40'>Loan Variant</th>
                <th className='border p-3'>Charges</th>
              </tr>
            </thead>
            <tbody className='border'>
              <tr>
                <td className='border p-3'>Flexi Term loan	</td>
                <td className='border p-3'>0.25% plus applicable taxes of the total withdrwable amount (as per the repayment schedule)</td>
              </tr><tr>
                <td className='border p-3'>Flexi Hybrid loan	</td>
                <td className='border p-3'>1% plus applicable taxes of the total withdrawable amount during the initial tenor. 0.25% plus applicable taxes of the total withdrawable amount during subsequent tenor.</td>
              </tr>

            </tbody>
          </table>
          </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>



        <Disclosure >
          {({ open }) => (
            <>
               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 my-3 text-left text-sm font-medium text-purple-900 hover:bg-blue-200 focus:outline-none ">
                <span>Foreclosure Charges</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <div className="w-lg flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <table className='table-auto mx-auto'  >
            <thead className='border bg-blue-200 text-blue-900'>
              <tr>
                <th className='border p-3'>Loan Variant</th>
                <th className='border p-3'>Charges</th>
              </tr>
            </thead>
            <tbody className='border'>
              <tr>
                <td className='border p-3'>Loan (term loan/ advance EMI/ step-up structured monthly instalments/ step-down structured monthly instalment)	</td>
                <td className='border p-3'>4%+ applicable taxes on the outstanding loan amount payable by the borrower on the date of such full pre-payment</td>
              </tr>
              <tr>
                <td className='border p-3'>Flexi Term loan</td>
                <td className='border p-3'>4% plus applicable taxes of the total withdrawable amount as per the repayment schedule, on the date of such full pre-payment</td>
              </tr>
              <tr>
                <td className='border p-3'>Flexi Hybrid loan</td>
                <td className='border p-3'>4% plus applicable taxes of the total withdrawable amount as per the repayment schedule, on the date of such full pre-payment
</td>
              </tr>

            </tbody>
          </table>
          </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>



        <Disclosure >
          {({ open }) => (
            <>
               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 my-3 text-left text-sm font-medium text-purple-900 hover:bg-blue-200 focus:outline-none ">
                <span>Part-Payment Charges</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <div className="w-lg flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <table className='table-auto w-full'  >
            <thead className='border bg-blue-200 text-blue-900'>
              <tr>
                <th className='border p-3 w-2/4'>Time Period</th>
                <th className='border p-3'>Charges</th>
              </tr>
            </thead>
            <tbody className='border'>
              <tr>
                <td className='border p-3'>More than 1 month from the date of loan disbursal</td>
                <td className='border p-3'>2% plus taxes on the amount part-prepaid</td>
              </tr>              
            </tbody>
          </table>
          </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>

{/* fees and charges area ends */}

{/* how  to apply starts */}
<HowtoApply />
{/* how to apply ends */}
    </>
  )
}

export default Bloan