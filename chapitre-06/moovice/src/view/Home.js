import { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies:[]
        }
    }


    showSelection() {
        console.log("Im in show movie list")

        fetch("http://localhost:3001/movies")
            .then(response => response.json())
            .then(data => {

                // console.log("data movies in componentDidMount", data);

                this.setState({
                    movies: data.results
                })
            })
        console.log("Iam in component did mount", this.state.movies)
    }


    render() {

        this.showSelection()
        console.log(this.props)
        console.log(this.state.movies)

        return (
            <div>

            </div>

        );

    }
}

export default Home