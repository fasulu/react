
import './App.css';
import React from 'react';
import Team from './components/Team';



class App extends React.Component {

  listTeams = [
    {name: "Arsenal", color: "BlueGold"},
    {name: "Chelsea", color: "White"},
    {name: "Birmingham", color: "BlackGrey"},
    {name: "Aston", color: "ClaretGold"},
    {name: "Man U", color: "BlackWhite"},
    {name: "Man City", color: "Black"},
    {name: "Liverpool", color: "WhiteRed"},
  ]

  render () {
      console.log(this.listTeams);
    return(

      <div className="row">

        <Team name= {this.listTeams.name} color= {this.listTeams.color} />


      </div>

    );

  }

}

export default App;
