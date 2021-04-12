
import React from 'react';

class App extends React.Component {

    // changeBox() {

    //     if (this.state.icon !== 'Water') {
    //         this.setState({
    //             icon: ""
    //         })
    //     }

    // }

    render() {
        console.log(this.props); // check what infomation is coming from app.js
        return (
            
            <div className="box col-sm-3 col-6">

                <span class="material-icons" style={
                    { fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>

                <p>{this.props.value} {this.props.unit}</p>

                <input className="inputWater" type="range" min={this.props.min} max={this.props.max} step="5" value={this.props.value}/>
            </div>
        );
    }
}

export default App;

// learn components in the following link : https://www.freecodecamp.org/news/react-props-cheatsheet/