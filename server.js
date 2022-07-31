const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

let corsOption = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({ message: "welcome to tut"});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log("running on ", PORT) });
