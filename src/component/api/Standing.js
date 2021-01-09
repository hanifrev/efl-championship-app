import React, { useState, useEffect } from 'react'
import '../../styles/Standing.css'

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
      // const season = jsonData.season.currentMatchday
      // console.log(season)
      // console.log('test')
      setStanding(info)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
      <table className="stdcss">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Club Name</th>
            <th className="posctr pd">G</th>
            <th className="posctr pd">W</th>
            <th className="posctr pd">D</th>
            <th className="posctr pd">L</th>
            <th className="posctr pd">GD</th>
            <th className="posctr pd">Pts</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h6 className="loadings">Loading data . . .</h6>
          ) : (
            standing.map((stand, id) => (
              <tr key={id}>
                <td>{stand.position}</td>

                <td>
                  <p>{stand.team.name}</p>
                </td>
                <td className="posctr">
                  <p>{stand.playedGames}</p>
                </td>
                <td className="posctr">
                  <p>{stand.won}</p>
                </td>
                <td className="posctr">
                  <p>{stand.draw}</p>
                </td>
                <td className="posctr">
                  <p>{stand.lost}</p>
                </td>
                <td className="posctr">
                  <p>{stand.goalDifference}</p>
                </td>
                <td className="posctr">
                  <p>
                    <b>{stand.points}</b>
                  </p>
                </td>
              </tr>
            ))
          )}

          {hasError && (
            <h6 className="loadings">
              An error occurred while fetching data, data cannot be loaded,
            </h6>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Standing
