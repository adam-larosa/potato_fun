console.log('hello world')

const newObj = {
  name: "some name"
}
const parseJSON = (resp) => resp.json()

function fetchResource(url) {
  return fetch(url)
    .then( parseJSON )
}