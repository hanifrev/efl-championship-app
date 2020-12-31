import React, { useState, useEffect } from 'react'

const TeamDetail = () => {
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setHasError(false)

    try {
      const urlParams = new URLSearchParams(window.location.search)
      const idParam = urlParams.get('id')
      const ENDPOINT_CLUB = 'https://api.football-data.org/v2/teams/'
      const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': apiKey
        }
      }
      const response = await fetch(`${ENDPOINT_CLUB}/${idParam}`, options)
      const jsonData = await response.json()

      const info = jsonData
      console.log(idParam)
      console.log(response)
      console.log(info.squad)
      setDetail(info.squad)
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

export default TeamDetail
