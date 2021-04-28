import React, { Component } from 'react'

class Button extends Component {
    render(props) {

        console.log(this.props)
        return (
            <button className=""
                onClick={this.props.onClickFuction} > 
                {this.props.children}
            </button>
        )
    }
}
export default Button;