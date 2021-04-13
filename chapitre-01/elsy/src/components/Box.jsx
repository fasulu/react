
import React from 'react';

class App extends React.Component {

    // constructor(props) {

    //     super(props)
    //     this.state = {
    //         water: 0,
    //         heart: 0,
    //         temperature: 0,
    //         steps: 0,
    //     }

    //     this.changValue = this.changValue.bind(this)
    // }

    

    onHeartChange(e) {

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

        const {value, min, max, onChange, unit} = this.props

        if(this.props.unit !== "L") {

            return (

                <div className="box col-sm-3 col-6">
    
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