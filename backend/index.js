const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
var cors = require('cors')
var app = express()

// const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("what u want me!");
});

app.listen(port, () => {
  console.log(`mirza backend listening on port ${port}`);
});
