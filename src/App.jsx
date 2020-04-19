import React from 'react';
import './App.css';
import IngredientsPage from './IngredientsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipePage from './RecipePage';

function App() {

  return (

      <Router>
        <Switch>
          <Route path="/" exact component={IngredientsPage} />
          <Route path="/recipe" exact component={RecipePage} />
        </Switch>
      </Router>
  )
}

export default App;
