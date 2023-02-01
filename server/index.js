const express = require("express");
const connect = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
const app = express();
app.use(express.json());
app.use("/data", dataRoutes);

const port = 8080;

connect();
app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
})
