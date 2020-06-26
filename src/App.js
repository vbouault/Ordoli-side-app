import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import ChangeStatus from './ChangeStatus';



function App() {

  return (
    <Router>
    <div className="App">
    <Link to='/BWKkkWp4R8q4B0GoetnC' >BWKkkWp4R8q4B0GoetnC</Link>
      <Switch>
        <Route exact path='/:id' component={ChangeStatus}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
