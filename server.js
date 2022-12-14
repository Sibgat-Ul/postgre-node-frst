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

const db = require("./app/models/index");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/tutorial.route")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => { console.log("running on ", PORT) });
