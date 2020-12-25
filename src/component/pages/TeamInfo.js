import React, { useState, useEffect } from 'react'

const TheClub = ({ names }) => {
  return <div>{names}</div>
}

const Teams = () => {
  const [displayTeam, setDisplayTeam] = useState([])

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

    const info = jsonData.teams
    console.log(info[9])
    setDisplayTeam(info)
  }

  return (
    <div className="container">
      <div className="row">
        <h3 className="center-align">Teams</h3>
        {displayTeam.map((clubs) => (
          <div key={clubs.id}>
            <div className="col s12">
              <div className="card horizontal">
                <div className="card-image">
                  <img
                    src="${clubs.crestUrl.replace(/^http:\/\//i, 'https://')}"
                    alt="logo"
                  ></img>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <span className="card-title">{clubs.name}</span>
                  </div>
                </div>
                <div className="card-action">
                  <p>link</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="center-align card-panel col s12">
          <div id="theTeams">
            {displayTeam.map((clubs) => (
              <p key={clubs.id}>{clubs.name} </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams
