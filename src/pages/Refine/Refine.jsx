import React,{useState} from 'react'
import Exp from "../../assets/Images/exp.png"
import Cnt from "../../assets/Images/cnt.jpg"
const Refine = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  return (
    <>

{/* Hero Start */}

<div className="container mx-auto h-auto rounded-3xl shadow-lg bg-blue-100">
      <div className="bg-gradient-to-l rounded-3xl from-gray-300 w-auto h-auto border border-1 border-gray-100 p-4">
      <div className="md:flex">
       
        <div className="p-8 my-auto">
          <div className="uppercase text-2xl  font-semibold text-indigo-900 text-left ">How do our Credit Refine</div>
          <p className='text-semibold text-base text-blue-900 my-2 p-2'>We analyse your credit report to understand  the impact of negative accounts on your credit score.
</p>
<div className="uppercase text-4xl  font-semibold text-indigo-900 text-left ">Talk to an Expert</div>
<div className="uppercase text-4xl  font-extrabold text-blue-400 text-left ">FREE</div>

          <div className=' mt-6 mx-auto justify-center'>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">apply now</button>
            </div>
        </div>


        <div className="md:shrink-0 sm:shrink-0 p-5 lg:mx-15  mx-auto">
          <img className=" object-cover  rounded-xl max-w-xs" src={Exp} alt="Modern building architecture"/>
        </div>
      </div>
      </div>
    </div>

{/* Hero End */}

{/* Our Process Starts */}


<div classname="overflow-y-hidden bg-gray-100">
    <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
      <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">How We Works?</h1>
      <div className="md:mt-24 f-f-p">
         

      <div className="hidden  md:flex justify-center w-full">
          <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
            <div aria-label="sign up" role="img">
              <img className="focus:outline-none mt-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
            </div>
            <div aria-label={2} role="img">
              <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
            </div>
            <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Raise Your Application</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Book a slot to navigate your importance  </h2>
            </div>
            <div aria-label="transactions" role="img">
              <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
            </div>
            <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />
          </div>


       
          <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
           
              {/* Setp1 */}
            <div aria-label={1} role="img">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
            </div>
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">SignUp for an Account</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Log In on our website or registered  yourself  . </h2>
            </div>

               {/* Setp1 End */}
            <div aria-label="wallet" role="img">
              <img className="focus:outline-none mt-32" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
            </div>
            <div aria-label={3} role="img">
              <img className="focus:outline-none mt-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
            </div>
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Connect with Consultants</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Our Proffesional Consultant assist you as soon as possible,know your importance in detail</h2>
            </div>

              <div className='h-48' aria-label={2} role="img">
             
            </div>
          </div>
          
        </div>
        <img className='flex -mt-48  flex-col max-w-2xl lg:mx-72 ' src={Exp} alt="" srcset="" />



        {/* <div className="md:hidden flex flex-col items-center w-full">
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best .</h2>
          </div>
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
            <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
          </div>
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
          <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
          <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your Transactions</h1>
            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
          </div>
        </div> */}
      </div>
    </div>
  </div>

{/* Our Process Ends */}

{/* Contact Us Start  */}

< div className = " 2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9 " > 
                < div className = " relative rounded-md " > 
                    < img src = {Cnt} alt = " city view " className = "opacity-30 w-full h-full rounded-md object-center object-fill absolute sm:block hidden " />    
                    < img src = " https://i.ibb.co/LQpxBsc/mobile.png " alt = " city view " className = " opacity-20 w-full h-full rounded-md absolute object-center object-fill sm:hidden " />    
                    < div className = " text-xl relative z-20 bg-gradient-to-r from-blue-600 to-transparent   w-full h-full z-40 top-0 md:p-16 p-6 flex flex- col justify-between rounded-md " > 
                        <div> 
                            < h1 className = " md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64 " >Book a Call with Expert <span className='text-blue-800'>FREE</span> </h1> 
                            < p className = " text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4 " >Need personalized guidance to solve your question? Don't worry! Call a trained credit professional to make an appointment.

Talk to an Expert. </p> 
                        </div> 
                                                < div className = " md:mt-12 mt-20 w-auto " > 
                            < button className = " text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-auto rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring- 2 focus:ring-offset-2 focus:ring-white " > TALK WITH TEAM </ button > 
                        </div> 
                                            </div> 
                                        </div> 
                                    </div> 










{/* Contact us End */}

{/* Our Vision Start*/}


<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">About</p>
            
                {/* Educate Starts */}
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">We Educate & Analyse</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">To understand how bad accounts affect your credit score, <br/> we analyse your credit record. Our credit specialists will inform you of the repercussions of having a bad account and advise you on the best course of action. We also point out errors on your credit report and assist you in filing a dispute to get them corrected</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden lg:-mt-32 w-full" src={Exp} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
            </div>
              {/* Educate Ends */}
            
                {/* Cordination Starts */}
            <div className="flex lg:flex-row  flex-col lg:gap-8 sm:gap-10 gap-12">

            <div className="w-full mt-4 lg:w-6/12">
                    <img className="lg:block  hidden lg:-mt-32 w-full" src={Exp} alt="people discussing on board" />
                    {/* <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" /> */}
                    {/* <img className="sm:hidden  block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" /> */}
                </div>


                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">We Coordinate & Resolve</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">We work with the lender to come up with the most advantageous repayment strategy for you to pay off any past-due debt. We then advise you on how much of the remaining balance you must pay straight to the lender. We follow up with the credit bureau once your payment has been received to make sure the negative account has been effectively addressed.

</p>
                </div>
                <div className="w-full lg:hidden sm:block hidden   lg:w-6/12">
                    {/* <img className="lg:block  hidden lg:-mt-32 w-full" src={Exp} alt="people discussing on board" /> */}
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img className="sm:hidden  block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
            </div>

{/* Cordination Ends */}



            {/* <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Founded</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">50M montly enrichments</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="sm:block hidden">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div> */}

            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between  mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        {/* <!-- Board Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Board</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>










{/* Our Vision End */}

{/* FAQ STARTS */}


<div>
                <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" class="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
                    <div class="md:py-36 py-20">
                        <h1 role="heading" class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
                            Frequently asked questions
                        </h1>
                    </div>
                    <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                        <div class="bg-white shadow rounded p-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold leading-none text-gray-800">Why should I use your service?</h2>
                                </div>
                                <button onClick={() => setBox1(!box1)} class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box1 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {box1 && (
                                <ul class="">
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold leading-none text-gray-800">What payment method I can use?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox2(!box2);
                                    }}
                                    data-menu
                                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box2 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box2 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold leading-none text-gray-800">Is your service safe to use?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox3(!box3);
                                    }}
                                    data-menu
                                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box3 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box3 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-base font-semibold leading-none text-gray-800">How to recover password?</h2>
                                </div>
                                <button onClick={() => setBox4(!box4)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box4 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box4 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
{/* FAQ ENDS */}





    </>
  )
}

export default Refine