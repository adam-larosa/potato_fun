console.log('hello world')

const parseJSON = (resp) => resp.json()

function fetchResource(url) {
  return fetch(url)
    .then( parseJSON )
}