import React, { useState, Fragment, Component } from 'react';
import './App.css';
import IngredientsPage from './IngredientsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeInput from './RecipeInput';

function App() {

  return (

      <Router>
        <Switch>
          <Route path="/" exact component={IngredientsPage} />
          <Route path="/recipe" exact component={RecipeInput} />
        </Switch>
      </Router>
  )
}

export default App;
