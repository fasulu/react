import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './components/Add.jsx'
import './components/Button.jsx'
import Button from './components/Button.jsx';
import List from './components/List.jsx'
import Pay from './components/Pay.jsx'
import './styles/global.css';
// import Card from './components/Card.jsx'

// const image = '../src/water.png'

class App extends Component {
  constructor() {
    super()


    this.state = {
      activeTab: "add",
      items: [],
    }

    // this.onClickShowImage = this.onClickShowImage.bind(this);
  }

  onClickAdd = () => {
    this.setState({ activeTab: "Add" })
  }
  onClickList = () => {
    this.setState({ activeTab: "List" })
  }
  onClickPay = () => {
    this.setState({ activeTab: "Pay" })
  }

  // onClickShowImage() {

  //   console.log("im in show image")

  //   this.setState({
  //     image: image
  //   })
  // }


  renderOnglet() {
    if (this.state.activeTab === "Add") {
      return (
        <div>
          <Add addItem={this.addItem} />
        </div>
      )
    }
    if (this.state.activeTab === "List") {
      return (
        <List myliste={this.state.items} />
      )
    }
    if (this.state.activeTab === "Pay") {
      return (
        <Pay />
      )
    }
  }
  addItem = (name, price) => {
    this.setState(
      {
        items: [
          ...this.state.items,
          { name: name, price: price }
        ]
      }
    )
  }
  render() {
    console.log("additem", this.state.items)
    return (
      <div className="card bg-dark main-container">

        <div className="header text-center my-3 text-light">
          <h1>Konexio</h1>
          <h4>Bakery</h4>


          <div className="row mx-5 my-1">
            <div className="col-6 mx=5">

              <Button
                onClickFuction={() => this.onClickAdd()}
                isSelected={this.state.activeTab === "Add" ? "btn btn-primary" : "btn btn-light"}
              >Add</Button>

              <Button
                onClickFuction={() => this.onClickList()}
                isSelected={this.state.activeTab === "List" ? "btn btn-primary" : "btn btn-light"}
              >List</Button>

              <Button
                onClickFuction={() => this.onClickPay()}
                isSelected={this.state.activeTab === "Pay" ? "btn btn-primary" : "btn btn-light"}
              >Pay</Button>


            </div>
          </div>
        </div>

        {this.renderOnglet()}

      </div>
    );
  }
}
export default App;
