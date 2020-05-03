import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';
import './Explore.css';

const Explore = () =>{

  const APP_KEY = "ea8c4e1aacc243b4bbed9997a61f6b9c";
  let recipeIDs = {};
  let i;

  let recipe_dict = {};
  let ingredientList = [];
  const [recipes, setRecipes] = useState([]); //array of objects
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${APP_KEY}`);
    const data = await response.json();

    //console.log(data.results);
    setRecipes(data.results);
    //HENRY'S CODE WITH HIS DICT OF ID AND NAME WITH HIS INGREDIENTS
    //Save Recipe ID + name => key/value pairs
    //let recipe_dict = {};
    /*
    for (var i = 0; i < data.results.length; i++){
      recipe_dict[data.results[i].id] = data.results[i].title;
    }

    for(var key in recipe_dict){
      console.log(key + " " + recipe_dict[key]);
    }

    //First recipe ID
    var testIngredient = Object.keys(recipe_dict)[0];

    //Ingredients
    //////////////////////////////////////////////////////////////////////
    const ingredientsResponse = await fetch(`https://api.spoonacular.com/recipes/${testIngredient}/ingredientWidget.json?apiKey=${APP_KEY}`);
    const ingredientData = await ingredientsResponse.json();

    console.log("---Listed Ingredients---");
    for(var k = 0; k < ingredientData.ingredients.length; k++){
      var ingredientName = ingredientData.ingredients[k].name;
      var ingredientAmount = ingredientData.ingredients[k].amount.us.value;
      var ingredientUnit = ingredientData.ingredients[k].amount.us.unit;

      var input = ingredientAmount + " " + ingredientUnit + " of " + ingredientName;

      ingredientList.push(input);
    }

    //Set State
    setIngredients(ingredientList);
     


    //-------------------------------------------------------------------------------------------------



    //JOSE'S CODE A LITTLE BIT OF EVERYTHING... INSTRUCTIONS AT THE BOTTOM
    /*
      //Loop that puts ID and Title in a dictionary
      for (i = 0; i < data.results.length; i++){
          recipeIDs[data.results[i].id] = data.results[i].title;
          //TO RETRIEVE ALL INSTRUCTIONS FROM RECIPES BREAKS WHEN NO INSTRUCTIONS ARE FOUND
          // let responseInstructions = await fetch(`https://api.spoonacular.com/recipes/extract?url=${data.results[i].sourceUrl}&apiKey=${APP_KEY}`);
          // let data3 = await responseInstructions.json();
          // console.log(data3.analyzedInstructions[0].steps);

      }
      console.log(data.results);
      console.log(data.results[0].id);
      console.log(recipeIDs);



      const responseIngredients = await fetch(`https://api.spoonacular.com/recipes/${Object.keys(recipeIDs)[0]}/ingredientWidget.json?apiKey=${APP_KEY}`);
      const data2 = await responseIngredients.json();
      console.log(data2);



          let responseInstructions = await fetch(`https://api.spoonacular.com/recipes/extract?url=${data.results[0].sourceUrl}&apiKey=${APP_KEY}`);
          let data3 = await responseInstructions.json();
          var listInstructions = [];
          for (var w = 0; w < data3.analyzedInstructions[0].steps.length; w++){
              listInstructions.push(data3.analyzedInstructions[0].steps[w]);
          }
          console.log(listInstructions);
          setInstructions(listInstructions);
         */
  }

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");

  }

  return(
    <div className = "Explore">
      <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "text"  value={search} onChange={updateSearch} ></input>
        <button className = "search-button" type = "submit">Search</button>
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
          />
        ))}
      </div>
    </div>
  )
}


export default Explore;
