const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

mongoose.connect("mongodb+srv://bernaelms1368:92O9oCj6UzCaNrSg@backenddb.6apoxci.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed!");
});