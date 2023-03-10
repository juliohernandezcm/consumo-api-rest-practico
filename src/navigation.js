import {
	renderCategoriesList,
	renderTrendingPreviewList,
	renderMovieDetail,
	renderSearchPage,
	renderCategoryPage,
} from './main.js';

import { searchBtn, headerArrow } from './nodes.js';

const navigator = () => {
	location.hash.startsWith('#trends')
		? trendsPage()
		: location.hash.startsWith('#search=')
		? searchPage()
		: location.hash.startsWith('#category=')
		? categoriesPage()
		: location.hash.startsWith('#movie=')
		? movieDateilsPage()
		: homePage();
};

const homePage = () => {
	renderTrendingPreviewList();
	renderCategoriesList();
};

const trendsPage = () => {
	console.log('trends!!!');
};

const searchPage = () => {
	renderSearchPage();
};

const categoriesPage = () => {
	console.log('category!!!');
	renderCategoryPage();
};

const movieDateilsPage = () => {
	renderMovieDetail();
};

searchBtn.addEventListener('click', () => (location.hash = '#search='));
headerArrow.addEventListener('click', () => history.back());

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
