import './App.css';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
