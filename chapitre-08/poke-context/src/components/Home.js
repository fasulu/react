import { useState, useEffect } from 'react';
import { Router, Route } from 'react-router';
import Login from './Login';

function Home() {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/1')
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [type, setType] = useState('')
    // const [login, setLogin] = useState(localStorage.getItem("loginStatus"))


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
        if (localStorage.getItem("loginStatus")) {
            return (

                <div>
                    <form onSubmit={handleOnClick}>
                        <button >Get A Pokemon</button>
                        <div>
                            <div>
                                <label>Name: {name}</label>
                            </div>
                            <div>
                                <label>Height: {height}</label>
                            </div>
                            <div>
                                <label>Weight: {weight}</label>
                            </div>
                            <div>
                                <label>Type: {type}</label>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
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



//*** */
// fetch(url)
//     .then(res => {
    //         if (!res.ok) {
        //             throw Error('Could not fetch data for that resource');
        //         }
        //         return res.json();
        //     })
        //     .then(data => {
            //         setName(data.name)
            //         setType(data.types[0].type.name)
            //         setHeight(data.height)
            //         setWeight(data.weight)
            //         console.log(data.name)
            //         console.log(data.types[0].type.name)
            //         console.log(data.height)
            //         console.log(data.weight)
            //     })
            //*** */

            //*** */
            // const firstPokemon = "https://pokeapi.co/api/v2/pokemon/1"

            // useEffect(() => {

                //     const randomNumber = Math.floor(Math.random() * 100) + 1

                //     console.log(randomNumber)
                //     setUrl(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)

                //     console.log(url)

                //     fetch(url)
                //         .then(res => {
                    //             if (!res.ok) {
                        //                 throw Error('Could not fetch data for that resource');
                        //             }
                        //             return res.json();
                        //         })
                        //         .then(data => {
                            //             setName(data.name)
                            //             setType(data.types[0].type.name)
                //             setHeight(data.height)
                //             setWeight(data.weight)
                //             console.log(data.name)
                //             console.log(data.types[0].type.name)
                //             console.log(data.height)
                //             console.log(data.weight)
                //         })
                // }, [url])
                //*** */


                // renderLoginStatus() {

                //     setLogin(localStorage.getItem("loginStatus"))
                //     if (login === true) {

                //             <div>
                //                 <form onSubmit={handleOnClick}>
                //                     <button >Get A Pokemon</button>
                //                     <div>
                //                         <div>
                //                             <label>Name: {name}</label>
                //                         </div>
                //                         <div>
                //                             <label>Height: {height}</label>
                //                         </div>
                //                         <div>
                //                             <label>Weight: {weight}</label>
                //                         </div>
                //                         <div>
                //                             <label>Type: {type}</label>
                //                         </div>
                //                     </div>
                //                 </form>
                //             </div>

                //     } else {
                //             <div>
                //                 <h2> You must login</h2>
                //             </div>
                //     }
                // }