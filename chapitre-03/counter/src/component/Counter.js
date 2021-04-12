import React from 'react'
// import './App.css'


class Counter extends React.Component {



    render() {
        
        let counter1Val = this.props.count1;
        
        let counter2Val = this.props.count2;
        
        if (counter1Val > 5) {
            alert("Value must not be more than 100")
            return ("Exiting with error, refresh to continue");
        } else if (counter1Val < 0) {
            alert("Value must not be less than 0")
            return ("Exiting with error, refresh to continue");
        }

        if (counter2Val > 5) {
            alert("Value must not be more than 100")
            return ("Exiting with error, refresh to continue");
        } else if (counter2Val < 0) {
            alert("Value must not be less than 0")
            return ("Exiting with error, refresh to continue");
        }

        return (
            <div>


                <div>

                    <h2>{counter1Val}</h2><h2>{counter2Val}</h2>

                    <button style={{ color: "black", backgroundColor: "red", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.decrementFunction1}>-</button>

                    <button style={{ color: "yellow", backgroundColor: "green", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.incrementFunction1}>+</button>

                    

                    <button style={{ color: "black", backgroundColor: "red", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.decrementFunction2}>-</button>

                    <button style={{ color: "yellow", backgroundColor: "green", fontSize: 25, width: 100, borderRadius: 10, borderColor: "white" }} onClick={this.props.incrementFunction2}>+</button>

                </div>

            </div>


        )
    }
}

export default Counter