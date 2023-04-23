import React, { useState } from "react";
import Style from "./home.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser =()=>{
    let navigate=useNavigate();
    const [data, setMydata]= useState({
        id:"",
        name:null,
        email:null
    });
    
    const handelChange=(e)=>{
        setMydata( (prev)=>({...prev, [e.target.name]: e.target.value}))
    };
    const handelClick=async (e)=>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/mydata", data)
            console.log(data);
                navigate("/");
            
        } catch (err) {
            console.log(err);
        }
    }
return(
    <div  id={Style.div} >
   <form action="#">
    <input type="number" placeholder="ID" onChange={handelChange} name="id"  /><br /><br />
    <input type="text" placeholder="Name" onChange={handelChange} name="name" /><br /><br />
    <input type="text" placeholder="Email" onChange={handelChange} name="email"/><br /><br />
    <center><button id={Style.btn} onClick={handelClick}>SUBMIT</button></center>
   </form>
 </div>
)
}
export default AddUser