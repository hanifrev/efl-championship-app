import React from 'react'
import Standing from './api/Standing'
import StandingHeader from './StandingHeader'

const MainPage = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="center-align card-panel col s12">Watershed</h2>
        <div className="center-align card-panel col s12">
          <h5>Latest Result</h5>
          <div id="theResult"></div>
          <p>the lotus eater and ghost reveries</p>
          <p>the lotus eater and ghost reveries</p>
          <p>the lotus eater and ghost reveries</p>
        </div>
        <div className="center-align card-panel col s12">
          <h5>Upcoming Fixtures</h5>
          <div id="theFixtures"></div>
          <p>the lotus eater and ghost reveries</p>
          <p>the lotus eater and ghost reveries</p>
          <p>the lotus eater and ghost reveries</p>
        </div>
        <div className="card-panel col s12">
          <h5 className="center-align">Standing</h5>
          <StandingHeader />
          <Standing />
        </div>
      </div>
    </div>
  )
}

export default MainPage
