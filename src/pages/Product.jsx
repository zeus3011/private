import React from 'react'
import au from "../assets/Images/auimg/aucalc.png"

// const people = [
//     {
//       name: 'Credit Cards',
//       role: 'Get your Credit card Instantly ',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     // {
//     //     name: 'Credit Cards',
//     //     role: 'Co-Founder / CEO',
//     //     imageUrl:
//     //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     //   },
//       {
//         name: 'Loans',
//         role: 'Personal Loan, Business Loan, Home Loan, much more',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Finance Calculators',
//         role: 'Calculate your emi or value of your Salary from Creditklick finance calculators ',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Check Cibil Score',
//         role: 'Check your cibil in just 2 min',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Credit Refine',
//         role: 'Low credit score affect your financial journey',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     // More people...
//   ]
const Product = () => {
  return (
    <>
   
   <div className="container mx-auto ">
      <p className="md:text-5xl text-2xl text-center font-bold text-blue-900 mt-5 md:my-10 uppercase">our products</p>
 <div className="grid grid-cols-2 md:grid-cols-4 mx-8">
  <div className='bg-gradient-to-l from-indigo-200 to-gray-200 w-3/5 md:w-3/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={au} alt="" className='w-full h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs'>LOANS</p>
  </div>
  <div className='bg-gradient-to-l from-indigo-200 to-gray-200 w-3/5 md:w-3/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={au} alt="" className='w-full h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs'>CARDS</p>

  </div>
  <div className='bg-gradient-to-l from-indigo-200 to-gray-200 w-3/5 md:w-3/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={au} alt="" className='w-full h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs'>CREDIT REFINE</p>

  </div>
  <div className='bg-gradient-to-l from-indigo-200 to-gray-200 w-3/5 md:w-3/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={au} alt="" className='w-full h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-lg text-xs'>CALCULATORS</p>

  </div>
 </div>
</div>

  

    </>
  )
}

export default Product