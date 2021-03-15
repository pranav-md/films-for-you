import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
        'content-type':'application/json'
    }
});

export default {
    searchFilms: (symbol) =>
    instance({
        'method':'POST',
        'url':'/v1/film/'+symbol
    })
}