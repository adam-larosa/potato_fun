console.log('hello world')


function fetchResource(url) {
  return fetch(url)
    .then((resp) => resp.json() )
}