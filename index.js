import express from 'express';

import { searchFood, getFoodById } from './FatSecretInterface/fatSecretInterface.js';
import { addUser } from './MongoDBInterface/mongoDBInterface.js';

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

app.get('/getUsers', (req, res) => {
  res.send(getMovies());
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});