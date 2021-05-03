import React, { Component } from 'react'
import Card from './Card.jsx'

class Add extends Component {
    constructor() {
        super()
        this.state = {
            productName: "",
            price: 1,
            min: 1,
            max: 10
        }
    }



    updateProductName = (e) => {
        this.setState({ productName: e.target.value })
    }
    updatePrice = (e) => {
        this.setState({ price: e.target.value })
    }
    render() {
        console.log(this.state.productName);
        console.log(this.state.price);
        const {
            productName,
            price
        } = this.state
        
        return (
            <div>
                <div className="mx-3">
                    <input type="text" onChange={this.updateProductName} />
                    <button onClick={() =>
                        this.props.addItem(productName, price)}>Add
                        </button>
                </div>
                <div>
                    <div className="mx-3 my-3 text-light">
                        {this.state.price}€
                </div>
                    <input  className="mx-3" type="range"
                        value={this.state.price}
                        min={this.state.min}
                        max={this.state.max}
                        onChange={this.updatePrice} />
                </div>

                <div>
                    <Card></Card>

                </div>

            </div>
        )
    }
}
export default Add;