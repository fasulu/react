import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'



function Login() {

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const [login, setLogin] = useState(false)

    localStorage.setItem("loginStatus", false);

    const onSubmit = (data, e) => {

        const userDetails = { username, pwd };

        e.preventDefault();
        console.log(userDetails.username, userDetails.pwd, data)

        if (userDetails.username.length <= 5 || userDetails.username.length >= 21) {
            console.log("username must be min 6 and max 20 characters");
            localStorage.setItem("loginStatus", false)
            return;
        }
        if (userDetails.pwd.length <= 5) {
            console.log("password must not be less than 6 characters");
            localStorage.setItem("loginStatus", false)
            return
        }
        if (userDetails.username === userDetails.pwd) {
            console.log("login Success")
            localStorage.setItem("loginStatus", true)
            history.push("/home")
        } else {
            console.log("Username or Password wrong")
        }
    }

    return (
        <div className="card bg-light my-2">

            {/* <h2>Im in Login</h2> */}

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mx-2">

                    <div className="my-2">
                        <label>User Name</label>
                        <input
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="my-2">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />

                    </div>

                    <div className="my-2">
                        <button className="button"
                            type="submit"
                        >Se Connecter</button>

                        {/* <p>{username}</p>
                        <p>{pwd}</p> */}

                    </div>
                </div>

            </form>


        </div>
    )
}

export default Login