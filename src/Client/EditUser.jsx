import React, { useEffect, useState } from "react";
import Style from "./home.module.css"
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const EditUser=()=>{
    
    let navigate=useNavigate();
    let location=useLocation();
    const dataId=location.pathname.split("/")[2]
    const [mydata, setMydata]= useState({
        id:"",
        name:"",
        email:""
    });

    const handelChange=(e)=>{
        setMydata( (prev)=>({...prev, [e.target.name]: e.target.value}))
    };
    const handelClick=async (e)=>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/mydata/"+ dataId, mydata)
                navigate("/users");
            
        } catch (err) {
            console.log(err);
        }
    } 
       
    
return(
        
                <div  id={Style.div} >
                 <form action="#">
                 <input type="text" placeholder="Name"  onChange={handelChange}  name="name"/><br /><br />
                 <input type="text" placeholder="Email"  onChange={handelChange}  name="email"/><br /><br />
                 <center><button id={Style.btn} onClick={handelClick}>Update</button></center>
            
                </form>
                
              </div>
    
  
)
}

export default EditUser