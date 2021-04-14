
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      checkbox: "false"
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.checkboxData = this.checkboxData.bind(this)
    this.submitData = this.submitData.bind(this)
  }

  handleEmail(event) {

    let email = event.target.value
    console.log(event.target.value)
    console.log("email from handleEmail",email)

    this.setState({
      email: event.target.value
    })
  }

  checkboxData(event) {

    let temp = event.target.checked
    console.log(temp)
    
    this.setState({
      checkbox: event.target.checked

    })
    console.log("checkbox state value", this.state.checkbox)
  }

  submitData(event) {

    let email1 = this.state.email
    console.log("email from submitdata", email1)

  }

  render() {

    return (

      <div className="container">
        <div className="card-header bg-dark text-white">
          <div className="container">

            <div className="row col-sm-6">

              <div className="input-group input-group-lg">
                <label> Email address </label>
                <input id="email" class="" onChange={this.handleEmail} type="email" placeholder="email" required ></input>
              </div>

              <div className="input-group input-group-lg">
                <label> Password </label>
                <input id="password" class="" type="password" placeholder="password" required></input>
              </div>
            </div>

            <div className="input-group input-group-lg">
              <input className="form-check-input " id="checkbox" type="checkbox" onClick={this.checkboxData} ></input>
              <label >Remember Me</label>
            </div>

            <div className="form-check mb-3">
              <button style={{background:"lightGrey"}} onClick={this.submitData} email={this.state.email} password={this.state.password}>Submit</button>
            </div>
          </div>
        </div>
        <p>email: {this.state.email}</p>
        <p>checkbox: {this.state.checkbox}</p>
      </div>
    );
    
  }
}

export default App;

// if (this.state.email !== "undefined") {

//   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

//   if (!pattern.test(this.state.email)) {

//     let isValid = false;

//     console.log(this.state.email, "Please enter valid email address.");

//   }

// }