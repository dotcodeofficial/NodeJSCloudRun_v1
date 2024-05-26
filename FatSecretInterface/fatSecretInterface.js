import request from 'request';
import http from 'https';
import axios from 'axios';
import fatSecretRequestParameters from './Models/fatSecretRequestParameters.js';
import bearerToken from './Models/bearer.js';
import fetch from 'node-fetch';

var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13';
var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b';
const bearer = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NDUzNUJFOUI2REY5QzM3M0VDNUNBRTRGMEJFNUE2QTk3REQ3QkMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJTRVUxdnB0dC1jTno3Rnl1VHd2bHBxbDkxN3cifQ.eyJuYmYiOjE3MTY3MzIxOTQsImV4cCI6MTcxNjgxODU5NCwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI5Y2Q0NGI2ZTY0ZjA0ODVhYTc5ZTVjMGJkMGJmZGExMyIsInNjb3BlIjpbImJhc2ljIl19.IDmjqomME3v9uGALRMOtAq9QK_zptZCZRo2nC8GPb5SK2NoqsFh1Gek2up_E4Nqy90P1dc7juoWA_W9P55wT6GtDlPvl5bC7ie4f3GEQ7II_WK8O8ZEZRLCwG95pB_Xegt3G162xBXkP-6paFtDn_B8el-_nLcXPNMG7o0dhe_JbAyfKT84flEm6i1JoEKC1LnBkq3NF-J_HAFs6B__nKZHJwGfCnuTskwQw0vLwDfweepk1WSQQ4mlkytt1blUTlWbAf71jvab7zUkCXk9GKhPEx9ec6R1syKko8eiuJMpabUHZ0lZ5sbfv7cOFvbkfqcdaLtJsr8E-tGLOoGzTjA';



/* -----------DO NOT DELETE, THIS IS THE ONLY VERSION THAT ACTUALLY WORKS----------------*/
async function generateBearerToken() {
  console.log("generateBearerToken called");
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
      console.log(error);
    });
}

generateBearerToken();

async function genericRequest(fatSecretRequestParameters) {
  console.log("genericRequest called");
  generateBearerToken();
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
  console.log("getFoodById called");
  let fatSecretParams = new fatSecretRequestParameters('food.get.v4', searchString, 'json');

  return genericRequest(fatSecretParams);
}

export function searchFood(searchString) {
  let fatSecretParams = new fatSecretRequestParameters('foods.search', searchString, 'json');

  return genericRequest(fatSecretParams);
}
