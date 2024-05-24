import request from 'request';
import http from 'https';
import axios from 'axios';
import fatSecretRequestParameters from './Models/fatSecretRequestParameters.js';


var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13';
var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b';
const bearer = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NDUzNUJFOUI2REY5QzM3M0VDNUNBRTRGMEJFNUE2QTk3REQ3QkMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJTRVUxdnB0dC1jTno3Rnl1VHd2bHBxbDkxN3cifQ.eyJuYmYiOjE3MTY1NDY0NjgsImV4cCI6MTcxNjYzMjg2OCwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI5Y2Q0NGI2ZTY0ZjA0ODVhYTc5ZTVjMGJkMGJmZGExMyIsInNjb3BlIjpbImJhc2ljIl19.IL7TWASHP6Y_ZzDXz3FPxUaOT4XEfWK94gOykjSHpHGfeFsAt9FChLPtuGriDVHwUxWEL2B_Y7NhfvDLEUJjRLxn34_Qhu0Pd1y0vjwDUvGg6_sbwluihHGirPlrMRcIVLO667-PLiZtEjJWmeUOM2ERZ82BI2uJPrx9MeJUCduWYFpME4LDP7ix6DuZ_O_X2nT9kk8dMvcT_myilASOLmWoyYnxxNZpGoWc5Z6Fr-oXS0nFQfZPX2JZIMLJRszYkKiFap7yCCRvJuHhKjGyZy3hAygwrdzpecMOO91LDfJeYYQt96Mh6jbVrBGT5DRLxhJJGMRU8p2C5ZaVyAEg_Q';


async function genericRequest(fatSecretRequestParameters) {
  console.log("genericRequest entered");
  try {
    return axios.get('https://platform.fatsecret.com/rest/server.api' + fatSecretRequestParameters.getParameters, {
      headers: {
        Authorization: bearer
      }
    })
      .catch((error) => {
        console.log(error);
        return error;
      }
      );
  }
  catch (error) {
    console.log(error);
    return error;

  }
}

export function getFoodById(searchString) {
  console.log("getFoodById entered");
  let fatSecretParams = new fatSecretRequestParameters('food.get.v4', searchString, 'json');

  return genericRequest(fatSecretParams);
}

export function searchFood(searchString) {
  console.log("searchFood entered");
  let fatSecretParams = new fatSecretRequestParameters('foods.search', searchString, 'json');

  return genericRequest(fatSecretParams);
}



getBearerToken();

function getBearerToken() {
  
  var options = {
    method: 'POST',
    url: 'https://oauth.fatsecret.com/connect/token',
    method : 'POST',
    auth : {
       user : clientID,
       password : clientSecret
    },
    headers: { 'content-type': 'application/x-www-form-urlencoded'},
    form: {
       'grant_type': 'client_credentials',
       'scope' : 'basic'
    },
    json: true
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body.access_token);
  });
}



/*
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13'
var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b'
var bearer = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NDUzNUJFOUI2REY5QzM3M0VDNUNBRTRGMEJFNUE2QTk3REQ3QkMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJTRVUxdnB0dC1jTno3Rnl1VHd2bHBxbDkxN3cifQ.eyJuYmYiOjE3MTYzMTY2MzAsImV4cCI6MTcxNjQwMzAzMCwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI5Y2Q0NGI2ZTY0ZjA0ODVhYTc5ZTVjMGJkMGJmZGExMyIsInNjb3BlIjpbImJhc2ljIl19.lPaQ3wChm7fy36Jm-Gug5jjXUEPGE1-luMNTyPRkZEL4y3kHru-NJkGhlBGOl8jjsvPYz5T7OAUxR1RfeRgmyRDcSOvGNsrOsNB3SE3UQ3g_T7Ml1vkgIciELV3mUG_NSvc0koWWQHquTO3CpsKTC1wfBdEz3NLgZw7dsf3_dkYScFTEXF7R0rynrjeuoKBoUkxqAW8kQw4eT2BGYRfwqywkyz2ZG9D3YgQLy9tlZsN7I6FNm6H1ihKtokY-1IDcwzm50tF2mhGwO01BIyUaEWiq00AOThM8HFVpOEAzL_sOcZBH6lzMW3LPSZ7QMTfyihdoiZM2tz8naHfW79GjxA'


const http = require('https');
const axios = require('axios');

const options = {
  method: 'POST',
  hostname: 'https://oauth.fatsecret.com/connect/token',
  headers: {
    Authorization: bearer,
    'Content-Type': 'application/json',
    'method' : 'foods.search',
    'search_expression' : 'banana',
    'format' : 'json'
  }
};

const headers = {
  'Content-Type': 'application/json',
  'method' : 'foods.search',
  'search_expression' : 'banana',
  'format' : 'json'
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

/*
var options = {
   method: 'POST',
   url: 'https://oauth.fatsecret.com/connect/token',
   method : 'POST',
   auth : {
      user : clientID,
      password : clientSecret
   },
   headers: { 'content-type': 'application/x-www-form-urlencoded'},
   form: {
      'grant_type': 'client_credentials',
      'scope' : 'basic'
   },
   json: true
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);

   console.log(body);
});

*/
