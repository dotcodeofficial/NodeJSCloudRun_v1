const express = require('express');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const uri = "mongodb://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&directConnection=true";

const app = express();
const port = 8080;

const client = new MongoClient(uri);
client.connect();
  async function run() {
    try {
      
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");

      const query = { title: "Room" };

      const options = {
        sort: { "imdb.rating": -1 },

        projection: { _id: 0, title: 1, imdb: 1 },
      };

      const movie = await movies.findOne(query, options);
      console.log(movie);
      return movie;
    }
    finally {
    }
  }


app.get('/getUsers', (req, res) => {

    run().then(foo => res.send(foo)).catch(err => console.log(err));
});

// Define your API routes here
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api', (req, res) => {
    res.send('Hello, API!');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});