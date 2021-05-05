import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import MovieInfo from './view/MovieInfo'
import PageNotFound from './view/PageNotFound'


class App extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {

    console.log("Iam in component did mount")
    
    const movies = fetch("https://api.themoviedb.org/3/movie/550?api_key=e441f8a3a151d588a4932d2c5d310769")
    .then(response=> response.json())
    .then(result => {
      console.log("im in fetch response", result.production_companies[0].id)
      console.log("im in fetch response", result.production_companies[0].name)
      // const movieList = result.map((elem) => {
      //   // return elem.production_companies
      //   return <li key={elem.production_companies[0].id}> <Link to={`/${elem.production_companies[0].name}`}></Link></li>
      // })
    })

    .catch(err => console.error("fetch error", err))
  }


  render() {


    return (
      <BrowserRouter>
{/* 
<Switch>

<Route exact path="/" render={() => <Home movies ={allMovies}/>}/>

          <Route exact path="/:movieId" render={(props) => <MovieInfo {...props} movies={allMovies} />} />

<Route path="*" component={PageNotFound}></Route>
      </Switch> */}

      </BrowserRouter>
    )
  }
}

export default App
