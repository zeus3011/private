import React,{useState} from 'react'
import Card from "../../assets/img/idfc3.png"
import credittable from './credittable'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
const Creditcard = () => {

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  const [users, setUsers] = useState(credittable)


  const renderHeader = () => {
    return <tr>
      {Object.keys(credittable[0]).map(key => <th>{capitalize(key)}</th>)}
    </tr>
  }
  return (
    <>
    
    <div>
        <div className="dark:bg-gray-900">
        <div className="lg:flex mx-5 lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1  ">
        <h2 className="text-teal-900 rounded p-4 uppercase shadow-lg lg:mx-6 bg-teal-300 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">
          Credit Card
        </h2>
        </div>
        </div>
          <div className="mx-auto mt-6  container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              {/* <div>
                <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">Creditklick</p>
              </div> */}
              <div className="md:mt-3">
                <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">Compare & Apply Credit Cards Online</p>
              </div>
              <div className="md:mt-3">
                <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">credit score cards provide you with the benefit of making purchases, even when you don’t have the price range, not like a debit card. additionally they allow you an interest-loose duration, generally 15 to 50 days, to repay the dues. additionally, credit score playing cards offer advantages throughout classes like buying, fuel, tour, cashback, rewards and extra. if you are seeking out a brand new credit card, pick one that fits your spending behavior, so that you can get the fine value through your purchases.</p>
              </div>
            
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img className="w-full " src={Card}  alt="laptops" />
            </div>
          </div>

{/* Applying Card  */}
<div className='lg:p-28 '>
<div className="relative shadow-3xl rounded mt-2 isolate px-24 overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    </div>
{/* Applying Card End */}

          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start shadow-xl items-start xl:w-3/4">
              {/* <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">The details</h2>
              </div> */}
              <div className="mt-1">
                <p className="text-gray-800 lg:mt-2  dark:text-white lg:text-base text-sm leading-normal">
                that will help you evaluate and select the exceptional-suited card, we've got listed down the exceptional 10 credit cards in India for 2023 at the side of their features and blessings. through Paisabazaar, you could get right of entry to precise statistics around every credit score card, compare them on a couple of parameters like functions, praise structure, costs and so on. and also, practice for a credit card from our associate Banks.
                </p>
              </div>
              <div className="mt-8 w-full">
                <img className="w-full rounded shadow-2xl" src={Card} alt="office" />
              </div>
              <div className="mt-8  flex justify-start items-start flex-col">
               
                <div className="mt-8 lg:mx-2 flex-col justify-start items-start">
                 
                  <div className="mt-2">
                    <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                      Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create
                      a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
                    </p>
                  </div>
                </div>
{/* Credit card Table */}

                <div className="mt-8  flex-col justify-start items-start">
                <table    class=" lg:mx-48  md:mx-32 bg-white border-collapse">
           
           <tr>
             <th class="bg-blue-100 border  px-8 py-4">Credit Card</th>
             <th class="bg-blue-100 border text-left px-8 py-4">Category</th>
           
           </tr>
           {credittable.map((item)=>(
           <tr key={item}>
             <td class="border text-left px-8 py-4">{item.creditcard}</td>
             <td class="border text-left px-8 py-4">{item.category}</td>
           
           </tr>
           
           ))}
         </table>
                 <div className="mt-2">

                
                       {/* <table >
                        <thead> 
                          <tr>
                            <th>Credit Cards</th>
                            <th>Credit Cards</th>
                          </tr>
                        </thead>
                        {credittable.map((item)=>(
                        <tbody key={item} colspan={4} >
                          <tr >
                          <td className='lg:m-28'>{item.creditcard}</td>
                          <td className='lg:mx-46 text-grey-300'>{item.category}</td>
                          </tr>
                        </tbody>
                          
                       </table> */}
            
           

         




                 </div>
               </div>

               {/* Credit card Table End  */}


              </div>
            </div>
            <div className="md:px-8 shadow-lg rounded  md:px-0 lg:px-1 mt-10 xl:mt-0 h-full xl:w-1/5  flex justify-center ">
              <div className="flex flex-col lg:justify-start justify-center lg:items-start  my-10">
                <div>
                  <p className="md:text-2xl text-lg font-semibold  lg:text-left leading-normal ">Related Articles</p>
                </div>
                <div className="mt-8">
                  <p className="md:text-base text-xs  lg:text-left leading-normal ">What is credit card?</p>
                  <p className="md:text-base text-xs  lg:text-left leading-normal ">What is credit card?</p>
                </div>
                {/* <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100">Start trial</button>
                  </div>
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700">Contact sales</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Creditcard