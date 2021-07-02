import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '0dfcbeadebc18851e5153b02cb8184a4',
        language: 'es-ES'
    }
})

export default movieDB;