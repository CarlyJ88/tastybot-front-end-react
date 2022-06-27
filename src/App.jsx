import React from 'react';
import './App.css';
import IngredientsPage from './IngredientsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeInput from './RecipePage';
// import ListRecipes from './ListRecipes'

function App() {

  return (

      <Router>
        <Switch>
          <Route path="/" exact component={IngredientsPage} />
          <Route path="/recipe" exact component={RecipeInput} />
          {/* <Route path="/showRecipes" exact component={ListRecipes} /> */}
        </Switch>
      </Router>
  )
}

export default App;
