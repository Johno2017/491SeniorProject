import React from 'react';
import fire from '../config/Fire';
import {db} from '../config/Fire';
import './RecipeViewer.css';


class RecipeViewer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            APP_KEY :  "94b1d9b2d93544768d3a53ecdafce872",
            ingredients: [],
            steps : [],
            selectedId : props.selectedId
        }
        this.retrieveIngredients = this.retrieveIngredients.bind(this)
    }

    async retrieveIngredients(selectedId){
    //Ingredients
    //////////////////////////////////////////////////////////////////////
    const ingredientsResponse = await fetch(`https://api.spoonacular.com/recipes/${this.state.selectedId}/ingredientWidget.json?apiKey=${this.state.APP_KEY}`);
    const ingredientData = await ingredientsResponse.json();
    var ingredientsList = [];
    console.log("---Listed Ingredients---");
    for(var k = 0; k < ingredientData.ingredients.length; k++){
      var ingredientName = ingredientData.ingredients[k].name;
      var ingredientAmount = ingredientData.ingredients[k].amount.us.value;
      var ingredientUnit = ingredientData.ingredients[k].amount.us.unit;

      var input = ingredientAmount + " " + ingredientUnit + " of " + ingredientName;

      ingredientsList.push(input);
    }

    //Set State
    this.setState({
        ingredients: ingredientsList
    });

    console.log(this.state.ingredients)

    let responseInstructions = await fetch(`https://api.spoonacular.com/recipes/extract?url=${this.props.source}&apiKey=${this.state.APP_KEY}`);
    let data = await responseInstructions.json();
    var listInstructionsObjects = [];

    /*for (var i = 0; i < data.analyzedInstructions[0].steps.length; i++){
        listInstructionsObjects.push(data.analyzedInstructions[0].steps[i]);
    }*/

    for (var i = 0; i < data.analyzedInstructions[0].steps.length; i++){
        listInstructionsObjects.push(`${data.analyzedInstructions[0].steps[i].number} ${data.analyzedInstructions[0].steps[i].step}`);
    }

    console.log(listInstructionsObjects);

    this.setState({
        steps: listInstructionsObjects
    });
}

    componentDidMount(state, props){
        this.retrieveIngredients();
    }
    
    saveRecipe() {
        db.collection("Recipes").add()
    }

    render()
    {
        return(
            <div className = "dashboard-container">
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-pic-container">
                        <img alt="Company Logo" id="logo" src={require("../images/Chef Hat.png")}/>
                    </div>
                    <h1>Ingredients</h1>
                    <ul>
                        {this.state.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
                </div>
            </div>
            <div className="my-list">
                <div className="list-header">
                    <h1 id="recipe-header">Instructions</h1>
                </div>
                <div className="list-container">
                    <ul className="saved-recipe-ul">
                        {this.state.steps.map(instruction => <li>{instruction}</li>)}
                    </ul>
                </div>
                <button onClick={this.saveRecipe}>Save</button>
            </div>
        </div>
            );
    }
}

export default RecipeViewer;