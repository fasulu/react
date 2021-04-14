
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      checkbox: ""
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

    let checkbox = event.target.value
    console.log("checkbox",checkbox)

    if(event.target.value === "on") {
      this.setState({
      checkbox: "on"
    })
    }else {
      this.setState({
        checkbox: "off"
      })
    } 
  }

  submitData(event) {

    let email1 = this.state.email
    console.log("email from submitdata", email1)

    if(this.state.checkbox === "on") {

      console.log("true", this.state.checkbox)
    } else if(this.state.checkbox === "off") {

      console.log("false", this.state.checkbox)
    }
    
  }

  render() {

    return (

      <div className="container">
        <div className="card-header bg-dark text-white">
          <div className="container">
            <div className="row col-sm-6">
              <div>
                <label> Email address </label>
                <input id="email" onChange={this.handleEmail} type="email" placeholder="email" ></input>

              </div>
              <div>
                <label> Password </label>
                <input id="password" type="password" placeholder="password"></input>

              </div>

            </div>
            <div>
              <input id="checkbox" type="checkbox" onClick={this.checkboxData} ></input>
              <label>Remember Me</label>
            </div>

            <div>
              <button style={{background:"lightGrey"}} onClick={this.submitData} email={this.state.email} password={this.state.password}>Submit</button>
            </div>
          </div>
        </div>
        <p>email: {this.state.email}</p>
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