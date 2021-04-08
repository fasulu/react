
import React from 'react';

class Team extends React.Component {

    // constructor () {
    //     super()
    // }

    render() {

        return (

            <div className="box col-sm-3 col-6">

                <p> {this.props.name} {this.props.color}</p>

            </div>
        );
    }
}

export default Team;