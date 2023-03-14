const URL_TRENDING = '/trending/movie/day';
const URL_CATEGORIES = '/genre/movie/list';
const URL_MOVIE_DISCOVER = '/discover/movie';
const URL_SEARCH_MOVIE = '/search/movie';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		api_key: API_KEY,
	},
});

import { API_KEY } from './secrets.js';

const getTrendingMoviesPreview = async () => {
	const { data } = await api(URL_TRENDING);

	let trendingMovies = data.results;

	return trendingMovies;
};

const getCategoriesMoviesPreview = async () => {
	const { data } = await api(URL_CATEGORIES);
	let categories = data.genres;

	return categories;
};

const getMoviesByCategories = async (id) => {
	const { data } = await api(URL_MOVIE_DISCOVER, {
		params: {
			with_genres: id,
		},
	});

	let movies = data.results;

	return movies;
};

const getMoviesBySearch = async (query) => {
	const { data } = await api(URL_SEARCH_MOVIE, {
		params: {
			query,
		},
	});

	let movies = data.results;

	return movies;
};

const getTrendingMovies = async () => {
	const { data } = await api(URL_TRENDING);

	let trendingMovies = data.results;

	return trendingMovies;
};

const getMovieById = async (movieId) => {
	const { data: movie } = await api(`/movie/${movieId}`);

	return movie;
};

const getSimilarMovies = async (movieId) => {
	const { data } = await api(`/movie/${movieId}/similar`);

	const similarMovies = data.results;

	return similarMovies;
};

export {
	getTrendingMoviesPreview,
	getCategoriesMoviesPreview,
	getMoviesByCategories,
	getMoviesBySearch,
	getTrendingMovies,
	getMovieById,
	getSimilarMovies,
};
