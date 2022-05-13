import mysql from "mysql"
import cors from "cors"
import  express  from "express"

console.log("activating")

const db = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    database:"areadata"
})

db.connect(function(err){
    if(err) throw err;
    console.log("connected to database")
})

const server = express()
server.use(cors())

server.get("/",(req,res)=>{
    res.send("hello")
})

server.get("/data",(req,res))

server.listen(6969,function(){
    console.log("now running on 6969")
})