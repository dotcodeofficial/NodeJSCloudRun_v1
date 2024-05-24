import request from 'request';
import http from 'https';
import axios from 'axios';
import fatSecretRequestParameters from './Models/fatSecretRequestParameters.js';
import bearerToken from './Models/bearer.js';
import fetch from 'node-fetch';

var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13';
var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b';
const bearer = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NDUzNUJFOUI2REY5QzM3M0VDNUNBRTRGMEJFNUE2QTk3REQ3QkMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJTRVUxdnB0dC1jTno3Rnl1VHd2bHBxbDkxN3cifQ.eyJuYmYiOjE3MTY1NDY0NjgsImV4cCI6MTcxNjYzMjg2OCwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI5Y2Q0NGI2ZTY0ZjA0ODVhYTc5ZTVjMGJkMGJmZGExMyIsInNjb3BlIjpbImJhc2ljIl19.IL7TWASHP6Y_ZzDXz3FPxUaOT4XEfWK94gOykjSHpHGfeFsAt9FChLPtuGriDVHwUxWEL2B_Y7NhfvDLEUJjRLxn34_Qhu0Pd1y0vjwDUvGg6_sbwluihHGirPlrMRcIVLO667-PLiZtEjJWmeUOM2ERZ82BI2uJPrx9MeJUCduWYFpME4LDP7ix6DuZ_O_X2nT9kk8dMvcT_myilASOLmWoyYnxxNZpGoWc5Z6Fr-oXS0nFQfZPX2JZIMLJRszYkKiFap7yCCRvJuHhKjGyZy3hAygwrdzpecMOO91LDfJeYYQt96Mh6jbVrBGT5DRLxhJJGMRU8p2C5ZaVyAEg_Q';



/* -----------DO NOT DELETE, THIS IS THE ONLY VERSION THAT ACTUALLY WORKS----------------*/
async function generateBearerToken() {
  let formData = new FormData();
  formData.append('grant_type', 'client_credentials');
  formData.append('user', clientID);
  formData.append('password', clientSecret);
  formData.append('scope', 'basic');

  return axios.post('https://oauth.fatsecret.com/connect/token', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
    }
  }).then((response) => {
    console.log(response.data);
})

    .catch((error) => {
      return error;
    });
}
generateBearerToken();


async function genericRequest(fatSecretRequestParameters) {
  try {
    return axios.get('https://platform.fatsecret.com/rest/server.api' + fatSecretRequestParameters.getParameters, {
      headers: {
        Authorization: bearer,
      }
    })
      .catch((error) => {
        return error;
      }
      );
  }
  catch (error) {
    return error;

  }
}

export function getFoodById(searchString) {
  let fatSecretParams = new fatSecretRequestParameters('food.get.v4', searchString, 'json');

  return genericRequest(fatSecretParams);
}

export function searchFood(searchString) {
  let fatSecretParams = new fatSecretRequestParameters('foods.search', searchString, 'json');

  return genericRequest(fatSecretParams);
}
