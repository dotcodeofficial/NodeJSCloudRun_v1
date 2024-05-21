import express from 'express';

import {searchFood, getFoodById} from './FatSecretInterface/fatSecretInterface.js';

const app = express();
const port = 8080;

getFoodById('35755').then((data) => {console.log(data.data);});
searchFood('banana');

app.get('/getByID', (req, res) => {
  req.query.id
  getFoodById(req.query.id).then((data) => {res.send(data.data);});
});

app.get('/searchFood', (req, res) => {
  req.query.id
  searchFood(req.query.id).then((data) => {res.send(data.data);});
});


app.listen(port, () => {
  console.log('Server started on port ' + port);
});