var express=require("express");
var router=express.Router();


data={

    largeGreeting:"Easy and tasty food for humans :)",
    smallGreeting:"Welcome to my blog!"
    
}
router.get("/",(req,res)=>{
    
    res.render("indexNew",data);

});

module.exports=router;