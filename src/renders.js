import {
	getCategoriesMoviesPreview,
	getTrendingMoviesPreview,
	getMoviesByCategories,
	getMoviesBySearch,
	getTrendingMovies,
	getMovieById,
	getSimilarMovies,
} from './api-trasaction.js';

import {
	headerContainer,
	headerArrow,
	headerTitle,
	headerSearchForm,
	trendingPreviewcontainer,
	trendingPreviewMovieList,
	categoriesPreviewContainer,
	categoriesPreviewList,
	genericListBtn,
	headerTitleCategoryView,
	genericList,
	movieDetail,
	movieDetailTitle,
	movieDetailScore,
	movieDetailDescription,
	categoriesList,
	relatedMoviesScrollContainer,
} from './nodes.js';

const URL_IMG = 'https://image.tmdb.org/t/p/w300';
const URL_IMG_500 = 'https://image.tmdb.org/t/p/w500';

// Utils
const visibilityChecker = (entries) => {
	entries.forEach((element) => {
		if (element.isIntersecting) {
			const url = element.target.getAttribute('data-img');
			element.target.setAttribute('src', url);
		}
	});
};

const lazyLoader = new IntersectionObserver(visibilityChecker);

const createMoviesContainers = (apiData, container) => {
	console.log(apiData);
	container.innerHTML = '';
	const moviesNodes = apiData.map((movie) => {
		const movieContainer = document.createElement('div');
		movieContainer.classList.add('movie__container');
		movieContainer.addEventListener(
			'click',
			() => (location.hash = `#movie=${movie.id}`)
		);

		const movieImage = document.createElement('img');
		movieImage.classList.add('movie__img');
		movieImage.setAttribute('data-img', `${URL_IMG}${movie.poster_path}`);
		movieImage.setAttribute('alt', `${movie.original_title}`);

		movieImage.addEventListener('error', () => {
			movieImage.setAttribute('src', '../assets/no-image.png');
			movieImage.style = 'filter: blur(1.5px)';

			const movieTitle = document.createElement('p');
			movieTitle.classList.add('movie__title');
			movieTitle.textContent = movie.original_title;
			movieContainer.appendChild(movieTitle);
		});

		lazyLoader.observe(movieImage);

		movieContainer.appendChild(movieImage);
		return movieContainer;
	});

	container.append(...moviesNodes);
};

const createCategoriesContainer = (apiDataCategories, container) => {
	container.innerHTML = '';

	apiDataCategories.map((category) => {
		const categoryContainer = document.createElement('div');
		categoryContainer.classList.add('category__container');

		const categoryTitle = document.createElement('h3');
		categoryTitle.classList.add('category__title');
		categoryTitle.setAttribute('id', `id${category.id}`);
		categoryTitle.textContent = `${category.name}`;
		categoryTitle.addEventListener('click', () => {
			location.hash = `category=${category.id}-${category.name}`;
		});

		container.append(categoryContainer);

		categoryContainer.append(categoryTitle);
	});
};

/* HOME RENDERS */
export const renderTrendingPreviewList = async () => {
	const trendingMoviesList = await getTrendingMoviesPreview();

	createMoviesContainers(trendingMoviesList, trendingPreviewMovieList);
};

export const renderCategoriesList = async () => {
	const categoriesList = await getCategoriesMoviesPreview();

	createCategoriesContainer(categoriesList, categoriesPreviewList);
};

/* MOVIE DETAILS RENDER */
export const renderMovieDetail = async () => {
	const [_, movieId] = location.hash.split('=');

	const movieDetails = await getMovieById(movieId);
	const similarMovies = await getSimilarMovies(movieId);

	console.log(similarMovies);

	headerContainer.classList.add('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerSearchForm.classList.add('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.add('movieDetail__container');

	movieDetailTitle.textContent = movieDetails.original_title;
	movieDetailDescription.textContent = movieDetails.overview;
	movieDetailScore.textContent = movieDetails.vote_average.toFixed(1);

	headerContainer.style.background = `
   linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 19.27%,
      rgba(0, 0, 0, 0) 29.17%
      ),
      url(${URL_IMG_500}${movieDetails.poster_path})`;

	createCategoriesContainer(movieDetails.genres, categoriesList);
	createMoviesContainers(similarMovies, relatedMoviesScrollContainer);
};

/* SEARCH PAGE RENDER */
export const renderSearchPage = async () => {
	const [_, query] = location.hash.split('=');

	const searchList = await getMoviesBySearch(query);

	headerContainer.classList.remove('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerSearchForm.classList.remove('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.remove('movieDetail__container');
	genericList.classList.add('genericList__container');

	genericListBtn.classList.remove('inactive');

	createMoviesContainers(searchList, genericList);
};

/* TRENDS PAGE RENDER */
export const renderTrendsPage = async () => {
	const trendingMoviesList = await getTrendingMovies();

	headerContainer.classList.remove('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerSearchForm.classList.remove('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.remove('movieDetail__container');
	genericList.classList.add('genericList__container');

	genericListBtn.classList.remove('inactive');

	createMoviesContainers(trendingMoviesList, genericList);
};

/* CATEGORIES PAGE RENDERS */
export const renderCategoriesPage = async () => {
	const [_, categoryData] = location.hash.split('=');
	const [id, idName] = categoryData.split('-');

	const moviesByCategories = await getMoviesByCategories(id);

	headerContainer.classList.remove('header__container--long');
	headerArrow.classList.remove('inactive');
	headerTitle.classList.add('inactive');
	headerTitleCategoryView.classList.remove('inactive');
	headerTitleCategoryView.textContent = idName.split('%20').join(' ');
	headerSearchForm.classList.add('inactive');

	trendingPreviewcontainer.classList.add('inactive');
	categoriesPreviewContainer.classList.add('inactive');

	movieDetail.classList.remove('movieDetail__container');
	genericList.classList.add('genericList__container');

	genericListBtn.classList.remove('inactive');

	createMoviesContainers(moviesByCategories, genericList);

	window.scrollTo(0, 0);
};

/* OBSERVER */
