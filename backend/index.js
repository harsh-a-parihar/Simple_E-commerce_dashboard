const express = require('express');
const cors = require('cors');
require("./db/config");
const User = require('./db/User');
const Product = require('./db/Product');
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

app.post("/add", async (req, resp) => {
    try {
        let product = new Product(req.body);
        let result = await product.save();
        resp.status(201).json({ message: 'Product added successfully', product });
        // resp.send(result);

    } catch (error) {
        console.error("Error saving user:", error);
        resp.status(500).json({ message: 'Failed to add product' });
    }
})

app.get("/products", async (req, resp) => {
    try {
        let products = await Product.find();
        if (products.length>0) {
            resp.send(products)
        } else {
            resp.send({result:"No Products found"})
        }
    } catch (error) {
        console.error("Error listing products:", error);
        resp.status(500).json({ message: 'Failed to list product' });
    }
})

app.delete("/products/:id", async (req, resp) => {
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
});

app.listen(5001);