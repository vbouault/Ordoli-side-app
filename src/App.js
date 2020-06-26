import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ChangeStatus from './ChangeStatus';



function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/:id' component={ChangeStatus}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
