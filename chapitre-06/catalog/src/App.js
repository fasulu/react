import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PageNotFound from "./Components/PageNotFound.jsx"
import './Components/Movies.jsx'

import './App.css'

class App extends React.Component {

	constructor() {
		super()

		this.state = {

		}
	}

	render() {

		return (

			<BrowserRouter>

				<div className="">

					{/* <h1>movie list</h1> */}
					<nav>

						<ul>

							<li><Link to="/">Movies</Link></li>
							<li><Link to="/"></Link></li>
							<li><Link to="/"></Link></li>

						</ul>

					</nav>

<Switch>
	<Route exact path="/" render={() => } ></Route>
	<Route exact path="*" component={PageNotFound}></Route>


</Switch>

				</div>

			</BrowserRouter>
		)

	}
}

export default App;
