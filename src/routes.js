const express = require("express");
const router = express.Router();
const Product = require("../models/userModel");

// Modular API
router.get("/", (req, res) => {
  res.send("hello");
});








//CRUD


// Create operation

router.post("/forms", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send("Data created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//retrieve operation

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Product1 = await Product.findById(id);
    res.json(Products1);
  } catch (error) {
    res.status(404).send("404 not found");
  }
});

//update operation
router.put("/products/update/:id", async (req,res)=>{
 
  try {
    const {id} = req.params;
    const data=await Product.findByIdAndUpdate(id,req.body)
    if(!data)
    {
      res.status(500).send("product not available")
    }
    const Updatedproduct = await Product.findById(id);
    res.status(200).json(Updatedproducts)
   
  } catch (error) {
    res.status(500).send(error.message)
  }

})

//delete









router.post("/aboutus", (req, res) => {
  const newUser = { id: 1, user: "Ahmad Raza" };
  users.push(newUser);
  res.status(200).json(newUser);
});

router.get("/main", (req, res) => {
  const { user } = req.body;
  if (user) {
    res.send("User is not empty");
  } else {
    res.send("User is empty");
  }
});

// Exporting router
module.exports = router;
