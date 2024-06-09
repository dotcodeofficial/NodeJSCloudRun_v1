import express from 'express';
import mongoose from 'mongoose';
import User from './Schemas/User.js';
import BearerToken from './Schemas/BearerToken.js';

const uri = "mongodb+srv://admin:hekslrqaF8sBd5Vc@cluster0.q9hq99b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const prefix = "TuLNp6TobxA2yPKY - ";
const app = express();
const port = 8080;

mongoose.connect(uri);

export async function getBearer() {

  try {

    let bearer = await BearerToken.findOne({});

    console.log('file: mongoDBInterface.js, Function: getBearer, Message: Bearer token:' + bearer);
    console.log('System Date:' + Date.now());

    if (bearer == null) {
      return false;
    }
    if (bearer.expires < Date.now()) {
      bearer.deleteOne();
      return false;
    }
    console.log("file: mongoDBInterface.js, Function: getBearer, Message: Bearer token found, token:" + bearer);
    return bearer;



  }
  catch (err) {
    console.error('file: mongoDBInterface.js, Function: getBearer, Error:' + err);
    return err;
  }
}

export async function saveBearer(token) {
  console.log("file: mongoDBInterface.js, Function: saveBearer, Message: saveBearer has begun, token:" + token);
  try {
    await BearerToken.create({ token: token });
  }
  catch (err) {
    console.error('file: mongoDBInterface.js, Function: getBearer, Error:' + err);
    return err;
  }

  return true;
}
  