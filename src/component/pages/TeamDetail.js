import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/TeamDetail.css'

const TeamDetail = () => {
  const [detail, setDetail] = useState([])
  const [clName, setClName] = useState([])
  const [player, setPlayer] = useState([])
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
      // console.log(idParam)
      // console.log(response)
      // console.log(info)
      setClName(info.name)
      setPlayer(info.squad)
      setDetail(info)
      setLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <div className="row">
      <h4 className="center home-title">{clName}</h4>
      <div className="col s12">
        {loading ? (
          <h6 className="loadings">Loading data . . .</h6>
        ) : (
          <div className="row">
            <div className="container">
              <div className="center-align card-panel col s12 paddingdown">
                <div className="card-image">
                  <img
                    className="logo"
                    src={detail.crestUrl.replace(/^http:\/\//i, 'https://')}
                    alt="Logo"
                  ></img>
                </div>
                <div>{detail.venue}</div>
                <div>{detail.address}</div>
                <div>
                  <Link to={{ pathname: `${detail.website}` }} target="_blank">
                    {detail.website}
                  </Link>
                </div>
              </div>

              <div className="center-align card-panel col s12">
                <h4 className="squadtitles">{detail.shortName}`s Squad</h4>
                {/* MANAGER */}
                <div className="center-align">
                  {player
                    .filter((rl) => rl.role === 'COACH')
                    .map((x) => (
                      <div key={x.id}>Manager: {x.name}</div>
                    ))}
                </div>
                <br></br>

                {/* GOALKEEPER */}
                <div className="center-align">
                  <h6>
                    <b>Goalkeeper</b>
                  </h6>
                  {player
                    .filter((pos) => pos.position === 'Goalkeeper')
                    .map((x) => (
                      <p key={x.id}>{x.name}</p>
                    ))}
                </div>
                <br></br>

                {/* DEFENDER */}
                <div className="center-align">
                  <h6>
                    <b>Defender</b>
                  </h6>
                  {player
                    .filter((pos) => pos.position === 'Defender')
                    .map((x) => (
                      <p key={x.id}>{x.name}</p>
                    ))}
                </div>
                <br></br>

                {/* MIDFIELDER */}
                <div className="center-align">
                  <h6>
                    <b>Midfielder</b>
                  </h6>
                  {player
                    .filter((pos) => pos.position === 'Midfielder')
                    .map((x) => (
                      <p key={x.id}>{x.name}</p>
                    ))}
                </div>
                <br></br>

                {/* FORWARD */}
                <div className="center-align">
                  <h6>
                    <b>Forward</b>
                  </h6>
                  {player
                    .filter((pos) => pos.position === 'Attacker')
                    .map((x) => (
                      <p key={x.id}>{x.name}</p>
                    ))}
                </div>
                <br></br>
              </div>
            </div>
          </div>
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

export default TeamDetail
