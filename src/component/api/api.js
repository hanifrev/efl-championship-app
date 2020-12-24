console.log('test from api.js')

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

// const ENDPOINT_CLUBS = 'https://api.football-data.org/v2/teams/'
const ENDPOINT_TEAMS = 'https://api.football-data.org/v2/competitions/2016/teams'
// const ENDPOINT_STAND =
//   'https://api.football-data.org/v2/competitions/2016/standings?standingType=TOTAL'

function testAPI() {
  fetchAPI(ENDPOINT_TEAMS).then(function (data) {
    const info = data.teams
    console.log(info[5].name)
  })
}

testAPI()

// const apiASW = async () => {
//   const response = await fetch(fetchAPI(ENDPOINT_TEAMS))
//   const dataJson = response.json()
//   console.log(dataJson.teams[2].name)
// }

// apiASW()
