function movieData () {
  const base_url = 'https://api.themoviedb.org/4';
  const key = '18b6ac76ada34bba374b08f5932d3416';

  const getMovie = async () => {
    try {
      const response = await fetch(`${base_url}/list/1?api_key=${key}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const jsonResponse = await response.json();
      renderMovie(jsonResponse.results);
    } catch (e) {
      console.log(e);
    }
  }

  const renderMovie = listMovie => {
    $('#content').html('');
    listMovie.forEach(movie => {
      $('#content').html(`
        <div class="row">
          <div class="col-md-3">
            <div class="card" style="width: 18rem;">
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
              <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <h6 class="card-subtitle mb-2"><i class="fa fa-star text-warning"></i> ${movie.vote_average}</h6>
              </div>
            </div>
          </div>
        </div>
        `)
    })
  }
}

export default movieData;
