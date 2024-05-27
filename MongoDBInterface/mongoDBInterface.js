import express from 'express';
import mongoose from 'mongoose';
import User from './Schemas/User.js';

const uri = "mongodb+srv://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const uri = "mongodb://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&directConnection=true";

const prefix = "TuLNp6TobxA2yPKY - ";
const app = express();
const port = 8080;

mongoose.connect(uri);

async function run() {
  const user = await User.create({ username: 'Alice', email: 'string' });
  console.log(user);
}

export async function addUser() {

}