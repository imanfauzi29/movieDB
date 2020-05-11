import "./font-awesome.js";

function main() {
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
      alertMessage('error', e)
    }
  }

  const renderMovie = listMovie => {
    const content = document.getElementById('content');
    listMovie.forEach(movie => {
      content.innerHTML += `
          <div class="col-md-3 mb-3">
              <div class="card h-100">
                  <a href="#">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                  </a>
                <div class="card-body">
                  <a href="#">
                    <h5 class="card-title">${movie.original_title}</h5>
                  </a>
                  <h6 class="card-subtitle"><i class="fa fa-star text-warning"></i> ${movie.vote_average}</h6>
                </div>
                <button type="button" class="btn btn-outline-primary mb-2 mx-2">Read More ></button>
              </div>
          </div>
        `;
    })
  }

  const alertMessage = (icon, message = 'Please Check Your Internet Connection!') => {

    const alertElem = document.createElement('div');
    if(icon == 'success') {
      const fa = '<i class="far fa-check-circle"></i>';
    }else {
      const fa = '<i class="far fa-times-circle"></i>';
    }
    alertElem.setAttribute('id', 'c-alert');
    alertElem.innerHTML = `
    <div class="c-alert-overlay" tabindex="-1">
      <div class="c-alert-box" role="dialog">
        <div class="c-alert-title">
          <span class="${icon}">${fa}</span>
        </div>
        <div class="c-alert-text">
          ${message}
        </div>
        <div class="c-alert-footer">
          <div class="c-alert-button">
            <div class="alert-button" id="alert-button">OK</div>
          </div>
        </div>
      </div>
    </div>
    `;

  }


  getMovie()
}


export default main;
