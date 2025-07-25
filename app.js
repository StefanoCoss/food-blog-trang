const express = require("express");
const app = express();
const port = 3000;
const appName = "food-blog";
const generalRoutes = require("./routes/general");

app.set("view engine","ejs");
app.use("/",generalRoutes);
app.use(express.static("public"));


app.listen(port,()=>{
    console.log(`${appName} serving at http://localhost:${port}`);

});

// app.listen(process.env.PORT,process.env.IP,function(){
// console.log("trangs-food-blog Running on HEROKU")
// });


