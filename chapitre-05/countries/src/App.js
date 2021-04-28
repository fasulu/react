import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  componentDidMount() {
    
    fetch('https://restcountries.eu/rest/v2/france')
    .then(response => response.json())
    .then( countryArray  => {

      this.setState({
        name: countryArray[0].name,
        capital: countryArray[0].capital,
        flag: countryArray[0].flag,
        population: countryArray[0].population,
        region: countryArray[0].region
      })

      // console.log(this.state.name)
      }
    )
    .catch(err => console.error("there is an error",  err));
  }

  fetchCountry(country) {

    console.log("fetch country",country)
    const url = 'https://restcountries.eu/rest/v2/' + this.state.name;
    console.log("url is",url)

    fetch(url)
    .then(response => response.json())
    .then( countryArray  => {

      this.setState({
        name: countryArray[0].name,
        capital: countryArray[0].capital,
        flag: countryArray[0].flag,
        population: countryArray[0].population,
        region: countryArray[0].region
      })

      // console.log(this.state.name)
      }
    )
    .catch(err => console.error("there is an error",  err));
  }

  onClickFrance = () => {

    this.fetchCountry()

  }

  onClickBrazil = () => {

    this.setState({
      name: "brazil"
    })
    this.fetchCountry()
  }

  onClickCroatia = () => {

    this.setState({
      name: "croatia"
    })
    this.fetchCountry()
  }

  render() {

    return (
      <div>
        <h6>{this.state.name}</h6>
        <h6>{this.state.capital}</h6>
        <h6>{this.state.flag}</h6>
        <h6>{this.state.population}</h6>
        <h6>{this.state.region}</h6>


        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <Button onClickFuction = {() => this.onClickFrance()} value={"france"}> France </Button>
              <Button onClickFuction = {() => this.onClickBrazil()} value={"brazil"}> Brazil </Button>
              <Button onClickFuction = {() => this.onClickCroatia()} value={"croatia"}> Croatia</Button>
            </div>

          </div>


        </div>

      </div>

    )
  }
}

export default App;
