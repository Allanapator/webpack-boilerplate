// const results = document.querySelector("#results");
// const searchMovie = (keyword) => {
//   const apiUrl = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then((data) => {
//       data.Search.forEach((movie) => {
//         console.log(movie);
//         const film = `<li>
//           <img src="${movie.Poster}" alt="" />
//           <p>${movie.Title}</p>
//         </li>`;
//         results.insertAdjacentHTML("beforeend", film);
//       });
//     });
// };
// const finalSearch = document.querySelector("#search-movies");
// finalSearch.addEventListener("submit", (event) => {
//   results.innerHTML = "";
//   event.preventDefault();
//   const title = document.querySelector("#keyword").value;
//   searchMovie(title);
// });
const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};
const value = document.querySelector("#keyword");
value.addEventListener("keyup", searchAlgoliaPlaces);
