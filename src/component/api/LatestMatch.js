import React, { useState, useEffect } from 'react'
import '../../styles/LatestMatch.css'

const LatestMatch = () => {
  const [lastMatch, setLastMatch] = useState([])
  //   const [home, setHome] = useState([])
  //   const [away, setAway] = useState([])
  //   const [score, setScore] = useState([])
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

      //   setHome(
      //     info
      //       .filter((md) => md.matchday >= 22)
      //       .map((x) => (
      //         <div key={x.id}>
      //           <p>{x.homeTeam.name}</p>
      //         </div>
      //       ))
      //   )

      //   setAway(
      //     info
      //       .filter((md) => md.matchday >= 22)
      //       .map((x) => (
      //         <div key={x.id}>
      //           <p>{x.awayTeam.name}</p>
      //         </div>
      //       ))
      //   )

      setLastMatch(info)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
      <p className="center-align">Matchday</p>
      <table>
        <thead className="header">
          <tr>
            <th></th>
            <th className="center-align"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h6 className="loadings">Loading data . . .</h6>
          ) : (
            lastMatch
              .filter((md) => md.matchday === 13)
              .map((x) => (
                // <div key={x.id}>
                //   <p>{x.awayTeam.name}</p>
                //   <p>{x.homeTeam.name}</p>
                // </div>
                <tr key={x.id}>
                  <td className="left-align">{x.homeTeam.name}</td>
                  <td>
                    {x.score.fullTime.homeTeam}-{x.score.fullTime.awayTeam}
                  </td>
                  <td className="right-align">{x.awayTeam.name}</td>
                </tr>
              ))
          )}
          {hasError && (
            <h6 className="loadings">
              An error occurred while fetching data, data cannot be loaded, please come
              back later
            </h6>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LatestMatch
