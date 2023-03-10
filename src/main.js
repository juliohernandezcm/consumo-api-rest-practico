import {
	getTrendingMoviesPreview,
	getCategoriesMoviesPreview,
} from './apiTrasaction.js';

import {
	headerContainer,
	headerArrow,
	headerTitle,
	headerTitleCategoryView,
	headerSearchForm,
	trendingPreviewcontainer,
	categoriesPreviewContainer,
	genericList,
	genericListBtn,
	movieDetail,
} from './nodes.js';

const URL_IMG = 'https://image.tmdb.org/t/p/w300';

const renderTrendingPreviewList = async () => {
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

const renderCategoriesList = async () => {
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

const renderMovieDetail = () => {
	headerContainer.classList.add('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerSearchForm.classList.add('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.add('movieDetail__container');
};

const renderSearchPage = () => {
	headerContainer.classList.remove('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerSearchForm.classList.remove('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.remove('movieDetail__container');
	genericList.classList.add('genericList__container');

	genericListBtn.classList.remove('inactive');
};

const renderCategoryPage = () => {
	headerContainer.classList.remove('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitleCategoryView.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerSearchForm.classList.add('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.remove('movieDetail__container');
	genericList.classList.add('genericList__container');

	genericListBtn.classList.remove('inactive');
};

export {
	renderTrendingPreviewList,
	renderCategoriesList,
	renderMovieDetail,
	renderSearchPage,
	renderCategoryPage,
};
