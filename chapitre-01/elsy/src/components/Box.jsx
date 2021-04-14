
import React from 'react';

let waterLevel=1.2;

class App extends React.Component {

    calculateWater(e) {

        this.setState({
    
          water: e.target.value
    
        })
      }

    onHeartChange(e) {

        this.setState({

            heart: e.target.value

        })
    }

    onTempChange(e) {

        this.setState({

            heart: e.target.value

        })
    }

    onStepsChange(e) {

        this.setState({

            heart: e.target.value

        })
    }

    // console.log(e.target.icon)

    // if(e.target.icon === "local_drink") {

    //     this.setState({
    //         water: e.target.value
    //     })

    // }else if(e.target.icon === "favorite") {

    //     this.setState({
    //         heart: e.target.value
    //     })

    // }else if(e.target.icon === "wb_sunny") {

    //     this.setState({
    //         temperature: e.target.value
    //     })

    // }else if(e.target.icon === "directions_walk") {

    //     this.setState({
    //         step: e.target.value
    //     })

    // } 

    render() {

        const { value, min, max, onChange, unit } = this.props


        if (this.props.unit !== "L") {

            if (this.props.unit === "°c") {
                if (this.props.value >= 20) {

                    // console.log("the unit is degree", this.props.value)

                    let degree = this.props.value
                    waterLevel = waterLevel - 0.002
                    console.log("current temperature", degree, "water level", waterLevel)

                }
            }

            return (

                <div className="box col-sm-3 col-6 ">

                    <span className="material-icons" style={
                        { fontSize: 100, color: this.props.color }}>
                        {this.props.icon}
                    </span>

                    <p>{value} {unit}</p>

                    <input type="range" onInput={onChange} min={min} max={max} value={value} />

                </div>
            );

        }

        return (

            <div className="box col-sm-3 col-6">

                <span className="material-icons" style={
                    { fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>

                <p>{this.props.values} {this.props.unit}</p>

            </div>
        );
    }
}

export default App;

// learn components in the following link : https://www.freecodecamp.org/news/react-props-cheatsheet/