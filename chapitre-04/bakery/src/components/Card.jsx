import React, { Component } from 'react';

class Card extends Component {

    constructor() {
        super()
        this.state = {
            productName:"",
            price: "",
            image: "../images/item.png"
        }
    }

    componentDidMount() {

        const url = "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/croissant.png" 
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
    
                console.log("data in bakery ", data);
    
                // this.setState({
    
                // })
            })
    }

    render() {

        console.log (" props" ,this.props);

        return (

            <div>
                <button  style={{backgroundImage: `url(${this.state.image})`}} > </button>
            </div>
        )
    }
}

export default Card;