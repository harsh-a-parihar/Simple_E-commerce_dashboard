const express = require('express');
const cors = require('cors');
require("./db/config");
const User = require('./db/Users');
const app = express();


// middleware
app.use(express.json());
app.use(cors());

// create app route
app.post("/signup", async (req, resp) => {
    console.log("Request Body:", req.body); // Log to verify request payload
    try {
        let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        resp.send(result);

    } catch (error) {
        console.error("Error saving user:", error);
        resp.status(500).send({ error: 'Internal Server Error' });
    }
});

app.post("/login", async (req, resp) => {
    try {
        if(req.body.password && req.body.email) {
            let user = await User.findOne(req.body).select("-password");
            if(user){
                resp.send(user);
            }else{
                resp.send({result:'No user found!!'});
            }
        }else{
            resp.send({result:'No user found!!'});
        }
    } catch (error) {
        console.error("Error saving user:", error);
        resp.status(500).send({ error: 'Internal Server Error' });
    }
});




app.listen(4000);