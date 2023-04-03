import React from 'react'
import au from "../assets/Images/auimg/aucalc.png"
import { Link } from 'react-router-dom'
import ccico from "../assets/Images/Icon/1.png"
import loico from "../assets/Images/Icon/2.png"
import calico from "../assets/Images/Icon/3.png"
import refico from "../assets/Images/Icon/4.png"
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
   
   <div className="container mx-auto  ">
      {/* <p className="md:text-5xl text-2xl text-center font-bold text-blue-900 mt-5 md:my-10 uppercase">our products</p> */}
 <div className="grid grid-cols-2 border-2 md:bg-white shadow-lg   md:grid-cols-5  ">
 <Link to="/Loans">
                   
  <div className=' w-3/5 md:w-2/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={loico} alt="" className='w-full animate-pulse h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black mx-auto mt-auto text-center md:text-sm text-xs'>LOANS</p>
  </div>
  </Link>
  <Link to="/Creditcards">
  <div className=' w-3/5 md:w-2/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={ccico} alt="" className='w-26 animate-pulse h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-sm text-xs'>CARDS</p>

  </div>
  </Link>
  <Link to="/Refine">
  <div className=' w-3/5 md:w-2/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={refico} alt="" className='w-full animate-pulse h-auto mt-auto p-4'/>
    <p className='font-semibold hover:text-black  text-center md:text-sm text-xs'>CREDIT REFINE</p>

  </div>
  </Link>

  <Link to="/Calculators">
  <div className='  w-3/5 md:w-2/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={calico} alt="" className='w-full h-auto animate-pulse mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-sm sm:text-xs'> Credit Score</p>

  </div>
  </Link>
  <Link to="/Calculators">
  <div className='  w-3/5 md:w-2/5 my-8 ring  ring-blue-100 mx-auto rounded-xl shadow-lg '>
    <img src={calico} alt="" className='w-full h-auto animate-pulse mt-auto p-4'/>
    <p className='font-semibold hover:text-black text-center md:text-sm text-xs'>CALCULATORS</p>

  </div>
  </Link>
 </div>
</div>

  

    </>
  )
}

export default Product