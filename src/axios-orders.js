import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6f47e.firebaseio.com/'
});



export default instance;
