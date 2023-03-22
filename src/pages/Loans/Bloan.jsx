import React from 'react'
import bsloan from "../../assets/Images/businessloan.png"
// import leftpic from "../../assets/Images/ploan.png"
import { useState } from 'react'
import eligibility from './loaneligibility'
import rupee from "../../assets/Images/bloan/rupee.png"
import approved from "../../assets/Images/bloan/approved.jpg"
import percentage from "../../assets/Images/bloan/percentage.png"
import time from "../../assets/Images/bloan/time.png"


const currentLoaninterest=[{
 Ltype:"Interest Rate Type",
  BLoan:"Floating"
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
    <div class="p-8">
      <div class="uppercase text-xl font-semibold text-blue-900">business loan</div>
      <p className='text-semibold text-base text-blue-900 my-2'>Looking for a Loan that helps you Grow your Business?</p>
      <p class="mt-2 text-justify">Business loan is a credit facility offered by Banks/NBFCs to meet the financial requirements of self-employed customers and enterprises. It can be availed by individuals, MSMEs, business owners, entrepreneurs, professionals (CAs/Doctors), and several other business entities.Business loans are majorly classified into two types, such as secured loans and unsecured loans. Secured loans are types of loans that require collateral/security, that borrowers need to deposit with the lender to avail business loans. However, in the case of unsecured loans, there is no need to submit any collateral/security with the Bank, NBFC, or any other lender.Banks/NBFCs offer both secured and unsecured business loans, including Term Loans (Short-term/Intermediate-term/Long-term), Working Capital Loans, Cash Credit, Overdraft, Letter of Credit, Bill/Invoice Discounting, Equipment Finance, Machinery Loans, Point-of-Sale (POS) Loans/Merchant Cash Advance, Fleet Finance, Loans under Bank Guarantee (BG), Loan under Govt. schemes, etc.. </p>
    </div>
    <div class="md:shrink-0 ">
      <img class=" object-cover rounded-xl max-w-sm mr-6 p-3" src={bsloan} alt="Modern building architecture"/>
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
      <p className='text-center mx-auto my-auto text-indigo-900'>Apply for a home loan</p>
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


{/* features area stsrts */}


<div className="mx-auto container">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-8 bs-gray-100 mx-6">
  <div className='hover:shadow-xl m-3 p-4 rounded-xl'>
    <img src={time} alt="" className='w-20' />
    <p className="text-semibold text-md">Apply in just 5 minutes</p>
    <p>Now a days, it is not difficult to apply for a loan in 5 minutes. Since money lending and loan applications started online, applying for instant loans became easy</p>
  </div>
  <div className='hover:shadow-xl m-3 p-4 rounded-xl'>
    <img src={approved} alt="" className='w-20'/>
    <p className="text-semibold text-md">Get approved within 72 hours</p>
    <p>The path to achieving your life goals may be often hindered by financial hurdles that may seem too steep to skip. Now with 72 hours Loans you can avail instant offers for a range of uses</p>
  </div>
  <div className='hover:shadow-xl m-3 p-4 rounded-xl'>
    <img src={rupee} alt="" className='w-16' />
    <p className="text-semibold text-md">Get loans up to Rs. 50 lakhs</p>
    <p>Avail Business Loan of up to Rs.50 Lakh at attractive interest rates to meet personal urgencies that can crop up anytime in life.</p>
  </div>
  <div className='hover:shadow-xl m-3 p-4 rounded-xl' > 
    <img src={percentage} alt="" className='w-16'/>
    <p className="text-semibold text-md">Competitive interest rates</p>
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
    </>
  )
}

export default Bloan