const express=require("express")
const app=express()
const port=3002
const morgan=require("morgan")
app.use(morgan("combined"))
//create default API
app.get("/",(req,res)=>{
res.send("Hello Restful API")
})
const cors=require("cors")
app.use(cors())
//create API with parameter
let database=[
    {"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản",
    "Price":70,"Image":"h1.jpg"},
    {"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
    "Price":100,"Image":"h2.jpg"},
    {"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"h3.jpg"},
    {"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"h4.png"},
    {"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"h5.jpg"},
    ]
app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
app.get("/books",(req,res)=>{
    res.send(database)
    })
app.get("/books/:id",cors(),(req,res)=>{
        id=req.params["id"]
        let p=database.find(x=>x.BookId==id)
        res.send(p)
        })
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.post("/books",cors(),(req,res)=>{
    //put json book into database
    database.push(req.body);
    //send message to client(send all database to client)
    res.send(database)
    })
app.put("/books",cors(),(req,res)=>{
        book=database.find(x=>x.BookId==req.body.BookId)
        if(book!=null)
        {
        book.BookName=req.body.BookName
        book.Price=req.body.Price
        book.Image=req.body.Image
        }
        res.send(database)
        })
app.delete("/books/:id",cors(),(req,res)=>{
            id=req.params["id"]
            database = database.filter(x => x.BookId !== id);
            res.send(database)
            })