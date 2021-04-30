import React, { Component } from 'react';

class Card extends Component {


    render() {

        console.log (" props",this.props);

        return (

            <div>
                <button 
                onClick={() => this.props.showImage}> Show Image 
                
                </button>
                
                <div>
                    {this.props.productImage}

                {/* {this.props.productName}
                {this.props.price} */}

                </div>
                
                <div>
                    <img src={this.props.image} alt=""/>

                </div>


            </div>
        )
    }
}

export default Card;