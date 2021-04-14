import React from "react";
import './App.css';
import './styles/global.css';
import Box from "./components/Box"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -120,
      steps: 3000
    }

    this.calculateWater = this.calculateWater.bind(this)
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
  }

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
  onStepsChange(e) {

    this.setState({

      steps: e.target.value

    })
  }
  onTempChange(e) {

    this.setState({

      temperature: e.target.value,

    })
  }

  render() {

    // console.log(this.props)

    return (
      <div className="container-fluid">

        <div className="row">


          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" onChange={this.calculateWater} > </Box>
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepsChange} />
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°c" min={tempMin} max={tempMax} onChange={this.onTempChange} />
        </div>

      </div>
    );
  }
}

export default App;