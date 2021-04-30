import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from './components/Button';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      allFlag: []
    }
    this.findCountryFlag = this.findCountryFlag.bind(this)
  }


  componentDidMount() {

    //  https://restcountries.eu/rest/v2/name/france
    // fetch('https://restcountries.eu/rest/v2/name/france')
    fetch('https://localhost:8000/countries')
    .then(response => response.json())
      .then(countryArray => {

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
      .catch(err => console.error("there is an error", err));
  }

  fetchCountry(country) {

    // const url = 'https://restcountries.eu/rest/v2/name/' + country;
    const url = 'https://localhost:8000/countries/name/' + country;

    // console.log("url is", url)

    // console.log("fetch country", country)

    fetch(url)
      .then(response => response.json())
      .then(countryArray => {

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
      .catch(err => console.error("there is an error", err));

  }

  onClickFrance = () => {

    // console.log("im in france")
    this.fetchCountry("france")

  }

  onClickBrazil = () => {

    // console.log("im in brazil")
    this.fetchCountry("brazil")

  }

  onClickCroatia = () => {

    // console.log("im in croatisa")
    this.fetchCountry("croatia")

  }

  onClickAllFlags() {

    this.fetchCountry("all")
  }

  onClickShowCard() {
    // console.log(this.state.name)
    this.fetchCountry(this.state.name)
  }

  findCountryFlag(event) {
    // console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  render() {

    return (
      <div>
        <div className="card bg-dark text-center text-white">
          <h1>Country Selector</h1>
        </div>
        <div className="container-fluid border border-dark shadow-lg p-3 mb-5 bg-white rounded ">
          <div className="row">
            <div className="col-12 nav justify-content-center">
              <Button buttonStyle="btn btn-primary m-2"
                onClick={() => this.onClickFrance()} name="France" />
              <Button buttonStyle="btn btn-primary m-2"
                onClick={() => this.onClickBrazil()} name="Brazil" />
              <Button buttonStyle="btn btn-primary m-2"
                onClick={() => this.onClickCroatia()} name="Croatia" />
              {/* <Button buttonStyle="btn btn-primary m-2"
                onClick={() => this.onClickAllFlags()} name="All" /> */}
            </div>
          </div>

          <div className="row my-3">
            <div className="col-12 nav justify-content-center">

              <input className=""
                onChange={this.findCountryFlag}
                type="text"
                placeholder="type country name" />
              <Card className="btn btn-outline-success m-2"
                type="button"
                onClick={() => this.onClickShowCard()}
                name="Show" />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-12 nav justify-content-center">
              <img src={this.state.flag} style={{ width: 150, height: "auto" }} alt="Flag" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-3">
              <h6>Name: {this.state.name}</h6>
              <h6>Capital: {this.state.capital}</h6>
              {/* <h6>{this.state.flag}</h6> */}
              <h6>Population: {this.state.population}</h6>
              <h6>Region: {this.state.region}</h6>

            </div>
          </div>

        </div>

      </div>

    )
  }
}

export default App;
