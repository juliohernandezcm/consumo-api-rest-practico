import { renderCategoriesList, renderTrendingPreviewList } from './main.js';

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
	console.log('Home');
	renderTrendingPreviewList();
	renderCategoriesList();
};

const trendsPage = () => {
	console.log('trends!!!');
};

const searchPage = () => {
	console.log('search!!!');
};

const categoriesPage = () => {
	console.log('category!!!');
};

const movieDateilsPage = () => {
	console.log('Movie');
};

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
