import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero/Hero';
import About from "./pages/About/About"
import Creditcard from './pages/Cards/Creditcard';
import Aucard from './pages/Cards/Aucard';
import IdfcCards from './pages/Cards/IdfcCards'; 
import Sbicards from './pages/Cards/Sbicards';
import YesCards from './pages/Cards/YesCards';
// import Cibilstr from './pages/Hero/Cibilstr';
import Cibil from './pages/Cibil/Cibil';
import Calculators from './pages/Calculators/Calculators';
import Refine from './pages/Refine/Refine';
import Bloan from './pages/Loans/Bloan';
import Hloan from './pages/Loans/Hloan';
import Ploan from './pages/Loans/Ploan';
import Error from './components/Error';
import Blogs from './pages/Blogs/Blogs';
import Cibilhero from "./pages/Cibil/Cibilhero"
import Contact from './pages/Contact';
import Login from './pages/Hero/Login';
// import Stripehead from './components/Stripehead';
const Main = () => {
  return (
    <div > 
     <BrowserRouter>
        <Header/>
       
<Routes>
  <Route path='/' exact element={<Hero/>}/>
  <Route path="/Creditcards" exact element={<Creditcard/>}/>
  <Route path='/Aucards' exact element={<Aucard/>}/>
  <Route path='/IdfcCards' exact element={<IdfcCards/>}/>
  <Route path='/Sbicards' exact element={<Sbicards/>}/>
  <Route path='/Yescards' exact element={<YesCards/>}/>
  <Route path='/Credit-score' exact element={<Cibil/>}/>
  <Route path='/Calculators' exact element={<Calculators/>}/>
  <Route path="/Refine" exact element={<Refine/>}/>
  <Route path="/Businessloan" exact element={<Bloan/>}/>
  <Route path="/Homeloan" exact element={<Hloan />}/>
  <Route path="/Personalloan" exact element={<Ploan/>}/>
  <Route path="/CreditklickFamily" exact element={<About/>}/>
  <Route path="/Blogs" exact element={<Blogs/>}/>
  <Route path='*' exact element={<Error/>}/>
  <Route path="/Creditklick" exact element={<Login/>}/>
  <Route path="/report-analysis" exact element={<Cibilhero/>}/>
  <Route path="/connectwithus" exact element={<Contact/>}/>

</Routes>
</BrowserRouter>
{/* <About/> */}
    <Footer/>
    </div>
  )
}

export default Main