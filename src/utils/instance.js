import axios from 'axios';

const bank = axios.create({
    baseURL: 'https://bank.jedidiazfagundez.site/api/',
});

export default bank;