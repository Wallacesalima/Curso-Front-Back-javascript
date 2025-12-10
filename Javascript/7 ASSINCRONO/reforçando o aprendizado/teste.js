
fetch('api.chucknorris.io/jokes/random')
  .then(response => response.text())
  .then(result => console.log(result))
