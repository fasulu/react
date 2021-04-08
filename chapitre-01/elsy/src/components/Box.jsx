
import React from 'react';

class App extends React.Component {

    constructor () {
        super()
    }
    render() {

        return (
            <div className="box col-sm-3 col-6">

                <span class="material-icons" style={
                    { fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>

                <p>{this.props.value} {this.props.unit}</p>
            </div>
        );
    }
}

export default App;

// learn components in the following link : https://www.freecodecamp.org/news/react-props-cheatsheet/