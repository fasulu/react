import React from "react";
import './App.css';
// import './components/Steps.jsx'

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <h1 className="text-primary">Hello !</h1>
          <p> Heart: {heartMin}</p>
          <p> Temperature: {tempMin}</p>
          <p> Steps: {stepsMin}</p>


        </div>

      </div>
    );
  }
}

export default App;