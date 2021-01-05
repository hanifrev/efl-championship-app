import React, { useState, useEffect } from 'react'

const UpFixture = () => {
  const [theMatchday, setTheMatchday] = useState(0)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setHasError(false)
    try {
      const ENDPOINT_UPFIX = 'https://api.football-data.org/v2/competitions/2016/matches?'
      const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': apiKey
        }
      }

      const response = await fetch(`${ENDPOINT_UPFIX}/${(matchday = 21)}`, options)
      const jsonData = await response.json()

      const info = jsonData

      console.log(info)

      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div>
      <p>the lotus eater</p>
    </div>
  )
}

export default UpFixture
