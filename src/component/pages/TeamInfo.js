import React, { useState, useEffect } from 'react'

const Teams = () => {
  const [displayTeam, setDisplayTeam] = useState({})

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const ENDPOINT_TEAMS = 'https://api.football-data.org/v2/competitions/2016/teams'
    const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
    const options = {
      method: 'GET',
      headers: {
        'X-Auth-Token': apiKey
      }
    }

    const response = await fetch(ENDPOINT_TEAMS, options)
    const jsonData = await response.json()
    console.log(jsonData.teams[9])
    setDisplayTeam(jsonData.teams[1])
  }

  return (
    <div className="container">
      <div className="row">
        <h3 className="center-align">Teams</h3>
        <div className="center-align card-panel col s12">
          <div id="theTeams">{displayTeam.name}</div>
          <p>the lotus eater and ghost reveries</p>
          <p>the lotus eater and ghost reveries</p>
          <p>the lotus eater and ghost reveries</p>
        </div>
      </div>
    </div>
  )
}

export default Teams
