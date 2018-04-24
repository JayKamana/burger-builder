import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-app-23401.firebaseio.com/'
});

export default instance;
