const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5eb9599a1mshafe133369070f10p1a057bjsndd45f819e7e5",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

fetch(
  "https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
