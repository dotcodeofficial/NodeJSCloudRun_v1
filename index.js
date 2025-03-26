import express from 'express';

import { searchFood, getFoodById, getFoodByBarcode, getBearerToken } from './FatSecretInterface/fatSecretInterface.js';

const app = express();
const port = 8080;



app.get('/foodItem/getByID', (req, res) => {
  getFoodById(req.query.id).then((data) => {
    res.send(data.data);
  });
});

app.get('/foodItem/getByBarcode', (req, res) => {
  getFoodByBarcode(req.query.id).then((data) => {
    getFoodById(data.data.food_id.value).then((data) => {
      res.send(data.data);
    });
  });
});

app.get('/foodItem/searchFood', (req, res) => {
  searchFood(req.query.id).then((data) => {
    res.send(data.data);
  });
});



app.get('/appData', (req, res) => {
  res.send(process.versions);
});

app.get('/saveBearer', (req, res) => {
  getBearerToken().then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});