import React, { useState, useEffect } from 'react'

const Standing = () => {
  const [standing, setStanding] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setHasError(false)

    try {
      const ENDPOINT_STAND =
        'https://api.football-data.org/v2/competitions/2016/standings?standingType=TOTAL'
      const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': apiKey
        }
      }

      const response = await fetch(ENDPOINT_STAND, options)
      const jsonData = await response.json()

      const info = jsonData.standings[0].table
      console.log(info[3].team.name)
      console.log('test')
      setStanding(info)
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
        standing.map((stand, id) => (
          <div key={id}>
            {/* <div>{stand.team.name}</div> */}
            <table>
              <tbody>
                <tr>
                  <td>
                    <div>{stand.position}</div>
                  </td>
                  <td>
                    <div className="left-align">{stand.team.name}</div>
                  </td>
                  <td>
                    <div>{stand.playerGames}</div>
                  </td>
                  <td>
                    <div>{stand.won}</div>
                  </td>
                  <td>
                    <div>{stand.draw}</div>
                  </td>
                  <td>
                    <div>{stand.lost}</div>
                  </td>
                  <td>
                    <div>{stand.goalDifference}</div>
                  </td>
                  <td>
                    <div>{stand.points}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}

      {hasError && (
        <h6 className="loadings">
          An error occurred while fetching data, data cannot be loaded,
        </h6>
      )}
    </div>
  )
}

export default Standing
