import React from 'react'
// import './App.css'


class Counter extends React.Component {



    render() {

        let counterVal = this.props.count;

        if (counterVal > 10) {
            alert("Value must not be more than 100")
            return ("Exiting with error, refresh to continue");
        } else if (counterVal < 0) {
            alert("Value must not be less than 0")
            return ("Exiting with error, refresh to continue");
        }


        return (
            <div>

                <h2>{this.props.count}</h2>

                <div>

                    <button style={{ color: "black", backgroundColor: "red", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.decrementFunction}>-</button>

                    <button style={{ color: "yellow", backgroundColor: "green", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.incrementFunction}>+</button>

                </div>

                <div>

                    <button style={{ color: "black", backgroundColor: "red", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.decrementFunction}>-</button>

                    <button style={{ color: "yellow", backgroundColor: "green", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.incrementFunction}>+</button>

                </div>


            </div>


        )
    }
}

export default Counter