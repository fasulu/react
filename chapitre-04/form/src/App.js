
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
    this.handlePassword = this.handlePassword.bind(this)

  }

  handleEmail(event) {

    let email = event.target.value

    // console.log(event.target.value)
    // console.log("email from handleEmail", email)
    
    this.setState({
      email: event.target.value
    })

    const emailRegEx = /^[^\s@]+@[^\s@]+$/;   // to prevent multiple @ sign

    console.log("this is valid or not", emailRegEx.test(email));
  }

  handlePassword(event) {

    let pwd = event.target.value

    // console.log("password text", pwd)

    this.setState({
      password: event.target.value
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

    let email = this.state.email

    console.log("email from submitdata", this.state.email)

    const emailRegEx = /^[^\s@]+@[^\s@]+$/;   // to prevent multiple @ sign

    if(emailRegEx.test(email)) {

      console.log("this is valid or not", true,  emailRegEx.test(email));
    
    } else {
      console.log(false)
    }
    



  }

  render() {

    return (

      <div>

        <div className="col-6 mb-3 offset-3">
          <div>
            <label for="inputText" class="form-label">Email </label> <br></br>

            <input type="email" id="inputEmail" class="emailInput" onChange={this.handleEmail} value={this.state.email}></input>
          </div>
        </div>


        <div className="col-6 mb-3 offset-3">
          <div>
            <label for="inputPassword" class="form-label">Password</label><br></br>
            <input id="inputPassword" class="pwdInput" onChange={this.handlePassword} value={this.state.password}></input>  {/* type="password"  */}


          </div>

          <div className="mb-3">
            <input className="mx-1 " id="checkbox" type="checkbox" onClick={this.checkboxData} ></input>
            <label className=""  >Remember Me</label>
          </div>

          <div className="row p-2 ">
            <div className="">
              <button style={{ background: "lightGrey" }} onClick={this.submitData} email={this.state.email} password={this.state.password}>Submit</button>
            </div>
          </div>
        </div>
        <p>email: {this.state.email}</p>
        <p>checkbox: {this.state.checkbox}</p>
        <p>password: {this.state.password}</p>

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