import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';
import './Explore.css';
import RecipeViewer from './RecipeViewer';

class Explore extends React.Component{

  constructor(props){
    super(props);
    

    this.state = {
      APP_KEY : "94b1d9b2d93544768d3a53ecdafce872",
      recipes: [],
      search : "",
      query : "chicken",
      instructions: [],
      ingredients: [],
      viewer: false,
      selectedId: null,
      sourceUrl: null
    };
  }

  
  getRecipes = async() => {
  const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${this.state.query}&apiKey=${this.state.APP_KEY}`);
  const data = await response.json();

    console.log(data.results);
    this.setState({
      recipes: data.results
    });
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    });

  }

  getSearch = (e) => {
    e.preventDefault();
    console.log(this.state.search);
    this.setState({
      query : this.state.search,
      search: "",
    });
    console.log(this.state.query);
    this.getRecipes(this.state.query);
  }

  renderViewer = (select, url) => {
    this.setState({
      selectedId : select,
      sourceUrl: url,
      viewer: true
    });
  }

  render()
  {
      if(this.state.viewer === true)
      {
        return(
        <RecipeViewer selectedId={this.state.selectedId} source={this.state.sourceUrl}/>
        );
      }
      else
      {
        return(
        <div className = "Explore">
          <form onSubmit={this.getSearch} className = "search-form">
            <input className = "search-bar" type = "text"  value={this.state.search} onChange={this.updateSearch} ></input>
            <button className = "search-button" type = "submit">Search</button>
          </form>
          <div className="recipes">
            {this.state.recipes.map(recipe => (
              <Recipe 
              key={recipe.title}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              timeReady={recipe.readyInMinutes}
              serving={recipe.servings}
              source={recipe.sourceUrl}
              select={this.renderViewer}
              />
            ))}
          </div>
        </div>
        );
      }
  }  
}


export default Explore;
