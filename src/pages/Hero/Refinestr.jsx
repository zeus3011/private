import React  from 'react' 
import ExpertImg from "../../assets/Images/exp.png"
import { Link } from 'react-router-dom'



const Refinestr = () => {
  return (
    <>
    <div className="bg-white mb-24 flex-shrink ">
      <div className="mx-auto  max-w-7xl  sm:px-6 lg:px-8">
        <div className="relative p-4 overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            {/* <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs> */}
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left space-y-8  ">
            <h2 className="md:text-4xl text-2xl font-semibold tracking-tight text-white ">
            How do our Credit Refine Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            We analyse your credit report to understand the impact of negative accounts on your credit score.

</p>
<h1 className=' md:text-4xl text-2xl  text-white'> Talk to our Expert </h1>
            <div className="my-10 flex items-center justify-center space-x-6 lg:justify-start">
              <Link
                to="Refine"
                className="rounded-md bg-white px-3.5 py-2.5 text-md font-base text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
Connect Me To Credit Consultant
              </Link>
              <Link to="/Credit-score" className="text-md font-semibold leading-6 text-white">
                Check Cibil Now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div class="md:shrink-0 m
          -auto">
      <img class=" object-cover rounded-xl md:max-w-lg bg-white/5 " src={ExpertImg} alt="Modern building architecture"/>
    </div>
        </div>
      </div>
    </div>

    
  
    </>
  )
}

export default Refinestr