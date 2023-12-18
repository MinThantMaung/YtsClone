import {axiosInstance} from "../utils/axiosInstance";

export const getALlMovies = async () => {
    try {
        const res = await axiosInstance.get('list_movies.json?limit=24')
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const get4KMovies = async () => {
    try {
        const res = await axiosInstance.get('list_movies.json?quality=4k&limit=24')
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const getRankingMovies = async () => {
    try {
        const res = await axiosInstance.get('list_movies.json?sort_by=rating&limit=24')
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const getTrendingMovies = async () => {
    try {
        const res = await axiosInstance.get('list_movies.json?sort_by=download_count&limit=24')
        return res.data.data.movies
    } catch (e) {
        throw e;
    }
}

export const getMovieDetailById = async (movieId) => {
    try {
        const res = await axiosInstance.get(`movie_details.json?movie_id=${movieId}`);
        return res.data.data.movie; // Update to access the 'movie' property directly
    } catch (e) {
        throw e;
    }
};
