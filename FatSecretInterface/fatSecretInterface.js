
import axios from 'axios';
import fatSecretRequestParameters from './Models/fatSecretRequestParameters.js';

var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13';
var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b';
const bearer = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4NDUzNUJFOUI2REY5QzM3M0VDNUNBRTRGMEJFNUE2QTk3REQ3QkMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJTRVUxdnB0dC1jTno3Rnl1VHd2bHBxbDkxN3cifQ.eyJuYmYiOjE3MTY4MTk1NDcsImV4cCI6MTcxNjkwNTk0NywiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI5Y2Q0NGI2ZTY0ZjA0ODVhYTc5ZTVjMGJkMGJmZGExMyIsInNjb3BlIjpbImJhc2ljIl19.A5XT_UpWV7BKDHurVyhrByNH7sMt5KlAk0ro-WiKlcUXEp5F5z5Gd1tLwy8T81PmkSS20OhaNCPrsdQLuka7WmntHRfE29yR2q-YTi2CxqTNtRu7LhfGLxtqYCtUrJn9o2wKMUlDqyg_jIhRS9oEp6oKWgBgM5GDvXr2yXN-6XbLFKRlvo4EdH6FCrkckMnV2JoIUMhdsrAbv1HINUoIXSueAFmhz0uYE8_KxsbPFjy8EIW8lfDMlPBR5GTmpmUInKdgr7DENJhFw6IGxtpq19t89bmMcHrvBZtC61bZipfLThZ-Xte_GLIgfaS0tZl47xkgrNUnRFm8wKMNjOTMKQ';


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
    }, timeout: 0
  }).then((response) => {
    console.log(response.data);
})

    .catch((error) => {
      console.log(error);
    });
}

async function genericRequest(fatSecretRequestParameters) {
  console.log("genericRequest called");
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
