import React from 'react'

const tenure = [
  {
    value: 5
  },
  {
    value: 10
  },
  {
    value: 15
  },
  {
    value: 20
  },
  {
    value: 25
  }
]
const Homecalc = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <p>Total Loan Value</p>
          <input type="range" max={20000000} min={0} step={100000}/>
        </div> 
        <div>
        <label for="tanure" className='bg-gray-500 p-2 m-2 text-white rounded-full'>Tenure</label>
          <select className='bg-gray-200 p-1 border rounded-lg shadow-lg hover:bg-gray-400'>
            {
              tenure.map((item ,index)=>{
                return ( <option value="item.value">{item.value} Years</option> )
              })
            }
          </select>
        </div>
      </div>
    </>
  )
}

export default Homecalc
