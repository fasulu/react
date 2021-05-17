import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext(false)

function App() {

  const [isLogged, setisLogged] = useState(false)

  function SetAuth() {

    setisLogged(true)

  }

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value='true'>
          <Navbar />
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
