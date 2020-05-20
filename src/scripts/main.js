import "./font-awesome.js";
import alertMessage from "./alert-message.js";
import "./components/card-list.js";

function main() {
  const base_url = 'https://api.themoviedb.org';
  const key = '18b6ac76ada34bba374b08f5932d3416';

  const getMovieX = async () => {
    try{
      const response = await fetch(`${base_url}/3/movie/popular?api_key=${key}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const jsonResponse = await response.json();
      if(jsonResponse.success == false) {
        alertMessage('error', jsonResponse.status_message);
      }else {
        renderMovie(jsonResponse.results);
      }
    }catch(e) {
      alert-message('error', e)
    }
  }

  const renderMovie = listMovie => {
    const movieList = document.querySelector('card-list');
    movieList.movies = listMovie;
  }


  document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.querySelector('card-list');
  })

  getMovieX();
}


export default main;
