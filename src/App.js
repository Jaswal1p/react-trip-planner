// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navigate, Routes, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
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
      {/* <> */}
         <NavBar />
         {/* <br></br> */}
         <Routes>
           <Route path='/' element={<Navigate replace to="/Aboutme" />} />
             
           <Route path='/Aboutme' element={<Aboutme/>} />
           <Route path='/Education' element={<Education/>} />
           <Route path='/Experience' element={<Experience/>} />
           <Route path='/Contact' element={<Contact/>} />

           
           <Route path='/Resume' element={<Resume/>} />
           {/* <Route component={NoMatch} /> */}
         </Routes>
         <br></br>
         {/* <Footer/> */}
      {/* </> */}
    </Router>
  );
}

export default App;
