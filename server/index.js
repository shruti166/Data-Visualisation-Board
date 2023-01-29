const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

connect();

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
