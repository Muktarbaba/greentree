import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import {Header}   from "./components/header";
import { GetStarted } from './components/getstarted';
import {Home} from "./components/home"
import { Footer } from './components/footer';
import { Prp } from './components/prp';
import { Therapy } from './components/therapy';
import { Medical } from './components/medical';
import { About } from './components/about';
import { Contactpage } from './components/contactpage';

function App() {
  return (
    <div className="App">
      
     <Header/>
      <Navbar/>
      <Routes>
        <Route path ="/" element ={<Home/>} />
        <Route path ="/getstarted" element ={<GetStarted/>} />
        <Route path ="/prp" element ={<Prp/>} />
        <Route path ="/therapy" element ={<Therapy/>} />
        <Route path ="/medical" element ={<Medical/>} />
        <Route path ="/about" element ={<About/>} />
        <Route path ="/contactpage" element ={<Contactpage/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
