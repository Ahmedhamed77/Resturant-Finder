import axiosPackage from 'axios';

export const server = {
  live: 'https://foodbukka.herokuapp.com/api/v1/',
  dev: '',
};

export const baseURL = server.live;

const startToken = '';

export const axios = axiosPackage.create({
  headers: {
    Authorization: startToken ? `Bearer ${startToken}` : '',
  },

  baseURL,
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    console.log('axios error', error, error.response);
    return Promise.reject(error.response);
  },
);
