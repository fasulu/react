
import React from 'react';

class App extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            water: 0,
            heart: 0,
            temperature: 0,
            steps: 0,
        }

        this.changValue = this.changValue.bind(this)
    }


    changValue(event) {
        console.log("onchange value id", event.target)
        console.log("onchange value value", event.target.value)


        if(event.target.type === "water") {

            this.setState({
                water: event.target.value
            })

        }else if(event.target.type === "heart") {

            this.setState({
                heart: event.target.value
            })

        }else if(event.target.type === "temperature") {

            this.setState({
                temperature: event.target.value
            })

        }else if(event.target.type === "step") {

            this.setState({
                step: event.target.value
            })

        } 
    }

    render() {
        console.log(this.props); // check what infomation is coming from app.js
        return (

            <div className="box col-sm-3 col-6">

                <span class="material-icons" style={
                    { fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>

                <p>{this.props.value} {this.props.unit}</p>

                <input className="material-icons" type="range" onChange={this.changValue} step="5" icon={this.state.icon} value={this.state.value} />

            </div>
        );
    }
}

export default App;

// learn components in the following link : https://www.freecodecamp.org/news/react-props-cheatsheet/