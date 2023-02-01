const express = require('express');
const {getData}= require('../controller/data.controller');

const dataRoutes = express.Router();

dataRoutes.get("/data", async (req, res) => {
    const {
      end_year = "",
      topic = "",
      region = "",
      sector = "",
      source = ""
    } = req.query;
  
    const rs = await getData(end_year, topic, region, sector, source);
    return res.send(rs);
  });