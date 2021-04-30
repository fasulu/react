import React, { Component } from 'react'
import '../styles/global.css'

class Button extends Component {
    render(props) {
        return (
            <button className={this.props.isSelected}
                onClick={this.props.onClickFuction} > 
                {this.props.children}
            </button>
        )
    }
}
export default Button;