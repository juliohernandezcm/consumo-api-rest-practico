const $ = (id) => document.querySelector(id);

/* HEADER NODES */
export const headerContainer = $('.header__container');
export const headerArrow = $('.header__container--arrow');
export const headerTitle = $('.header__title');
export const headerTitleCategoryView = $('.header__title--categoryView');
export const headerSearchForm = $('.header__searchForm');
export const searchBtn = $('#searchBtn');

/* TRENDING PREVIEW NODES */
export const trendingPreviewcontainer = $('.trendingPreviewcontainer');
export const trendingPreviewHeader = $('.trendingPreview__header');
export const trendingPreviewTitle = $('.trendingPreview__title');
export const trendingPreviewBtn = $('.trendingPreview__btn');
export const trendingPreviewMovieList = $('.trendingPreview__movieList');

/* CATEGORIES PREVIEW NODES */
export const categoriesPreviewContainer = $('.categoriesPreview__container');
export const categoriesPreviewTitle = $('.categoriesPreview__title');
export const categoriesPreviewList = $('.categoriesPreview__list');

export const genericList = $('#genericList');

/* BNT NODES */
export const genericListBtn = $('.genericList__btn');

/*  MOVIE DETAIL NODES */
export const movieDetail = $('#movieDetail');
export const movieDetailTitle = $('.movieDetail__title');
export const movieDetailScore = $('.movieDetail__score');
export const scoreContainerStar = $('.score__container--star');
export const movieDetailDescription = $('.movieDetail__description');
export const categoriesList = $('.categories__list');
export const relatedMoviesContainer = $('.relatedMovies__container');
export const relatedMoviesTitle = $('.relatedMovies__title');
export const relatedMoviesScrollContainer = $(
	'.relatedMovies__scrollContainer'
);
