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
      water : 0,
      heart : 120,
      temperature : -120,
      steps : 3000
    }
  }

  render() {

    console.log(this.props)
    return (
      <div className="container-fluid">

        <div className="row">

           
          <Box icon="local_drink" color="#3A85FF" values={1.5} unit="L" > </Box>
          <Box icon="directions_walk" color="black" values={3000} unit="steps" />
          <Box icon="favorite" color="red" values={120} unit="bpm" />
          <Box icon="wb_sunny" color="yellow" values={10} unit="°c" />

          {/* <p> Heart: {heartMin}</p>
          <p> Temperature: {tempMin}</p>
          <p> Steps: {stepsMin}</p> */}
        </div>

      </div>
    );
  }
}

export default App;