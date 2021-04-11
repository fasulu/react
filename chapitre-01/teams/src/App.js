
import './App.css';
import React from 'react';
import Team from './components/Team';



class App extends React.Component {

  listTeams = [
    { name: "Arsenal", color: "Blue", points: 2 },
    { name: "Chelsea", color: "White", points: 3 },
    { name: "Birmingham", color: "Black", points: 5 },
    { name: "Aston", color: "Gold", points: 10 },
    { name: "Man U", color: "White", points: 5 },
    { name: "Man City", color: "Black", points: 2 },
    { name: "Liverpool", color: "Red", points: 9 },
  ]

  

  render() {
    console.log(this.listTeams);

    // console.log(listTeams[2].points);
    // const handleClick1 = () => {this.listTeams[2].points = 1};
    // console.log(listTeams[2].points);

    return (

      <div >

        <Team name= {this.listTeams[0].name} color= {this.listTeams[0].color} points={this.listTeams[0].points} />
        <Team name= {this.listTeams[1].name} color= {this.listTeams[1].color} points={this.listTeams[1].points} />
        <Team name= {this.listTeams[2].name} color= {this.listTeams[2].color} points={this.listTeams[2].points} />
        <Team name= {this.listTeams[3].name} color= {this.listTeams[3].color} points={this.listTeams[3].points} />
        <Team name= {this.listTeams[4].name} color= {this.listTeams[4].color} points={this.listTeams[4].points} />
        <Team name= {this.listTeams[5].name} color= {this.listTeams[5].color} points={this.listTeams[5].points} />
        <Team name= {this.listTeams[6].name} color= {this.listTeams[6].color} points={this.listTeams[6].points} />

        
        {/* <div>{this.listTeams.map((team) =>
          <Team name={team.name} color={team.color} teamPoints={this.teamPoints} />)

        }</div> */}

      </div>

      

    );

  }

}

export default App;
