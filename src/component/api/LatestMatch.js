import React, { useState, useEffect } from 'react'
import '../../styles/LatestMatch.css'

const LatestMatch = () => {
  const [lastMatch, setLastMatch] = useState([])
  const [cmd, setCmd] = useState(0)
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

      //MATCH RESULT
      const response = await fetch(ENDPOINT_MATCH, options)
      const jsonData = await response.json()

      const info = jsonData.matches

      // console.log(info.filter((md) => md.matchday === { cmd }))
      // console.log(info.filter((md) => md.matchday >= 22).map((x) => x.awayTeam.name))
      // console.log(info.filter((md) => md.matchday >= 22).map((x) => x.score))

      setLastMatch(info)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  useEffect(() => {
    matchDay()
  }, [])

  const matchDay = async () => {
    try {
      const ENDPOINT_SEASONMD =
        'https://api.football-data.org/v2/competitions/2016/standings'
      const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': apiKey
        }
      }
      // SEASON CURRENT MATCHDAY
      const resCurMD = await fetch(ENDPOINT_SEASONMD, options)
      const mdData = await resCurMD.json()
      var infoMD = mdData.season.currentMatchday
      console.log(infoMD)
      setCmd(infoMD)
    } catch (error) {
      setHasError(true)
    }
  }

  const theMD = cmd
  //the variable above is for handle cmd state that passed into filter matchday (line 98), without it latest result won't show

  return (
    <div>
      <div>
        {/* <button onClick={() => setMd(md - 1)}>
          <span className="material-icons">navigate_before</span>
        </button> */}
        <p className="center-align">Matchday {cmd}</p>
        {/* <button onClick={() => setMd(md + 1)}>
          <span className="material-icons">navigate_next</span>
        </button> */}
      </div>
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
              .filter((md) => md.matchday === theMD)
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
