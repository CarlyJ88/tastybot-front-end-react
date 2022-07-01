import React from 'react';
import './App.css';
import IngredientsPage from './Ingredients/IngredientsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeInput from './Recipes/RecipePage';

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
