import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5f0c78809d1e150016b38277.mockapi.io',
});

export default api;
