import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import { UserContext } from '../App'

function Home() {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/1')
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [type, setType] = useState('')

    const [user, setUser] = useContext(UserContext);

    // const [login, setLogin] = useState(localStorage.getItem("loginStatus"))

    console.log("usercontext user value in home", user)

    useEffect(() => {

        console.log("login status at homepage", localStorage.getItem("loginStatus"))

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setName(data.name)
                setType(data.types[0].type.name)
                setHeight(data.height)
                setWeight(data.weight)
                console.log(data.name)
                console.log(data.types[0].type.name)
                console.log(data.height)
                console.log(data.weight)
            })
    })

    const handleOnClick = (e) => {
        e.preventDefault();

        const randomNumber = Math.floor(Math.random() * 100) + 1

        console.log(randomNumber)
        setUrl(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)

        console.log(url)
    }

    function RenderLoginStatus() {

        console.log("login status at homepage/renderloginstatus", localStorage.getItem("loginStatus"))
        // setLogin(localStorage.getItem("loginStatus"))
        if (localStorage.getItem("loginStatus") === "true") {
            return (

                <div className="row my-2">
                    <form onSubmit={handleOnClick}>
                        <button className="btn btn-primary" >Get A Pokemon</button>
                        <div className="row ">
                            <div className=" my-2">
                                <label>Name: {name}</label>
                            </div>
                            <div className=" my-2">
                                <label>Height: {height}</label>
                            </div>
                            <div className=" my-2">
                                <label>Weight: {weight}</label>
                            </div>
                            <div className="my-2">
                                <label>Type: {type}</label>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <h2 style={{
                        color: 'orange',
                        border: 'white',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        fontWeight:'bold',
                        marginTop: '10px'
                    }}>You must login to use this service</h2>
                    </div>
                    <Router>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </Router>
                </div>
            )
        }
    }

    return (

        <div>
            {/* <h2>Im in Home</h2> */}
            {RenderLoginStatus()}
        </div>
    )
}

export default Home