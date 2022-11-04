import react from 'react';
import envVars from '../envVars';
import axios from 'axios';

const api = () =>  axios.create(
	{
	  baseURL: envVars.DB_URL,
	  //timeout: 2000,
	  headers: {
	  	'Authorization': envVars.DEV_TOKEN
	  }
  }
);

export default api();