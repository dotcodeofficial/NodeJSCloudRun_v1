const express = require('express');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
const port = 8080;
/*
const UserSchema = new mongoose.Schema({
    _id: ObjectId,
    name: String,
    email: String,
    password: String
});
mongoose.connect('mongodb+srv://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/users');
const UserModel = mongoose.model('users', UserSchema);

app.get('/getUsers', (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users);
    }).catch(function(err){
        console.log(err);
    });
});
*/

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