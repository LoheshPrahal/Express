const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!");
    res.send("Hello! We got your request!");
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})