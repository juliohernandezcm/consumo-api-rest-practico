import {
	renderCategoriesList,
	renderTrendingPreviewList,
	renderMovieDetail,
	renderSearchPage,
	renderCategoriesPage,
	renderTrendsPage,
	renderLikedMovies,
} from './renders.js';

import {
	searchBtn,
	headerArrow,
	trendingPreviewBtn,
	inputSearch,
} from './nodes.js';

const navigator = () => {
	if (location.hash.startsWith('#trends')) {
		renderTrendsPage();
	} else if (location.hash.startsWith('#search=')) {
		renderSearchPage();
	} else if (location.hash.startsWith('#category=')) {
		renderCategoriesPage();
	} else if (location.hash.startsWith('#movie=')) {
		renderMovieDetail();
	} else {
		renderTrendingPreviewList();
		renderCategoriesList();
		renderLikedMovies();
	}
	window.scrollTo(0, 0);
};

searchBtn.addEventListener('click', () => {
	location.hash = `#search=${inputSearch.value}`;
});

headerArrow.addEventListener('click', () => {
	history.back();
});

trendingPreviewBtn.addEventListener('click', () => {
	location.hash = '#trends';
});

inputSearch.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		location.hash = `#search=${inputSearch.value}`;
	}
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
window.onhashchange = () => location.reload();
