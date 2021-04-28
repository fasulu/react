import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
      region: ""
    }
    this.findCountryFlag = this.findCountryFlag.bind(this)
  }


  componentDidMount() {

    //  https://restcountries.eu/rest/v2/name/france
    fetch('https://restcountries.eu/rest/v2/name/france')
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

    console.log("fetch country", country)
    const url = 'https://restcountries.eu/rest/v2/name/' + country;
    console.log("url is", url)

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
        <div>
        <h6>{this.state.name}</h6>
        <h6>{this.state.capital}</h6>
        <h6>{this.state.flag}</h6>
        <h6>{this.state.population}</h6>
        <h6>{this.state.region}</h6>
        </div>


        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-md">
              <Button className="btn btn-primary"
                onClick={() => this.onClickFrance()} name="France" />
              <Button className="btn btn-primary"
                onClick={() => this.onClickBrazil()} name="Brazil" />
              <Button className="btn btn-primary"
                onClick={() => this.onClickCroatia()} name="Croatia" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-md">

              <input className="" 
              onChange={this.findCountryFlag} 
              type="text" 
              placeholder="type country name" />
              <Card className="btn btn-outline-success" 
              type="button" 
              onClick={() => this.onClickShowCard()} 
              name="Show"/>
            </div>
            <div className="row">
            <div className="col-lg-md my-5 align-left">
              <img src={this.state.flag} style={{ width: 150, height: "auto" }} />
            </div>

            </div>
              





          </div>
        </div>

      </div>

    )
  }
}

export default App;
