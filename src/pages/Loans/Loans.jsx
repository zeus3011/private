import React from 'react'
import "../../index.css"
import random from "../../assets/Images/about-2.jpg"
import './Loans.css'


const Loans = () => {
  return (
    <>
    {/* strip start */}
    <div id ="two" className='shadow-lg bg-blue-300'>
        <p className=' font-semibold text-blue-900'>WE PROVIDE</p>
        <div className="box">   
        <ul className='loanslider font-semibold text-blue-900'>
            <li className="item-1">PERSONAL LOAN</li>
            <li className="item-2">HOME LOAN</li>
            <li className="item-3">BUSINESS LOAN</li>
        </ul>  
        </div>
    </div>

{/* Loans' card area start */}
<div className="w-4/5 mx-auto h-auto mt-4 rounded-xl text-center font-semibold uppercase bg-blue-200">
        <p className='text-teal-700 text-lg'>we are here to  help you. <br /> choose the kind of loan</p>
    </div>
<div className="bg-gray-200 rounded-xl mt-4 mx-auto w-4/5 shadow-md ">
    
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-8 px-8">
    <div className=" m-4">
        <img src={random} alt=""  className='rounded-xl flex justify-center text-6xl rounded-xl shadow-xl'/>
        <p className='text-blue-800 font-semibold text-center mt-4'>PERSONAL LOAN</p>
    </div>
    <div className="m-4">
        <img src={random} alt=""  className='rounded-xl flex justify-center text-6xl rounded-xl shadow-xl'/>
        <p className='text-blue-800 font-semibold text-center mt-4'>HOME LOAN</p>
    </div>
    <div className="m-4">
        <img src={random} alt=""  className='rounded-xl flex justify-center text-6xl rounded-xl shadow-xl'/>
        <p className='text-blue-800 font-semibold text-center mt-4'>BUSINESS LOAN</p>
    </div>
  </div>
</div> 
{/* Loans' card area ends */}

{/* loan content start */}


<div className="w-full mx-4">
    
</div>

{/* loan content end */}
    </>
  )
}

export default Loans