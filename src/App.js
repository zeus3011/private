// import logo from './logo.svg';
// import './App.css';
import "tailwindcss/dist/tailwind.min.css"
import './index.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Product from './pages/Product';

function App() {
  return (
<>
<Header/>
<Hero/>
    <Footer/>
</>
   
  );
}

export default App;
