const URL_TRENDING = '/trending/movie/day';
const URL_CATEGORIES = '/genre/movie/list';

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

export { getTrendingMoviesPreview, getCategoriesMoviesPreview };
