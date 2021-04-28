import React, { Component } from 'react'

class Card extends Component {
    render(props) {

        console.log(this.props)

        return (
            <button className="this.props.buttonName"
            onClick={() => this.props.onClick()}  > 
                {this.props.children} {this.props.name}
            </button>
        )
    }
}
export default Card;