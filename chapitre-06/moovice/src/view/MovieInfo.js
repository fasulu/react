import React from 'react'
// import { BrowserRouter, Link } from 'react-router-dom'

import Home from './Home'
import PageNotFound from './PageNotFound'


class MovieInfo extends React.Component {

infoMovie() {

    // const paramSelection = {this.props.match.params.userSelect}

}
    


    render() {

        console.log(this.props)

        return (
            
            <div>
                iam in MovieInfo {this.props}
            </div>
        )
    }
}

export default MovieInfo