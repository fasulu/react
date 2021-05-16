import { Component } from 'react'
import Card from './Card'

class Favorites extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            // favIDs: this.getStorage()
            favIDs: []
        }
    }
    // const movieLink = "https://api.themoviedb.org/3/discover/"
    // const apiKey = "?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"

    componentDidMount() {
        const idsFavorites = JSON.parse(localStorage.getItem("favorites"))

        console.log(idsFavorites.length > 0 ? true : false)

        // if(idsFavorites.length === null) {

        //     console.log("favorite is 0", idsFavorites.length)
        //     return

        // }

        for (let i = 0; i < idsFavorites.length; i++) {

            const url = "http://api.themoviedb.org/3/movie/" + `${idsFavorites[i]}` + "?api_key=e441f8a3a151d588a4932d2c5d310769"
            console.log(i, url)

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log("data in popular component did mount", data);

                    this.setState({
                        movies: [...this.state.movies, data]
                    })

                })
        }

    }
    //http://api.themoviedb.org/3/movie/460465?api_key=e441f8a3a151d588a4932d2c5d310769
    //http://api.themoviedb.org/3/movie/${idsFavorites[elem]}?api_key=e441f8a3a151d588a4932d2c5d310769

    render() {


        console.log("favIDs is ", this.state.movies)

        return (

            <div>
                Im in favorites

                {
                    this.state.movies.map(elem => {
                        return <Card {...elem} />
                    })
                }

            </div>

        )
    }
}

export default Favorites