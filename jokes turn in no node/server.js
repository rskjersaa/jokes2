const express = require("express");
const app = express();
const mongoose = require('mongoose')
const port = 8000;

// mongoose.connect('mongodb://127.0.0.1/jokesdb',()=>
//     console.log('Connected to MongoDB'))

require("./server/config/mongoose.config");

    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const JokesRoutes = require("./server/routes/jokes.routes");
JokesRoutes(app);
    
app.listen(port, () => 
    console.log(`The server is all fired up on port ${port}`));
