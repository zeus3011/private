import React from 'react'
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "../index.css"
import Multi from '../components/Multi'
import Product from './Product'
// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

const Hero = () => {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    
    <main className="isolate bg-white">

        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href=" " className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href=" "
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href=" " className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
      </main>
      <Multi/>

      <Product/>

{/* Check Cibil Score */}

      <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 1000 }}>
                <div className="md:flex items-center justify-between w-full bg-gray-50">
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <h1   className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800">
                            Think<span className="font-normal italic"> out loud </span>
                        </h1>
                        <p role="contentinfo" className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
                            Don’t get carried away with super-short paragraphs. The secret to one-sentence paragraphs is to use them like a spice: A pinch of cumin can make a meal more savor.
                        </p>
                        <div className="mt-10">
                            <button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                Discover more
                                <svg className="ml-8" width={45} height={40} viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                                        fill="#1F2937"
                                    />
                                    <path d="M1 20H29" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 28L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
                        <p role="contentinfo" className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10">
                            “Don’t get carried away with super-short paragraphs. The secret to one-sentence paragraphs is to use them like a spice: A pinch of cumin can make a meal more savory, but I don’t want to eat a plateful of the stuff.”
                        </p>
                        <div className="w-full">
                            <img src="https://i.ibb.co/wMd2Q4B/new.png" alt="Purple flowers on a book" className="md:w-full sm:w-1/2 w-full
                            " />
                            <div className="flex items-center mt-8">
                                <p role="contentinfo" className="text-xl focus:outline-none font-semibold leading-5 text-gray-700">
                                    Picture description
                                </p>
                                <p role="contentinfo" className="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-700">
                                    Specification
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* Check Cibil Score End */}
{/* Check Sum Cibil Score start */}

    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href=" "
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* CheckSum Cibil Score End */}

{/*  */}


            {/*  */}
    </>
  )
}

export default Hero