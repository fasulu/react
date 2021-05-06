import React from 'react'
// import { BrowserRouter, Link } from 'react-router-dom'

import Home from './Home'
import PageNotFound from './PageNotFound'


class MovieInfo extends React.Component {

    infoMovie() {

        const paramSelection = this.props.match.params.userSelect
        const currentMovie = this.props.movies.find(elem => elem.id === paramSelection)


    }



    render() {

        console.log(this.props)
        console.log(this.props.match.params.userSelect)

        return (

            <div>
                iam in MovieInfo {this.props}
            </div>
        )
    }
}

export default MovieInfo