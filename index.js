const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const cors = require("cors");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://bernaelms1368:92O9oCj6UzCaNrSg@backenddb.6apoxci.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(5173, () => {
      console.log("Server is running on port 5173");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
