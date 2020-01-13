import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './Components/Navbar.js'
import Recipe from './Components/Recipe.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import About from './Components/About.js'

import './App.css';

function App() {

  const APP_ID = '9aabad26';
  const APP_KEY = '701d534e360cf30c7f5db4376838156c';

  //States
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('userNameDefault');

  // const [recipes, setRecipes] = useState([{recipe.label: 'Cute Pancakes',
  //                                          calories: 123,
  //                                          image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}, 
  //                                          {label: 'Different Pancakes',
  //                                          calories: 123,
  //                                          image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}, 
  //                                          {label: 'Special Pancakes',
  //                                          calories: 123,
  //                                          image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}]);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);

  //get searched recipes
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const updateQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn}
                userName={userName} />

        <Route exact path="/">
            {/* Searchbar */}
            <div className="d-flex justify-content-center m-3">
              <form onSubmit={updateQuery} className="form-inline">
                <input type="text" className="form-control" placeholder="Search for a recipe..." value={search} onChange={updateSearch}/>
                <button type="submit" className="btn dark-blue-color text-light ml-2">Search</button>
              </form>
            </div>

            {/* Searched recipes */}
            <div className="container text-dark custom-container">
              {recipes.map((recipe, index) => (
                <Recipe key={recipe.recipe.label} //find another key
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image} />
                        
              ))}
            </div>
          </Route>
          
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/About" component={About}/>
      </Router>
    </div>

  );
}

export default App;
