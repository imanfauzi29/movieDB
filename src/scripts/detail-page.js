/* get Details Movie */
const detail = urls => {

	// promise all url to get data
  Promise.all(urls.map(url =>
		fetch(url)
		.then(res => res.json())
		.then(resJson => resJson)
		.catch(e => console.log(e))))

		.then(datas => {
	    const {[0]: detail, [1]: keyword} = datas;
	    const data = Object.assign({keywords: keyword.keywords}, detail);
	    render(data);
  })
}

// render movie
const render = data => {
	
  const content = document.querySelector('#content');
  content.innerHTML = '';

  /* if poster no picture, set picture from dummyimage.com then give the text no image */
  const poster = (data.poster_path == null)
  ? `https://dummyimage.com/460x690/b0b0b0/fff.jpg&text=no+image`
  : `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  content.innerHTML = `
		<div class="container-fluid mt-3">
		<div class="detail py-3">
		<div class="col-12">
		<div class="row">
		<div class="col-md-3 col-sm-12 p-3">
		<img class="rounded w-100" src="https://image.tmdb.org/t/p/w500${data.poster_path}">
		</div>
		<div class="col-md-9 col-sm-12 mt-4 pt-3">
		<div class="col-12">
		<h2 class="title-movie mb-0">${data.original_title} <span>(${data.release_date.slice(0, 4)})</span></h2>
		<span class="badge badge-light">${data.status}</span>
		</div>
		<div class="col-12">
		<div class="subtext d-flex">
		<span class="lang">${data.original_language}</span>
		<span class="separators genre">
		<genre-custom></genre-custom>
		</span>
		<span class=" separators release">${data.release_date}</span>
		</div>
		</div>
		<div class="col-12">
		<div class="rating mt-3">
		<i class="fa fa-star text-warning" style="font-size: 1.75rem;"></i>
		<strong class="rate">
		<span>${data.vote_average}</span>
		<span>from</span>
		<span>${data.vote_count}</span>
		<span>votes</span>
		</strong>
		</div>
		</div>
		<div class="col-12">
		<div class="overview">
		<h3>overview</h3>
		<p>
		${data.overview}
		</p>
		</div>
		</div>
		</div>
		</div>
		</div>
		<div class="col-12 subkeyword mb-3">
		<h3>Keyword</h3>
		</div>
		<div class="col-12">
		<keyword-custom></keyword-custom>
		</div>
		</div>
		</div>`;

  const genres = document.querySelector('genre-custom');
  genres.genre = data.genres;

  const keywords = document.querySelector('Keyword-custom');
  keywords.keyword = data.keywords;
}

export default detail;
