const express = require('express');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//const uri = "mongodb://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&directConnection=true";
const prefix = "TuLNp6TobxA2yPKY - ";
const app = express();
const port = 8080;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });


    const movies = client.db("sample_mflix").collection("movies");

    const query = { title: "Room" };
    const options = {
      sort: { "imdb.rating": -1 },
      projection: { _id: 0, title: 1, imdb: 1 },
    };

    const movie = await movies.findOne(query, options);
    console.log(movie);
    return movie;
  }
  catch (e) {
    console.error(prefix + " error " + e);
  }
  finally {
    await client.close();
  }
}


app.get('/getUsers', (req, res) => {

  run().then(foo => {
  }).catch(err => console.log(err));
  res.send("Testing getUsers");
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