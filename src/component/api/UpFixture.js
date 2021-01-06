import React, { useState, useEffect } from 'react'

const UpFixture = () => {
  const [upcomingFixt, setUpcomingFixt] = useState([])
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

      console.log(jsonUpMD)
      // console.log(upMatch)
      // console.log(jsonData)
      // console.log(matchUpcoming)

      setUpcomingFixt(jsonUpMD)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
      <p>the lotus eaters</p>
    </div>
  )
}

export default UpFixture
