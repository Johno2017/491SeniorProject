/*import React, { useEffect, useState } from 'react';
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
      sourceUrl: null,
      selectName: ""
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
    this.setState({
      query : this.state.search,
      search: "",
    });
    this.getRecipes();
  }

  renderViewer = (select, url, name) => {
    this.setState({
      selectedId : select,
      sourceUrl: url,
      viewer: true,
      selectName: name
    });
  }

  render()
  {
      if(this.state.viewer === true)
      {
        return(
        <RecipeViewer user = {this.props.user} selectedId={this.state.selectedId} source={this.state.sourceUrl} name={this.state.selectName}/>
        );
      }
      else
      {
        return(
        <div className = "Explore">
          <form onSubmit={this.getSearch} className = "search-form">
            <input className = "search-bar" type = "text"  value={this.state.search} onChange={this.updateSearch} ></input>
            <button className = "search-button" type ="submit">Search</button>
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


export default Explore;*/

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';
import './Explore.css';
import RecipeViewer from './RecipeViewer';
const Explore = (props) => {
  
  //API ID and KEY required to make authenticated and verified queries
  //const APP_ID = '975eb510';
  const APP_KEY = 'c6f233e90358432ca272e0a2f72ee2e4';
  const [recipes, setRecipes] = useState([]);//This state will hold the array of recipe objects retrieved from the query
  const [search, setSearch] = useState(""); //This is the state for the search bar
  const [query, setQuery] = useState('chicken'); //This is the default state for the search
  const [instructions, setInstruction] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [viewer, setViewer] = useState(false);
  const [selectedId, setSelect] = useState(null);
  const [sourceUrl, setUrl] = useState(null);
  const [selectName, setName] = useState("");
  //This will generate the actual queries and return JSON formatted response. The recipes state will then be set to an array of JSON objects
  const getRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.results);
    };
  
  //This will update the search value when the user is typing through the onChange EventListener
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  //This will change the query state to whatever the new search value is and reset search to empty
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const renderViewer = (select, url, name) => {
    setSelect(select);
    setUrl(url);
    setViewer(true);
    setName(name);
  }

  //React Lifecylce method to only rerender when the query value changes. This will only happen upon form submit
  useEffect(() => {
    getRecipes();
    console.log("Refreshed");
  }, [query]);

  

  if(viewer === true)
  {
    return(
    <RecipeViewer user = {props.user} selectedId={selectedId} source={sourceUrl} name={selectName}/>
    );
  }
  else
  {
    return(
    <div className = "Explore">
      <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "text"  value={search} onChange={updateSearch} ></input>
        <button className = "search-button" type ="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.title}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          timeReady={recipe.readyInMinutes}
          serving={recipe.servings}
          source={recipe.sourceUrl}
          select={renderViewer}
          />
        ))}
      </div>
    </div>
    );
  }
}

export default Explore;
