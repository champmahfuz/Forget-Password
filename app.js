require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8010;


// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to password app</h1>");
});


app.listen(port, () => {
    console.log(`server start at port no : ${port}`);
})


// https://www.youtube.com/watch?v=T6sBAXGwhgw&t=1124s
// https://github.com/harsh17112000/MERN_forgot_password
