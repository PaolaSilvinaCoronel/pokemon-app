
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import { Home } from './Home';
import { Detalles } from './Detalles';
import landing from './landing';


function App() {
  return (
   <Router>
     <Switch>
     <Route exact path="/" component={landing}></Route>
       <Route exact path="/home" component={Home}></Route>
       <Route exact path="/detalle/:id" component={Detalles}></Route>
     </Switch>
   </Router>
  );
}

export default App;
