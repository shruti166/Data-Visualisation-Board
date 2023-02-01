const mongoose = require("mongoose");
const dataModel = require("../models/data.models");

const getData = async (end_year, topic, region, sector, source) => {
  const data = await dataModel.find({
    end_year: { $regex: end_year },
    topic: { $regex: topic },
    region: { $regex: region },
    sector: { $regex: sector },
    source: { $regex: source },
  });
  return data;
};

module.exports = { getData };
