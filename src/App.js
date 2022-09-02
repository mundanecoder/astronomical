import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import Players from './Players';
// import Data from './Data';
import Gallery from './Gallery';
import View from './View';
import HOF from './HOF';
import MOMENTS from './MOMENTS.js';
import Search from './Search';
import Teams from './Teams';


function App() {

  return  (


  <>
  <BrowserRouter>
  <Search/>
    <Players/>
    <Routes>
      <Route index element= {<Gallery/>}/>
      <Route path ="view" element= {<View/>}/>
      <Route path ="hof" element= {<HOF/>}/>
      <Route path ="/MOMENTS" element= {<MOMENTS/>}/>
      <Route path = "/teams" element ={<Teams/>}/>
    </Routes>
  
    {/* <Data/> */}
  </BrowserRouter>
  </>
); 
}

export default App;
