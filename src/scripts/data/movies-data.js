class Data {

  static getMovie(baseUrl, pathname, key) {
    return fetch(`${baseUrl}/${pathname}?api_key=${key}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if(responseJson.results) {
        return Promise.resolve(responseJson.results);
      }else{
        return Promise.reject(`can't load movie in pathname ${pathname}`)
      }
    })
  }

}

export default Data;