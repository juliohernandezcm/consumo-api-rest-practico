const navigator = () => {
	if (location.hash.startsWith('#trends')) {
		trendsPage();
	} else if (location.hash.startsWith('#search=')) {
		searchPage();
	} else if (location.hash.startsWith('#category=')) {
		categoriesPage();
	} else if (location.hash.startsWith('#movie=')) {
		movieDateilsPage();
	} else {
		homePage();
	}
};

const homePage = () => {
	console.log('Home');
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
