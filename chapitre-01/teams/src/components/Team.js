
import React from 'react';

class Team extends React.Component {

    constructor () {
        super()

        this.state = {
            teamPoints : 1
        }
    }

    handleClick1() {
        this.teamPoints = 2
    }

    render() {

        return (

            <div className="box col-sm-3 col-6">

                <p style = {{ backgroundColor: "gray", color: this.props.color}}> {this.props.name} {this.props.color} {this.props.points}</p>
                <button style={{width:"auto"}}>Add Point</button>

            </div>
        );
    }
}

export default Team;