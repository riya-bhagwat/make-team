const router =require("express").Router();
const user =require('../models/User');
const mongoose=require('mongoose');


router.get("/",async (req,res)=>{
    try{
        const users= await user.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
    }
    
})

module.exports=router