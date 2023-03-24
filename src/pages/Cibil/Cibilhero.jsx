import React, { useState } from "react";
import Image from "../../assets/Images/CScore.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
export default function IndexPage() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);

    return (
        <>
            <div className="w-full h-full bg-gray-200">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
                        <div className="h-16 w-full flex items-center px-8">
                         
                        </div>
                        <ul aria-orientation="vertical" className=" py-6">
                            <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                        </svg>
                                    </div>
                                    <span className="ml-2">Dashboard</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                    </svg>
                                    <span className="ml-2">Products</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                        <circle cx={12} cy={12} r={9} />
                                    </svg>
                                    <span className="ml-2">Performance</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1={14} y1={4} x2={10} y2={20} />
                                    </svg>
                                    <span className="ml-2">Deliverables</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    
                                    <ul aria-orientation="vertical" className=" py-6">
                                        <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <rect x={4} y={4} width={6} height={6} rx={1} />
                                                        <rect x={14} y={4} width={6} height={6} rx={1} />
                                                        <rect x={4} y={14} width={6} height={6} rx={1} />
                                                        <rect x={14} y={14} width={6} height={6} rx={1} />
                                                    </svg>
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                    </svg>
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Products</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                        <circle cx={12} cy={12} r={9} />
                                                    </svg>
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Performance</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="7 8 3 12 7 16" />
                                                        <polyline points="17 8 21 12 17 16" />
                                                        <line x1={14} y1={4} x2={10} y2={20} />
                                                    </svg>
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Deliverables</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-center mb-4 w-full px-6">
                                        <div className="relative w-full">
                                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={10} cy={10} r={7} />
                                                    <line x1={21} y1={21} x2={15} y2={15} />
                                                </svg>
                                            </div>
                                            <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between px-6 pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                                <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                            </div>
                                            <ul className="flex">
                                                <li className="cursor-pointer text-white pt-5 pb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                    </svg>
                                                </li>
                                                <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                            <div className="hidden lg:flex w-full pr-6">
                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                  
                                </div>
                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-end">
                                      
                                        <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                      
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative">
                                                    <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                                                    <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                </div>
                                            </div>
                                            <p className="text-gray-800 text-sm mx-3">Jane Doe</p>
                                            <div className="cursor-pointer text-gray-600">
                                                <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        {/* Hero Sectio Starts */}
                        <div className="transparent  ">
                           


                            <div className="w-full h-full bg-white rounded-3xl shadow-2xl mt-4 border-dashed">
                            <div className="mx-auto  flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="w-4/5 xl:w-4/5 h-auto  flex flex-col justify-start items-start">
                    <div>
                        <img className="h-60 sm:mx-12 lg:mx-32 w-4/5" src={Image}alt=""/>
                    </div>
                 
                  
                </div>
                <div className="w-80 mx-28 sm:w-auto flex flex-col justify-between items-between">
                    <div>
                        <p className="text-xl xl:text-2xl font-extrabold leading-9 text-gray-800">Purushottam, Your Experian credit score is <span className="text-2xl text-red-500 ">350 </span> 
                         <span className="text-2xl text-yellow-600 ">650 </span> <br/>
                          <span className="text-2xl text-green-500 ">700 </span> 
                           <span className="text-2xl text-green-900 ">850</span> </p>
                    </div>
                    <div className="mt-4  lg:w-3/5 xl:w-4/5">
                        <p className="text-base  text-justify text-gray-600">Your credit Score is inductive of your past repayment behaviour.
It seems your profile is Bad Fair Good Excellent

Nice, You are financially strong. Ensure all payments are made on time and you will be in the top score bracket soon enough !

You seem to have a damaged credit history. This might be due to multiple late payments or a loan/card default. Ensure all payments are made on time.</p>
                    </div>
                  
                </div>

                
            </div>
        </div>
     
                            </div>
                        </div>
                        {/* Hero Sectio ends */}



{/* Offer Slider */}

{/* offer Sider End */}


                    </div>
                </div>
            </div>
        </>
    );
}
