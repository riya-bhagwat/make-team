const express=require("express");
const app=express();
const userRoute=require("./routes/user")
const dotenv=require("dotenv")
dotenv.config();

const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("DB connection sucessfull")}).catch((err)=>{console.log(err)});

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use("/api/users",userRoute);


app.listen(5000,()=>{
    console.log("backend server running")
})