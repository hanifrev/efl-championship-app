import React from 'react'
import './styles/styles.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './component/NavBar'
import MainPage from './component/MainPage'
import TeamInfo from './component/pages/TeamInfo'
import FavTeams from './component/pages/FavTeams'
import TeamDetail from './component/pages/TeamDetail'
import './component/api/api'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={MainPage} exact />
        {/* <Route path="/Home" component={MainPage} /> */}
        <Route path="/Teams" component={TeamInfo} />
        <Route path="/FavTeams" component={FavTeams} />
        <Route path="/TeamDetail" component={TeamDetail} />
      </Switch>
    </div>
  )
}

export default App
