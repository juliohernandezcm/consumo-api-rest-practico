import {
	renderCategoriesList,
	renderTrendingPreviewList,
	renderMovieDetail,
	renderSearchPage,
	renderTrendsPage,
} from './renders.js';

import { searchBtn, headerArrow, trendingPreviewBtn } from './nodes.js';

const navigator = () => {
	location.hash.startsWith('#trends')
		? trendsPage()
		: location.hash.startsWith('#search=')
		? searchPage()
		: location.hash.startsWith('#category=')
		? categoriesPage()
		: location.hash.startsWith('#movie=')
		? movieDatailsPage()
		: homePage();
};

const homePage = () => {
	renderTrendingPreviewList();
	renderCategoriesList();
};

const trendsPage = () => renderTrendsPage();
const searchPage = () => renderSearchPage();
const categoriesPage = () => renderCategoryPage();
const movieDatailsPage = () => renderMovieDetail();

searchBtn.addEventListener('click', () => {
	console.log('click searchBtn');
});

searchBtn.addEventListener('click', () => {
	location.hash = '#search=';
	location.reload();
});

headerArrow.addEventListener('click', () => {
	location.hash = '#home';
	location.reload();
});

trendingPreviewBtn.addEventListener('click', () => {
	location.hash = '#trends';
	location.reload();
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
