import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Components/Recipe.js'

function App() {

  const APP_ID = '9aabad26';
  const APP_KEY = '701d534e360cf30c7f5db4376838156c';

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const [recipes, setRecipes] = useState([]);

  //States


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
      {/* </Navbar > */}

      <div className="d-flex justify-content-center m-2">
        <form onSubmit={updateQuery} className="form-inline">
          <input type="text" className="form-control" placeholder="Search for a recipe..." value={search} onChange={updateSearch}/>
          <button type="submit" className="btn btn-primary ml-2">Search</button>
        </form>
      </div>

      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} //find another key
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}/>
      ))}

    </div>
  );
}

export default App;
