
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

    

    changValue(e) {

        console.log(e.target.icon)

        if(e.target.type === "water") {

            this.setState({
                water: e.target.values
            })

        }else if(e.target.type === "heart") {

            this.setState({
                heart: e.target.values
            })

        }else if(e.target.type === "temperature") {

            this.setState({
                temperature: e.target.values
            })

        }else if(e.target.type === "step") {

            this.setState({
                step: e.target.values
            })

        } 
    }

    render() {
        console.log(this.props.icon); // check what infomation is coming from app.js
        return (

            <div className="box col-sm-3 col-6">

                <span className="material-icons" style={
                    { fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>

                <p>{this.props.values} {this.props.unit}</p>

                <input className="material-icons" type="range" onChange={this.changValue} step="5" icon={this.props.icon} values={this.state.values} />

            </div>
        );
    }
}

export default App;

// learn components in the following link : https://www.freecodecamp.org/news/react-props-cheatsheet/