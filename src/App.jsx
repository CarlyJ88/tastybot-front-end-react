import React from 'react';
import './App.css';
import IngredientsPage from './IngredientsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeInput from './RecipePage';

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
