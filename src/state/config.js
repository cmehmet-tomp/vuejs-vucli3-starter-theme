/*
    Defines the API route we are using.
*/

import axios from 'axios'

var site_axios = axios.create({
    headers: { 'Content-Type': 'application/json'},
    timeout: 3000,
    keepAlive: true
    
})

var api_endpoint = 'http://yourapi/api/';

export const API_CONFIG = {
  SITE_API : site_axios,
  API_ENDPOINT: api_endpoint
}
