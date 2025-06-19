import React from 'react'
import axios from "axios";


    const urlBase= axios.create({
        baseURL:"https://dummyjson.com",
        headers: {
    "Content-Type": "application/json",
  },
    }) 


export default urlBase
