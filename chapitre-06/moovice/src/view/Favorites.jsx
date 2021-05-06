import { Component } from 'react'

let tempFavorite = []

class Favorites extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            movies: [],
            favIDs: []
        }
    }
    
    getStorage() {
        const idsFavorites = JSON.parse(localStorage.getItem("favorites"))
        tempFavorite=idsFavorites;
        console.log(idsFavorites)
        
        this.saveFavorite() {
        
    }

        this.setState({
                favIDs: tempFavorite
            })

    }
    render() {
        this.getStorage();

        console.log("favIDs is ", this.state.favIDs)

        return (

            <div>
Im in favorites
            </div>
            
        )
    }
}

export default Favorites