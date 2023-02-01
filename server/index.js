const express = require("express");
const connect = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");
const app = express();
app.use(express.json());
app.use(dataRoutes);

const port = 8080;

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
