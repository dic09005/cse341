
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db('CSE341').collection('contacts').find(); // On this line spelling plays a major factor... contact vs. contacts 
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getObject = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('CSE341').collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getData, getObject };