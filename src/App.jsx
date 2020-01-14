import React, { useState, Fragment, Component } from 'react';
import './App.css';
import IngredientsPage from './IngredientsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (

      <Router>
        <Switch>
          <Route path="/" exact component={IngredientsPage} />
        </Switch>
      </Router>
  )
}

export default App;
