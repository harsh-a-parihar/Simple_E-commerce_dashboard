const express = require('express');
const app = express();

// create app route
app.get("/", (req, resp)=> {
    resp.send("app is running!!")
})

// listening of port 3000
app.listen(3000);