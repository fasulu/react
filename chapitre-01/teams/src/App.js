
import './App.css';
import React from 'react';
import Team from './components/Team';



class App extends React.Component {

  listTeams = [
    { name: "Arsenal", color: "Blue" },
    { name: "Chelsea", color: "White" },
    { name: "Birmingham", color: "Black" },
    { name: "Aston", color: "Gold" },
    { name: "Man U", color: "White" },
    { name: "Man City", color: "Black" },
    { name: "Liverpool", color: "Red" },
  ]

  render() {
    console.log(this.listTeams);
    return (

      <div className="row">

        {/* <Team name= {this.listTeams[0].name} color= {this.listTeams[1].color} /> */}


        {this.listTeams.map((team) =>
          <Team name={team.name} color={team.color} teamPoints={team.teamPoints} />)

        }
        {/* <button onClick={() => this.setState({ teamPoints: "2" })}>Add Point</button> */}
      </div>

    );

  }

}

export default App;
