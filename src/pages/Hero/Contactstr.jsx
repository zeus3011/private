import React from 'react'
import { Link } from 'react-router-dom'

const Contactstr = () => {
  return (
    <>  <main>
    <div className="mx-auto max-w-7xl my-16">

      <div className="mx-auto bg-gradient-to-l p-6 py-10 from-blue-100 to-gray-100 shadow-lg rounded-xl max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:text-center space-y-10">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="md:text-4xl text-2xl font-semibold tracking-tight text-blue-900">
          Being a Customer-Centric, we focus on client's needs before offering a solution
          </p>
          <p className=" text-lg leading-8 text-teal-800">
          We achieve such numbers, because you are more than a number to us.
          </p>

          <div className="flex items-center justify-center ">
                <Link
                  to="/connectwithus"
                  className="rounded-md p-3  w-48 bg-teal-600 text-center font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                 Contact Us 
                </Link>
              
              </div>
        </div>
       
      </div>

    </div>
  </main>
  </>
  )
}

export default Contactstr