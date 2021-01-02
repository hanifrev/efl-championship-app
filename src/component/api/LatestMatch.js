import React, { useState, useEffect } from 'react'

const LatestMatch = () => {
  const [lastMatch, setLastMatch] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setHasError(false)

    try {
      const ENDPOINT_MATCH =
        'https://api.football-data.org/v2/competitions/2016/matches?status=FINISHED '
      const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': apiKey
        }
      }

      const response = await fetch(ENDPOINT_MATCH, options)
      const jsonData = await response.json()

      const info = jsonData.matches
      console.log(info.filter((md) => md.matchday >= 22))
      console.log(info.filter((md) => md.matchday >= 22).map((x) => x.awayTeam.name))
      console.log(info.filter((md) => md.matchday >= 22).map((x) => x.score))
      setLastMatch(info)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
      {loading ? (
        <h6 className="loadings">Loading data . . .</h6>
      ) : (
        lastMatch
          .filter((md) => md.matchday >= 22)
          .map((x) => (
            <div key={x.id}>
              <p>{x.awayTeam.name}</p>
            </div>
          ))
      )}
      {hasError && (
        <h6 className="loadings">
          An error occurred while fetching data, data cannot be loaded, please come back
          later
        </h6>
      )}
    </div>
  )
}

export default LatestMatch
