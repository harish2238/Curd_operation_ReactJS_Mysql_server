import express, { query } from "express";
import mysql from "mysql2";
import cors from "cors"

const app=express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ramadass3,",
    database:"curd"
    
})
 app.use(express.json())
 app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this DB")
})
    
app.post("/mydata",(req,res)=>{
    const q="INSERT INTO mydata(`id`,`name`,`email`) VALUES (?)"
    const values=[req.body.id,req.body.name,req.body.email]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.delete("/mydata/:id",(req,res)=>{
    const mydataid=req.params.id;
    const q="DELETE FROM mydata WHERE id = ?"
    db.query(q, [mydataid], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/mydata/:id",(req,res)=>{
    const mydataid=req.params.id;
    const q="UPDATE mydata SET `name`=?,`email`=? WHERE id=?"
    const values=[req.body.name,req.body.email]
    db.query(q,[...values, mydataid], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

 app.get("/mydata",(req,res)=>{
     const q="SELECT * FROM mydata"
     db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)     
    })

 })
 app.get("/mydata/:id",(req,res)=>{
    const mydataid=req.params.id;
    const q="SELECT * FROM mydata WHERE id= ?"
    db.query(q,[mydataid],(err,data)=>{
       if(err) return res.json(err)
       return res.json(data)     
   })

})



app.listen(8800,()=>{
    console.log("connection DB!!")
})