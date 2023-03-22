import { Fragment, useState } from 'react'
import "../index.css"
import Logo from "../assets/img/ck.jpg"
import { Route,Link, Routes } from 'react-router-dom'
// import AU from "../pages/Cards/Creditcard"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  // ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  
} from '@heroicons/react/24/outline'
import {BsBookHalf} from "react-icons/bs"
import { ChevronDownIcon,  PlayCircleIcon } from '@heroicons/react/20/solid'
// import Example from './testing'
import Loans from '../pages/Loans/Loans'
// import Creditcard from '../pages/Cards/Creditcard'
// import Hero from '../pages/Hero/Hero'

const products = [
  { name: 'AU Bank Credit Card', description: 'Get a better credit card', path:"/Aucards",  icon: ChartPieIcon },
  { name: 'IDFC First Credit Card', description: 'Speak directly to your customers',  path:"/IDFCcards", icon: CursorArrowRaysIcon },
  { name: 'SBI Credit Cards', description: 'Your customers’ data will be safe and secure',  path:"/Sbicards", icon: FingerPrintIcon },
  { name: 'YES Bank Credit Cards', description: 'Connect with third-party tools',  path:"/yescards", icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: ' ', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Connect Youtube', href: ' ', icon: PlayCircleIcon },
  { name: 'Read Blogs',path:'Blogs', icon: BsBookHalf },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const  Header=()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only ">Creditklick</span>
            <img className="h-20" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center  gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Credit Cards
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              mouse="transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              MouseFrom="opacity-100 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen p-1 group-hover peer-hover:flex hover:flex max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            {/* <Router > */}
                <div className="p-4">
                 
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group  relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                     
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.path} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                      {/* </Link> */}
                    </div>
                  ))}
                 
                </div>
                {/* </Router> */}
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          
<Link to ="/Loans">
          <div href="  " className="text-sm font-semibold leading-6 text-gray-900">
            Loans
          </div>
          </Link>
          <Link to="/CibilScore"  className="text-sm font-semibold leading-6 text-gray-900">
             Check Cibil Score 
          </Link>
          <Link to="/Calculators" className="text-sm font-semibold leading-6 text-gray-900">
            Finance Calculator
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button  type="button"
          onClick={openModal}  className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-60"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom=" { }"
            leaveTo="opacity-100"
            animate={{
              mount:{scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href=" " className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={Logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open=!open }) => (
                    <>
                      <Disclosure.Button className="flex  peer w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Credit Cards
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link to="/Loans"
                  
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900  hover:bg-gray-50"
                >
                  Loans
                </Link>
                <Link
                  to="/CibilScore "
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Check Cibil Score
                </Link>
                <Link
                  to="/CalCulators "
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Finance Calculator
                </Link>
              </div>
              <div className="py-6">
                <button
                 type="button"
                 onClick={openModal}
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>


      
    </header>

    <Routes>
   
      <Route path='/Loans' element={<Loans/>}/>
    </Routes>
    </>
    // <>
    // <Example/>
    // </>
  )
}
export default Header
