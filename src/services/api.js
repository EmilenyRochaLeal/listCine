import axios from "axios";
//https://api.themoviedb.org/3/movie/now_playing?api_key=3b19b5ebcb67c869c82964a7885df5ec&language=pt-BR
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;