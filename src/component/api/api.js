const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
const fetchAPI = (url) => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': apiKey
    }
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log('Error : ' + response.status)
        return Promise.reject(new Error(response.statusText))
      } else {
        return Promise.resolve(response)
      }
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error)
    })
}
