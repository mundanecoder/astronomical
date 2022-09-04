import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import Players from './Players';
// import Data from './Data';
import Gallery from './Gallery';
// import View from './View';
import HOF from './HOF';
import MOMENTS from './MOMENTS.js';
import Search from './Search';
import Teams from './Teams';
import Detail from './Detail';
// import Info from './Info';
// import { Params } from 'react-router-dom';
// import Product from './Product';


function App() {

  return  (


  <>
  <BrowserRouter>
  <Search/>
    <Players/>
    <Routes>
      <Route index element= {<Gallery/>}/>
      {/* <Route path ="info " element= {<Info/>}/> */}
      <Route path ="hof" element= {<HOF/>}/>
      <Route path ="/info/:name" element= {<MOMENTS/>}/>
      <Route path = "/teams" element ={<Teams/>}/>
      <Route path = "/detail/:id" element = {<Detail/>}/>
      {/* <Route path="/product/:name" component = {Product}/> */}
    </Routes>
  
    {/* <Data/> */}
  </BrowserRouter>
  </>
); 
}

export default App;
