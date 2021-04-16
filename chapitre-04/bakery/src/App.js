
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
      // croissant: 0,
      // cafe: 0,
      // gateau: 0,
      // eau: 0,
      // boisson: 0,
      // painauchocolat: 0,
      // painauraisin: 0,
      // baguette: 0,
      // temp: "",
      // qty: 0,
      // prix: 0

      croissant: 1.00,
      cafe: 1.99,
      gateau: 2.49,
      eau: 1.00,
      boisson: 1.29,
      painauchocolat: 1.49,
      painauraisin: 1.59,
      baguette: 0.80,
      temp: "",
      qty: 1,
      prix: 0
      
    }

    this.selectionAdd = this.selectionAdd.bind(this);
    this.captureItem = this.captureItem.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.listBasket = this.listBasket.bind(this);
    this.basketPay = this.basketPay.bind(this);
  }

  selectionAdd(event) {

    console.log("Im in seletion add")

  }

  captureItem(event) {

    this.setState({
      temp: event.target.value
    })

    console.log("Im in capture item", event.target.value)
  }

  addQuantity(event) {

    this.setState({
      qty: event.target.value,
      [event.target.name]: event.target.value
    })
    console.log(this.state.qty)


  }

  addToBasket() {

    console.log("Item", this.state.temp, "quantity is", this.state.qty)

    let tempItem = this.state.temp

    console.log("im before switch tempItem is", tempItem)

    switch (tempItem) {

      case 'croissant':
        this.setState({
          croissant: parseInt(this.state.croissant) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })

        break;
      case 'cafe':
        this.setState({
          cafe: parseInt(this.state.cafe) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })

        break;
      case 'gateau':
        this.setState({
          gateau: parseInt(this.state.gateau) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })
        break;
      case 'eau':
        this.setState({
          eau: parseInt(this.state.eau) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })
        break;
      case 'boisson':
        this.setState({
          boisson: parseInt(this.state.boisson) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })
        break;
      case 'painauchocolat':
        this.setState({
          painauchocolat: parseInt(this.state.painauchocolat) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })
        break;
      case 'painauraisin':
        this.setState({
          painauraisin: parseInt(this.state.painauraisin) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })
        break;
      case 'baguette':
        this.setState({
          baguette: parseInt(this.state.baguette) + parseInt(this.state.qty),
          temp: "",   // make temp item state to empty
          qty: 0      // make temp qty state to zero
        })
        break;
      default:

    }

    console.log("Item", this.state.temp, "quantity is", this.state.qty)

  }


  listBasket() {

    console.log("im in list basket")

    const basket = this.state;
    console.table(basket);

    let basketLength = (0 - 1); // temp and qty should not include in this list, they are temparory keys
    for (var key in basket) {
      if (basket.hasOwnProperty(key)) {
        ++basketLength;
      }
    }

    console.table("basket length",basketLength)

  }

  basketPay() {


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
              <button type="button" className="btnAdd btn-outline-warning btn mr-3 " 
              onClick={this.selectionAdd}>Add</button>
              <button type="button" className="btnList btn-outline-primary btn mr-3" 
              onClick={this.listBasket} >List</button>
              <button type="button" className="btnBuy btn-outline-success btn mr-3"
              onClick={this.basketPay}>Pay</button>
            </div>
          </div>

          <div className="input-group mb-3 mx-3">
            <input className="form-control btn-input" id="userData"
              onChange={this.captureItem}
              type="text" placeholder={""} />

            <div className="input-group-append">
              <button className="btnPick btn-outline-secondary onHov text-sm"
                type="button"
                onClick={this.addToBasket} >Ajoute</button>
            </div>
          </div>

          <div className="input-group mb-3 mx-3">
            <label className="form-label text-white">Quantity</label>
            <input id="customRange" className="form-range"
              type="range"
              text={this.state.qty}
              onChange={this.addQuantity}
              min={itemMin}
              max={itemMax}
              step={1}
              value={this.state.qty} />
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

