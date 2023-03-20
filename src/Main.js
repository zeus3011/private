import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero/Hero';
// import About from "./pages/About/About"
import Creditcard from './pages/Cards/Creditcard';
import Aucard from './pages/Cards/Aucard';
import IdfcCards from './pages/Cards/IdfcCards';
import Sbicards from './pages/Cards/Sbicards';
import YesCards from './pages/Cards/YesCards';
// import Cibilstr from './pages/Hero/Cibilstr';
import Cibil from './pages/Cibil/Cibil';
import Calculators from './pages/Calculators/Calculators';
import Refine from './pages/Refine/Refine';
// import Stripehead from './components/Stripehead';
const Main = () => {
  return (
    <div className='container '> 
     <BrowserRouter>
        <Header/>
       
<Routes>
  <Route path='/' exact element={<Hero/>}/>
  <Route path="/Creditcards" exact element={<Creditcard/>}/>
  <Route path='/Aucards' exact element={<Aucard/>}/>
  <Route path='/IdfcCards' exact element={<IdfcCards/>}/>
  <Route path='/Sbicards' exact element={<Sbicards/>}/>
  <Route path='/Yescards' exact element={<YesCards/>}/>
  <Route path='/CibilScore' exact element={<Cibil/>}/>
  <Route path='/Calculators' exact element={<Calculators/>}/>
  <Route path="/Refine" exact element={<Refine/>}/>
</Routes>
</BrowserRouter>
{/* <About/> */}
    <Footer/>
    </div>
  )
}

export default Main