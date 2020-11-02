import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-project-8be36.firebaseio.com/"
});

export default instance;