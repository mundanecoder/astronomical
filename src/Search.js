import React from 'react'
import { useState,useEffect } from 'react'
import Stack from "@mui/material"
// import {Autocomplete} from "mui/material/Autocomplete";
import{Box} from "@mui/material"
import axios from 'axios';


const Search = () => {

    const [resultsData,setResult] = useState([]);

    useEffect(() => {
        axios
        .get("https://www.balldontlie.io/api/v1/players")
        .then((res) => setResult(res.data.data))

    },[])
    // console.log("hello"+resultsData)
  return (
    <>
    </>
  )
}

export default Search