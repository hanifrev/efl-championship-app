import React, { useState, useEffect } from 'react'
import '../../styles/LatestMatch.css'

const UpFixture = () => {
  const [upcomingFixt, setUpcomingFixt] = useState([])
  // const [mdInfo, setMdInfo] = useState(0)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // const matchUpcoming = `matches?matchday=25`
      const ENDPOINT_SCHEDULED = 'https://api.football-data.org/v2/competitions/2016/'
      const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': apiKey
        }
      }

      // fetch the currentMatchday first, then add 1
      const response = await fetch(ENDPOINT_SCHEDULED, options)
      const jsonData = await response.json()
      const upMatch = jsonData.currentSeason.currentMatchday + 1
      // PLUS 1 ABOVE TO SHOW THE UPCOMING FIXTURE
      const resUpMD = await fetch(
        `${ENDPOINT_SCHEDULED}/matches?matchday=${upMatch}`,
        options
      )

      const jsonUpMD = await resUpMD.json()
      const fixtureMap = jsonUpMD.matches

      // const matchdayInfo = jsonUpMD.matchday

      // console.log(jsonUpMD.matches[5].homeTeam.name)
      // console.log(fixtureMap)
      // console.log(upMatch)
      // console.log(jsonData)
      // console.log(matchUpcoming)
      // setMdInfo(upMatch)
      setUpcomingFixt(fixtureMap)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
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
            upcomingFixt.map((x, id) => (
              <tr key={id}>
                <td className="left-align fixture">{x.homeTeam.name}</td>
                <td className="fixture">vs</td>
                <td className="right-align fixture">{x.awayTeam.name}</td>
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

export default UpFixture
