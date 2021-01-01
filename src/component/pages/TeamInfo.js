import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/TeamInfo.css'

// const TheClub = ({ names }) => {
//   return <div>{names}</div>
// }

const Teams = () => {
  const [displayTeam, setDisplayTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setHasError(false)

    try {
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
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div className="row">
      <h4 className="center home-title">TEAMS</h4>
      <div className="col s12">
        {loading ? (
          <h6 className="loadings">Loading data . . .</h6>
        ) : (
          displayTeam.map((clubs) => (
            <div key={clubs.id}>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img
                      src={clubs.crestUrl.replace(/^http:\/\//i, 'https://')}
                      alt="Logo"
                    ></img>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span className="card-title">{clubs.name}</span>
                      <p>{clubs.venue}</p>
                      <p>
                        <Link to={{ pathname: `${clubs.website}` }} target="_blank">
                          {clubs.website}
                        </Link>
                      </p>
                    </div>
                    <div className="card-action">
                      <Link to={{ pathname: `/TeamDetail?id=${clubs.id}` }}>
                        Team Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {hasError && (
          <h6 className="loadings">
            An error occurred while fetching data, data cannot be loaded, please come back
            later
          </h6>
        )}
      </div>
    </div>
  )
}

export default Teams
