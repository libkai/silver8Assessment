import Axios from 'axios';

const base_url = 'http://localhost:5000/';
const API = {

    getGreetings: () => {
        return Axios.get(base_url);
    }
}


export default API;