const express = require("express")
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const fs = require('fs');
    fs.readdir(".", function(err, files) {
        if (err) throw err;
        res.status(200).send(files);
    })
})



const currentDate = new Date();
const timestamp = currentDate.getTime();
const date = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear();
const fs = require('fs');
fs.writeFile(`./${date}.txt`, `${currentDate}`, function(err) {
    if (err) throw err;
})



app.listen(port, () => {
    console.log(`server listening at port ${port}`)
})