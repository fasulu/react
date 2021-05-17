import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Navbar() {

    const history = useHistory();
    const [login, setLogin] = useState('false');

    const handleOnClick = () => {

        setLogin(localStorage.getItem("loginStatus"))
        if (login === true) {
            history.push('/home')
        }else{
            console.log("you must sign in")
            history.push('/login')
        }
    }

    return (
        <nav className="navbar card bg-light">
            <h2>Poke-dex</h2>

            <div className="links row">
                <div className="col mx-5">
                <Link to='/home'
                    style={{
                        color: 'white',
                        backgroundColor: 'gray',
                        borderRadius: '2px'
                    }}
                    onClick={handleOnClick}
                    >Home</Link>
                <div  className="col">
                    <Link to='/login'
                    style={{
                        color: 'white',
                        backgroundColor: 'gray',
                        borderRadius: '2px'
                    }}>Se Connecter</Link>

                </div>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
