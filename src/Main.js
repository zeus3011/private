import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero/Hero';
// import About from "./pages/About/About"
import Creditcard from './pages/Cards/Creditcard';
// import Stripehead from './components/Stripehead';
const Main = () => {
  return (
    <div> 
      {/* <Stripehead/> */}
        <Header/>
<Hero/>
<Creditcard/>
    <Footer/>
    </div>
  )
}

export default Main