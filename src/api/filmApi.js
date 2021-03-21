import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
        'content-type':'application/json'
    }
});

export default {
    searchFilms: (filmStr) =>
    instance({
        'method':'POST',
        'url':'/v1/film/'+filmStr
    }),
    getFilm: (filmId) =>
    instance({
        'method':'GET',
        'url':'/v1/film/'+filmId
    }),
    predictFilm: (filmData) =>
    instance({
        'method':'POST',
        'url':'/predict-film/',
        'data': filmData
    })
}