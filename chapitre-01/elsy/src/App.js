import React from "react";
import './App.css';
import './styles/global.css';
import Box from "./components/Box"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepMax = 50000;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      water: 0,
      heart: 120,
      temperature: -120,
      steps: 3000
    }
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
  }

  onHeartChange(e) {

    this.setState({
  
      heart: e.target.value
  
  
    })
  }
  onStepsChange(e) {
  
    this.setState({
  
      heart: e.target.value
  
  
    })
  }
  onTempChange(e) {
  
    this.setState({
  
      heart: e.target.value
  
  
    })
  }

render() {

  console.log(this.props)
  return (
    <div className="container-fluid">

      <div className="row">


        <Box icon="local_drink" color="#3A85FF" values={this.state.water} unit="L" > </Box>
        <Box icon="directions_walk" color="black" values={this.state.steps} unit="steps" />
        <Box icon="favorite" color="red" values={this.state.heart} unit="bpm" />
        <Box icon="wb_sunny" color="yellow" values={this.state.temperature} unit="°c" />

        {/* <p> Heart: {heartMin}</p>
          <p> Temperature: {tempMin}</p>
          <p> Steps: {stepsMin}</p> */}
      </div>

    </div>
  );
}
}

export default App;