import express from 'express';

import { searchFood, getFoodById, getBearerToken } from './FatSecretInterface/fatSecretInterface.js';
import { getBearer, saveBearer } from './MongoDBInterface/mongoDBInterface.js';

const app = express();
const port = 8080;



app.get('/getByID', (req, res) => {
  getFoodById(req.query.id).then((data) => {
    res.send(data.data); 
  });
});

app.get('/searchFood', (req, res) => {
    searchFood(req.query.id).then((data) => { 
      res.send(data.data);
  });
});



app.get('/appData', (req, res) => {
  res.send(process.versions);
});

app.get('/saveBearer', (req, res) => {
  getBearerToken().then((data) => {
    console.log('file: index.js, Function: saveBearer, Message: getBearerToken has run');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});