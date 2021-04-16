
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'
import './App.css';
import './components/Add'


const itemMin = 1;
const itemMax = 10;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      selectionInfo: "",
      croissant: 0,
      cafe: 0,
      gateau: 0,
      eau: 0,
      boisson: 0,
      painauchocolat: 0,
      painauraisin: 0,
      baguette: 0,
      temp:"",
      qty:1
    }

    this.selectionAdd = this.selectionAdd.bind(this);
    this.captureItem = this.captureItem.bind(this);
    this.addQuantity = this.addQuantity.bind(this);

  }

  selectionAdd(event) {

    console.log("Im in seletion add")

  }

  captureItem(event) {

    this.setState({
      temp:event.target.value
    })

    console.log("Im in capture item", event.target.value)
  }


  addQuantity(event) {


    if(this.state.temp === "croissant") {

      
    }

    this.setState ({
      qty: event.target.value
    })
    console.log(this.state.qty)
  }



  render() {
    return (
      <div className="card bg-dark main-container">

        <div className="header text-center my-3 text-light">
          <h1>Konexio</h1>
          <h4>Canteen</h4>
        </div>

        <div className="row mx-5 my-1 ">

          <div className="col mb-3 ">
            <div className="btn-toolbar pull-left mx-0">
              <button type="button" className="btnAdd btn-outline-warning btn mr-3 " onClick={this.selectionAdd}>Add</button>
              <button type="button" className="btnList btn-outline-primary btn mr-3">List</button>
              <button type="button" className="btnBuy btn-outline-success btn mr-3">Pay</button>
            </div>
          </div>

          <div className="input-group mb-3 mx-3">
            <input className="form-control btn-input" id="userData"
            onChange={this.captureItem}
            type="text" placeholder={""}/>

            <div className="input-group-append">
              <button className="btnPick btn-outline-secondary onHov text-sm" type="button">Ajoute</button>
            </div>
          </div>

          <div className="input-group mb-3 mx-3">
            <label className="form-label text-white">Prix</label>
            <input id="customRange" className="form-range" 
            type="range" 
            onChange={this.addQuantity}
            min={itemMin}
            max={itemMax}
            step={1} />
          </div>

        </div>

        <div className="row mx-5 text-white">

          <div className="col-8 mb-2">
            <div className="box blue"> pain au chocolat</div>
          </div>

          <div className="col-6 mb-2">
            <div className="box blue"> pain au chocolat</div>
          </div>

        </div>


      </div>
    );
  }
}

export default App;

