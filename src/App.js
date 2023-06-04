// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navigate, Routes, BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero.js';
import About from './components/About';
import Cities from './components/Cities';
import Parks from './components/Parks';
import Mountains from './components/Mountains';
import Beaches from './components/Beaches';
import Islands from './components/Islands';
import Contact from './components/Contact';

// import { Container } from 'react-bootstrap';
import Footer from './components/Footer.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      
         <Hero />
         
         <Routes>
           <Route path='/' element={<Navigate replace to="/About" />} />
             
           <Route path='/About' element={<About/>} />
           <Route path='/Cities' element={<Cities/>} />
           <Route path='/Parks' element={<Parks/>} />
           <Route path='/Mountains' element={<Mountains/>} />
           <Route path='/Beaches' element={<Beaches/>} />
           <Route path='/Islands' element={<Islands/>} />
           <Route path='/Contact' element={<Contact/>} />

           
           
           
           
         </Routes>
         <br></br>

         <Footer>
          <div>
          
          </div>
         </Footer>
         
      
    </Router>
  );
}

export default App;
