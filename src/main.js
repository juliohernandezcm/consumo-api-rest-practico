import {
	getTrendingMoviesPreview,
	getCategoriesMoviesPreview,
} from './apiTrasaction.js';
const URL_IMG = 'https://image.tmdb.org/t/p/w300';

export const renderTrendingPreviewList = async () => {
	const trendingMoviesList = await getTrendingMoviesPreview();

	const moviesNodes = trendingMoviesList.map((movie) => {
		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie__container');

		const movieImage = document.createElement('img');
		movieImage.classList.add('movie__img');
		movieImage.setAttribute('src', `${URL_IMG}${movie.poster_path}`);
		movieImage.setAttribute('alt', `${movie.original_title}`);

		movieContainer.appendChild(movieImage);

		return movieContainer;
	});

	const trendingPreview = document.querySelector(
		'#trendingPreview .trendingPreview__movieList'
	);

	trendingPreview.append(...moviesNodes);
};

export const renderCategoriesList = async () => {
	const categoriesList = await getCategoriesMoviesPreview();
	const categoriesPreview = document.querySelector('.categoriesPreview__list');

	categoriesList.map((category) => {
		const categoryContainer = document.createElement('div');
		categoryContainer.classList.add('category__container');

		const categoryTitle = document.createElement('h3');
		categoryTitle.classList.add('category__title');
		categoryTitle.setAttribute('id', `id${category.id}`);
		categoryTitle.textContent = `${category.name}`;

		categoriesPreview.append(categoryContainer);
		categoryContainer.append(categoryTitle);
	});
};
