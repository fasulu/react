import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Navbar() {

    const history = useHistory();
    const [login, setLogin] = useState('false');
    const loginUser = localStorage.getItem("loginUser")


    const handleHome = () => {

        setLogin(localStorage.getItem("loginStatus"))
        if (login === true) {
            history.push('/home')
        } else {
            console.log("you must sign in")
            history.push('/login')
        }
    }

    const handleSeConnecter = () => {
        localStorage.setItem("loginStatus", "")
        localStorage.setItem("loginUser", "")
    }

    return (
        <nav className="navbar card bg-dark">
            <h2 style={{
                color: 'white',
                borderRadius: '2px'
            }}>Poke-dex</h2>
            <p style={{
                color: 'white',
                borderRadius: '2px',
                fontSize: 'small'
            }}>
                {/* User Name: {loginUser} */}
            </p>

            <div className="links row">
                <div className="col">
                    <Link to='/home'
                        style={{
                            color: 'greenyellow',
                            border: 'white',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            fontWeight: 'bolder'
                        }}
                        onClick={handleHome}
                    >Home</Link>

                    <div className="">
                        <Link to='/login'
                            style={{
                                color: 'greenyellow',
                                borderRadius: '2px',
                                textDecoration: 'none',
                                fontWeight: 'bolder'
                            }}
                            onClick={handleSeConnecter}
                            >Se Connecter</Link>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
