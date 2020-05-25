class MovieUrl {
	/*
	#return all url
	*/
	static url(pathname) {
		const baseUrl = 'https://api.themoviedb.org/3';
		const key = '18b6ac76ada34bba374b08f5932d3416';

		return `${baseUrl}/${pathname}?api_key=${key}`;
	}
}

export default MovieUrl;