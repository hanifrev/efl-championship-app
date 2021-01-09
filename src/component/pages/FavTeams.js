import React from 'react'
import NotFound from '../NotFound'

const FavTeams = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <h3 className="center-align">Saved Teams</h3> */}
        <div className="center-align card-panel col s12">
          <div id="theSaved"></div>
          <NotFound />
        </div>
      </div>
    </div>
  )
}

export default FavTeams
