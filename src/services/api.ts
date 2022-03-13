import axios from 'axios'

const api = axios.create({
    baseURL:'http://hp-api.herokuapp.com/api'
});

export default api