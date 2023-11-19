const mongoose=require("mongoose")

const connectToMongoDB=async ()=>{await mongoose.connect("mongodb+srv://bhagwatriya882:riya@cluster0.zctrdkc.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("DB connection sucessfull")}).catch((err)=>{console.log(err)})};

module.exports=connectToMongoDB;

