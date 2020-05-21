class MoviesData {

	static url(pathname) {
		const baseUrl = 'https://api.themoviedb.org/3';
		const key = '18b6ac76ada34bba374b08f5932d3416';

		return `${baseUrl}/${pathname}?api_key=${key}`;
	}

	static searchQuery(url,keyword) {
		return fetch(`${url}&language=en-US&query=${keyword}&page=1&include_adult=false`)
		.then(response => response.json())
		.then(responseJson => {
			if(responseJson.results) {
				return Promise.resolve(responseJson.results)
			}else{
				return Promise.reject(`Ooppss! Can't find ${keyword} in my query`)
			}
		})
	}

}

export default MoviesData;