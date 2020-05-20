import $ from "jquery";
import "./font-awesome.js";
import "bootstrap/js/src/modal.js"
import "./components/bs-heading.js";
import "./main-page.js";
mainMovie();
// function main() {
//   const base_url = 'https://api.themoviedb.org/3/';
//   const key = '18b6ac76ada34bba374b08f5932d3416';

//   const getMovie = async () => {

//     try{
//       const response = await fetch(`${base_url}movie/popular?api_key=${key}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });

//       const jsonResponse = await response.json();
//       if(response.status == 200) {
//         renderMovie(jsonResponse.results);
//       }else {
//         alertMessage('error', jsonResponse.status_message);
//       }

//     }catch(e) {
//       alertMessage('error', e)
//     }

//   }

//   const renderMovie = (listMovie) => {
//     const cardList = document.querySelectorAll('card-list');
//     cardList.forEach(list => {
//       list.movies = listMovie
//     })
//   }

//   document.addEventListener('DOMContentLoaded', () => {
//   })

//   getMovie();
// }


// export default main;
