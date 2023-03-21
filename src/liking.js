export const likedMovieList = () => {
	const item = JSON.parse(localStorage.getItem('liked_movies'));

	let movies;

	item ? (movies = item) : (movies = {});

	return movies;
};

export const likeMovie = (movie) => {
	const likedMovies = likedMovieList();

	console.log(likedMovies);

	likedMovies[movie.id]
		? (likedMovies[movie.id] = undefined)
		: (likedMovies[movie.id] = movie);

	localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
};
