console.log('hello world')

const newObj = {
  name: "some name"
}

function fetchResource(url) {
  return fetch(url)
    .then((resp) => resp.json() )
}