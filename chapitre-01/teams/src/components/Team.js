
import React from 'react';

class Team extends React.Component {

    constructor () {
        super()

        this.state = {
            teamPoints : 1
        }
    }

    render() {

        return (

            <div className="box col-sm-3 col-6">

                <p style = {{ backgroundColor: "gray", color: this.props.color}}> {this.props.name} {this.props.color} {this.props.teamPoints}</p>
                

            </div>
        );
    }
}

export default Team;