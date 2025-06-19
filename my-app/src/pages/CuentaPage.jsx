import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import urlBase from "../data/Api"
function CuentaPage() {

  const [users,setUsers]=useState([]);

  
    useEffect(() => {
     async function getUsers() {
      try {
        const res= await urlBase.get("/users")
        setUsers(res.data.users)
      } catch (error) {
        console.log("error",error);
      };
    
    };
getUsers();
    }, []);
  return (

   
    <>
      <Navbar/>
      <div className='' style={{paddingTop:"5rem"}}>
      {users.map((u)=>(
        <div key={u.id}>
             <h4>{u.firstName}</h4>
        </div>
      ))}</div>
      <Footer/>
  </>
  )
}

export default CuentaPage
