import { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {


        }
    }

    showSelection() {

        console.log("Iam in component did mount")


    }


    render() {

        console.log(this.props)
        console.log(this.state)

        return (
            <div>

            </div>

        );

    }
}

export default Home