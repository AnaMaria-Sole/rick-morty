import axios from "axios";

export const api = axios.create({
    baseURL: 'http://rickandmortyapi.com/api/character/',
    timeout: 5000
})