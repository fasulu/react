import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './view/Home'
import MovieInfo from './view/MovieInfo'
import PageNotFound from './view/PageNotFound'


class App extends React.Component {

  constructor() {
    super()
    
    this.state = {

      movieLink: "https://api.themoviedb.org/3/movie/550?api_key=e441f8a3a151d588a4932d2c5d310769",
      userSelection: ["This Week", "This Week Battle", "Popular", "Popular Battle", "My List"],
      movies: []
    }

  }

  render() {


    return (
      <BrowserRouter>

        <Switch>

          <Route exact path="/" render={() => <Home userList={this.state.userSelection} />} />

          <Route exact path="/:userSelect" render={(props) => <MovieInfo {...props} userSelect={this.state.movieLink} />} />

          <Route path="*" component={PageNotFound}></Route>
          
        </Switch>

      </BrowserRouter>
    )
  }
}

export default App
