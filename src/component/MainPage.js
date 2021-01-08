import React from 'react'
import Standing from './api/Standing'
import LatestMatch from './api/LatestMatch'
import UpFixture from './api/UpFixture'
import banner from '../assets/img/banner-head.png'

const MainPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <img className="center-align col s12 banner" src={banner} alt={'bannerefl'} />
          {/* <h3 className="center-align col s12 maintitle">EFL Championship Portal</h3> */}
        </div>
        <div className="center-align card-panel col s12">
          <h5>Latest Result</h5>
          <LatestMatch />
        </div>
        <div className="center-align card-panel col s12">
          <h5 className="upfixt">Upcoming Fixtures</h5>
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
