import React, { Component } from 'react';
import Card from './Card'
import { getLatesMovies } from '../Api'
// import moment from 'moment';

class Weekly extends Component {

    state = {
        movies: []
    }

    // http://api.themoviedb.org/3/discover/movie?primary_release_date.gte={LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}
    
    componentDidMount() {

        // const lastWeek = moment().subtract(1, 'week').format('YYYY-MM-DD'); console.log("one week back",lastWeek)
        // const toDay = moment().format('YYYY-MM-DD'); console.log("today",toDay)

        // const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${toDay}&api_key=e441f8a3a151d588a4932d2c5d310769`

        // console.log(url);

        // fetch(url)
        //     .then(response => response.json())

        getLatesMovies()
        .then(data => {
            this.setState({
                movies: data.results
            })
        })
    }

    render() {
        console.log(this.state.movies.length)
        return (
            <div>
                <h1>Weekly</h1>

                {
                    this.state.movies.map(elem => {
                        return <Card {...elem} />
                    })
                }

            </div>
        );
    }
}

export default Weekly;