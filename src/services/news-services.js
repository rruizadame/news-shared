import axios from 'axios';

//const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-04-29&sortBy=popularity&apiKey=a33b418fcf8747e0af63342ede078bde';
const url = 'http://api.mediastack.com/v1/news';
//?access_key=5caf9f6d86636e646f0e37cfd6f45066
const apiKeys = {
  1: '5caf9f6d86636e646f0e37cfd6f45066',
  2: '794ef79424d38902bf3f6e404d6a722c',
};

const getNews = (items, apiKeyNumber) => {
  return axios.get(`${url}?access_key=${apiKeys[apiKeyNumber]}&categories=business&countries=us&limit=1`).then((res) => res.data);
};

export { getNews };
