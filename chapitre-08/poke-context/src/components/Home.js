import { useState, useEffect } from 'react';

function Home() {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/1')
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [type, setType] = useState('')
  

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

    useEffect(() => {
 
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
                // console.log(data.name)
                // console.log(data.types[0].type.name)
                // console.log(data.height)
                // console.log(data.weight)
            })
    })

    const handleOnClick = (e) => {
        e.preventDefault();

        const randomNumber = Math.floor(Math.random() * 100) + 1

        console.log(randomNumber)
        setUrl(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)

        console.log(url)


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

    }

    return (

        <div>
            <form onSubmit={handleOnClick}>

                {/* <h2>Im in Home</h2> */}

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
}

export default Home
