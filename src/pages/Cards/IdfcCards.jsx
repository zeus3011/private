import React from 'react'
import CCpic from "../../assets/Images/idfcimg/Credit-Card.png"
import classic from "../../assets/Images/idfcimg/idfcclassic.png"
import millenia from "../../assets/Images/idfcimg/idfcmillenia.png"
import select from "../../assets/Images/idfcimg/idfcselect.png"
import wealth from "../../assets/Images/idfcimg/idfcwealth.png"

import Product from '../Product'

const IdfcCards = () => {
  return (
    <>

<div className="container mx-auto h-auto rounded-3xl shadow-lg bg-blue-100">
      <div className="bg-gradient-to-l rounded-3xl from-gray-300 w-auto h-auto border border-1 border-gray-100 p-4">
      <div className="md:flex">
        <div className="md:shrink-0 p-5 mx-auto">
          <img className=" object-cover rounded-xl max-w-xs" src={CCpic} alt="Modern building architecture"/>
        </div>
        <div className="p-8 my-auto">
          <div className="uppercase text-2xl  font-semibold text-indigo-900 text-center ">IDFC BANK CREDIT CARDS</div>
          <p className='text-semibold text-base text-blue-900 my-2 p-2'>Banks and NBFCs offer business loans to help businesses meet their financial needs. You can use a business loan to expand your business, finance new equipment, or manage your working capital. Business loans are available to self-employed individuals, small businesses, and other businesses. Businesses are increasingly turning to business loans to grow and thrive, due to flexible repayment options and competitive interest rates. Consider applying for a business loan today if you're looking to grow your business.</p>
          <div className=' mt-6 mx-auto justify-center'>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">apply now</button>
            </div>
        </div>
      </div>
      </div>
    </div>

{/* types of cards start */}

    <div className="mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-4 mt-16 p-2">
  <div className="md:grid grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0  my-3 ">
      <img className="h-48 w-84 rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={classic} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">IDFC First Classic Card</div>
      <li className="list-disc p-1">10x Reward Points on incremental spends above ₹20,000 per month and spends done on your birthday</li>
      <li className="list-disc p-1">Welcome voucher worth ₹500 on spending ₹15,000 or more within 90 days of card generation </li>
      <li className="list-disc p-1">25% discount on movie tickets up to ₹100 on Paytm mobile app (valid once per month)</li>
      <li className="list-disc p-1">300+ Merchant offers, all year long! | Upto 20% discount at 1500+ restaurants | Upto 15% discount at 3000+ Health & Wellness outlets</li>
      <li className="list-disc p-1">Free cash withdrawals on Domestic and International ATMs for upto 48 days (Cash Advance Fee of only ₹250 per transaction)</li>

    </div>
    <div className="grid grid-cols-1">
        <div className='mx-auto p-2'>
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
       
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>

  <div className="md:grid grid-rows-2 mt-3 rounded-xl ">
    <div className="md:shrink-0 my-3">
      <img className="h-48 w-84 object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={select} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold ">IDFC First Select Card</div>
      <li className="list-disc p-1">Unlimited Reward points that <b>never expires</b> </li>
      <li className="list-disc p-1">5% cashback (upto ₹1,000) on the transaction value of first EMI done within 90 days of card generation. </li>
      <li className="list-disc p-1">4 complimentary Railway lounge visits per quarter. </li>
      <li className="list-disc p-1">Personal Accident Cover of ₹2,00,000* and Lost Card Liability Cover of ₹25,000. </li>
      <li className="list-disc p-1">6x & 3x Reward points on online & offline purchases respectively for spends upto ₹20,000 per month. </li>
      

    </div>
    <div className="grid grid-cols-1">
        <div className='p-2 mx-auto'>
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
       
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>


  <div className="md:grid grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0 my-3">
      <img className="h-48 w-84 object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={wealth} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold ">IDFC First Wealth Card</div>
      <li className="list-disc p-1">10x Reward points on incremental spends above ₹30,000 per month and spends done on your birthday.</li>
      <li className="list-disc p-1">Get access to International and Domestic Airport lounges and spas </li>
      <li className="list-disc p-1">'Buy one, get one' offer on movie tickets upto ₹500 on Paytm mobile app (valid twice per month). </li>
      <li className="list-disc p-1">(i) Complimentary Roadside Assistance worth ₹1,399. <br />
      (ii) Personal Accident Cover of ₹10,00,000* and Lost Card Liability Cover of ₹50,000 .
      </li>
      <li className="list-disc p-1"> 5% cashback (up to ₹1000) on the transaction value of first EMI done within 90 days of card generation.</li>

      <li className="list-disc p-1"> Forex Markup at 1.5% for all international transactions. </li>




    </div>
    <div className="grid grid-cols-1 ">
        <div className='p-2 mx-auto'>
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
       
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>

  <div className="md:grid grid-rows-2 m-2 mt-3 rounded-xl">
    <div className="md:shrink-0 my-3">
      <img className="h-48 w-84 rounded-lg object-cover max-w-xs mx-auto" src={millenia} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">IDFC First Millenia Card</div>
      <li className="list-disc p-1"> 6X & 3X Reward Points on online & offline purchases respectively for spends up to ₹20,000 per month </li>
      <li className="list-disc p-1">5% cashback (up to ₹1000) on the transaction value of first EMI done within 90 days of card generation </li>
      <li className="list-disc p-1">4 complimentary Railway lounge visits per quarter. </li>
      <li className="list-disc p-1">Personal Accident Cover of ₹2,00,000* and Lost Card Liability Cover of ₹25,000 </li>
      <li className="list-disc p-1"> 100% cashback on available purchase items. </li>
      

    </div>
    <div className="grid grid-cols-1">
        <div className='mx-auto p-2'>
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-4 rounded-2xl uppercase">apply now</button>
       
              <button className="bg-indigo-300 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">read more</button>
           </div>
            </div>
  </div>

</div>

{/* types of cards ends */}

{/* our product area starts */}

<Product />

{/* our product area ends */}


    </>
  )
}

export default IdfcCards