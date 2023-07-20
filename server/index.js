// server/index.js

const express = require("express");

const PORT = process.env.PORT||3001;

const app = express();


//have node serve the files for our built react app
app.use(express.static(path.resolve(__dirname, '../client/build')));


//Handle get requests tp /api route
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

//all other get request not handled before will return our react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

