const $ = (id) => document.querySelector(id);

/* HEADER NODES */
const headerContainer = $('.header__container');
const headerArrow = $('.header__container--arrow');
const headerTitle = $('.header__title');
const headerTitleCategoryView = $('.header__title--categoryView');
const headerSearchForm = $('.header__searchForm');
const searchBtn = $('#searchBtn');

/* TRENDING PREVIEW NODES */
const trendingPreviewcontainer = $('.trendingPreviewcontainer');

/* TRENDING PREVIEW NODES */
const categoriesPreviewContainer = $('.categoriesPreview__container');
const genericList = $('#genericList');

/* BNT NODES */
const genericListBtn = $('.genericList__btn');

/*  MOVIE DETAIL NODES */
const movieDetail = $('#movieDetail');

export {
	headerContainer,
	headerArrow,
	headerTitle,
	headerTitleCategoryView,
	searchBtn,
	headerSearchForm,
	trendingPreviewcontainer,
	categoriesPreviewContainer,
	genericList,
	genericListBtn,
	movieDetail,
};
