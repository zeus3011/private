import React from 'react'
import CCpic from "../../assets/Images/auimg/Credit-Card.png"
import altura from "../../assets/Images/auimg/altura.png"
import alturaplus from "../../assets/Images/auimg/alturaplus.png"
import lit from "../../assets/Images/auimg/litcard.jpg"
import Product from '../Product'


const Aucard = () => {
  return (
    <>
    <div className="container mx-auto h-auto rounded-3xl shadow-lg bg-blue-100">
      <div className="bg-gradient-to-l rounded-3xl from-gray-300 w-auto h-auto border border-1 border-gray-100 p-4">
      <div className="md:flex">
        <div className="md:shrink-0 p-5 mx-auto">
          <img className=" object-cover rounded-xl max-w-xs" src={CCpic} alt="Modern building architecture"/>
        </div>
        <div className="p-8 my-auto">
          <div className="uppercase text-2xl  font-semibold text-indigo-900 text-center ">AU BANK CREDIT CARDS</div>
          <p className='text-semibold text-base text-blue-900 my-2 p-2'>Banks and NBFCs offer business loans to help businesses meet their financial needs. You can use a business loan to expand your business, finance new equipment, or manage your working capital. Business loans are available to self-employed individuals, small businesses, and other businesses. Businesses are increasingly turning to business loans to grow and thrive, due to flexible repayment options and competitive interest rates. Consider applying for a business loan today if you're looking to grow your business.</p>
          <div className=' mt-6 mx-auto justify-center'>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">apply now</button>
            </div>
        </div>
      </div>
      </div>
    </div>

{/* types of cards start */}

    <div className="container mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-3 mt-16 p-2">
  <div className="md:grid grid-rows-2 mt-3 rounded-xl">
    <div className="md:shrink-0  my-3">
      <img className="h-full w-56 rounded-lg shadow-lg object-cover max-w-xs mx-auto" src={altura} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div class="uppercase tracking-wide text-xl text-teal-700 font-semibold">ALTURA</div>
      <li className="list-disc p-1">Save Big. Upto 7% Cashback as an introductory offer</li>
      <li className="list-disc p-1">Attractive Monthly Milestone Benefits</li>
      <li className="list-disc p-1">Complimentary Railway Lounge access</li>
      <li className="list-disc p-1">Complimentary Lost Card Liability cover</li>
      <li className="list-disc p-1">₹ 2,000+ Yearly Benefits on just ₹ 10,000 monthly spends!</li>

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
      <img className="h-full w-56 object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={alturaplus} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold">ALTURA PLUS</div>
      <li className="list-disc p-1"> Double the Delight. Earn both Cashback & Reward Points.</li>

      <li className="list-disc p-1"> Attractive Welcome Benefit & Monthly Milestone Benefits </li>

      <li className="list-disc p-1"> Complimentary Railway Lounge access </li>
      <li className="list-disc p-1"> Complimentary Lost Card Liability cover </li>

      <li className="list-disc p-1"> ₹ 25,000+ Yearly Benefits on just ₹ 35,000 monthly spends! </li>

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
      <img className="h-full w-56 object-cover rounded-lg shadow-lg max-w-xs mx-auto " src={lit} alt="Modern building architecture"/>
    </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-teal-700 font-semibold ">LIT CREDIT CARD</div>
      <li className="list-disc p-1">Get 5% cashback on grocery and travel spends</li>
      <li className="list-disc p-1">Get additional 2%-5% cashback on all spends</li>
      <li className="list-disc p-1">Fly comfortably with domestic airport lounge access</li>
      <li className="list-disc p-1">Enjoy exciting memberships</li>
      <li className="list-disc p-1">Get 5X-10X rewards on online and offline spends</li>


    </div>
    <div className="grid grid-cols-1 ">
        <div className='p-2 mx-auto'>
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

export default Aucard