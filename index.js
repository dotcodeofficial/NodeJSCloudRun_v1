import express from 'express';

import {searchFood, getFoodById} from './FatSecretInterface/fatSecretInterface.js';

const app = express();
const port = 8080;


app.get('/getByID', (req, res) => {
  req.query.id
  getFoodById(req.query.id).then((data) => {res.send(data.data);}).catch((error) => {res.send(error);});
});

app.get('/searchFood', (req, res) => {
  req.query.id
  searchFood(req.query.id).then((data) => {res.send(data.data);}).catch((error) => {res.send(error);});
});

app.get('/appData', (req, res) => {
  res.send(process.versions);
});


app.listen(port, () => {
  console.log('Server started on port ' + port);
});