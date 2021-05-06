import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './view/Home'
import Weekly from './view/Weekly'
import WeeklyBattle from './view/WeeklyBattle'
import Popular from './view/Popular'
import PopularBattle from './view/PopularBattle'
import Favorites from './view/Favorites'

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <nav className="navbar navbar-light bg-light form-inline">
                    <ul style={{listStyle: "none"}}>
                        <Link to="/">Back to Home Page</Link>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/weekly">Weekly</Link></li>
                        <li><Link to="/weekly-battle">Weekly Battle</Link></li>
                        <li><Link to="/popular">Popular</Link></li>
                        <li><Link to="/popular-battle">Popular Battle</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/weekly" component={Weekly} />
                    <Route exact path="/weekly-battle" component={WeeklyBattle} />
                    <Route exact path="/popular" component={Popular} />
                    <Route exact path="/popular-battle" component={PopularBattle} />
                    <Route exact path="/favorites" component={Favorites} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;












// import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Home from './view/Home'
// import MovieInfo from './view/MovieInfo'
// import PageNotFound from './view/PageNotFound'


// class App extends React.Component {

//   constructor() {
//     super()

//     this.state = {

//       movieLink: "https://api.themoviedb.org/3/movie/550?api_key=e441f8a3a151d588a4932d2c5d310769",
//       userSelection: ["This Week", "This Week Battle", "Popular", "Popular Battle", "My List"],
//       movies: []
//     }

//   }

//   render() {


//     return (
//       <BrowserRouter>

//         <Switch>

//           <Route exact path="/" render={() => <Home userList={this.state.userSelection} />} />

//           <Route exact path="/:userSelect" render={(props) => <MovieInfo {...props} userSelect={this.state.movieLink} />} />

//           <Route path="*" component={PageNotFound}></Route>

//         </Switch>

//       </BrowserRouter>
//     )
//   }
// }

// export default App
