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

                <nav>
                    <ul>
                        {
                            this.props.userList.map((elem, index) => {
                                console.log(elem)
                                return <li key={index} style={{ listStyleType: "none" }}> <Link to={`/${elem}`}> {elem} </Link></li>
                            })
                        }
                    </ul>
                </nav>

                <BrowserRouter>

                </BrowserRouter>

            </div>

        );

    }
}

export default Home