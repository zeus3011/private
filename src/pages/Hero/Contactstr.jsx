import React from 'react'
import { Link } from 'react-router-dom'

const Contactstr = () => {
  return (
    <>  <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto shadow-2xl rounded-xl max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We are a customer Centric and focus on client needs before offering a solution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We achieve such numbers, because you are more than a number to us.
          </p>

          <div className="mt-10  flex items-center justify-center gap-x-6">
                <Link
                  to="/connectwithus"
                  className="rounded-md mb-10 p-3  w-48 bg-teal-600 text-center font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                 Contact Us 
                </Link>
              
              </div>
        </div>
       
      </div>
    </div>

    </div>
  </main>
  </>
  )
}

export default Contactstr