
import axios from 'axios';
import fatSecretRequestParameters from './Models/fatSecretRequestParameters.js';
import { saveBearer, getBearer } from '../MongoDBInterface/mongoDBInterface.js';

var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13';
var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b';

async function generateBearerToken() {

  let formData = new FormData();
  formData.append('grant_type', 'client_credentials');
  formData.append('user', clientID);
  formData.append('password', clientSecret);
  console.log(formData);
  let response = await axios.post('https://oauth.fatsecret.com/connect/token', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
    }, timeout: 0
  });
  return response.data.access_token;
}

export async function getBearerToken() {
  let bearer = await getBearer();

  if (!bearer) {

    bearer = await generateBearerToken();
    saveBearer(bearer);
    return bearer;
  }

  return bearer.token;
}





async function genericRequest(fatSecretRequestParameters) {
  try {
    return axios.get('https://platform.fatsecret.com/rest/server.api' + fatSecretRequestParameters.getParameters, {
      headers: {
        Authorization: 'Bearer ' + await getBearerToken(),
      }
    })
      .catch((error) => {
        return error;
      }
      );
  }
  catch (err) {
    return err;
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

export function getFoodByBarcode(searchString) {
  let fatSecretParams = new fatSecretRequestParameters('food.find_id_for_barcode', searchString, 'json');

  return genericRequest(fatSecretParams);
}