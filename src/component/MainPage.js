import React from 'react'
import Standing from './api/Standing'
import LatestMatch from './api/LatestMatch'
import UpFixture from './api/UpFixture'

const MainPage = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="center-align card-panel col s12">Watershed</h2>
        <div className="center-align card-panel col s12">
          <h5>Latest Result</h5>
          <LatestMatch />
        </div>
        <div className="center-align card-panel col s12">
          <h5>Upcoming Fixtures</h5>
          <UpFixture />
        </div>
        <div className="card-panel col s12">
          <h5 className="center-align">Standing</h5>
          <Standing />
        </div>
      </div>
    </div>
  )
}

export default MainPage
