import React, { useRef, useReducer } from 'react';
import firebase from 'firebase';
import {db} from '../config/Fire';
import './RecipeViewer.css';


class RecipeViewer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            APP_KEY :  "94b1d9b2d93544768d3a53ecdafce872",
            ingredients: [],
            steps : [],
            selectedId : props.selectedId,
            name: props.name
        }
        this.retrieveRecipeInfo = this.retrieveRecipeInfo.bind(this)
        this.saveRecipe = this.saveRecipe.bind(this);
    }

    async retrieveRecipeInfo(selectedId)
    {
            console.log("Running the api call");
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

                //console.log(this.state.ingredients)

                let responseInstructions = await fetch(`https://api.spoonacular.com/recipes/extract?url=${this.props.source}&apiKey=${this.state.APP_KEY}`);
                let data = await responseInstructions.json();
                var listInstructionsObjects = [];

                console.log(data);

                if(data.analyzedInstructions[0].steps){
                    for (var i = 0; i < data.analyzedInstructions[0].steps.length; i++)
                    {
                        listInstructionsObjects.push(`${data.analyzedInstructions[0].steps[i].number} ${data.analyzedInstructions[0].steps[i].step}`);
                    }

                console.log(listInstructionsObjects);

                    this.setState({
                        steps: listInstructionsObjects
                    });
                }
                else
                {
                    listInstructionsObjects.push("No Steps were retrieved");
                    this.setState({
                        steps: listInstructionsObjects
                    });
                }
               
    }

    componentDidMount(state, props){
        const recipeRef = db.collection("Recipes").doc(`${this.state.selectedId}`);
        let found = 0;


        recipeRef.get().then((docSnapshot) => {
            if(docSnapshot.exists) {
                found = 1;
                recipeRef.onSnapshot((doc) => {
                    this.setState({
                        ingredients : doc.data().ingredient,
                        steps : doc.data().instructions
                    });
                })
            }
            else 
            {
                console.log("Doc not found. Making API call");
                this.retrieveRecipeInfo();
            }
        });
        
    }
    
    saveRecipe() {
        db.collection("Recipes").doc(`${this.state.selectedId}`).set({
            name: this.props.name,
            ingredient : this.state.ingredients,
            instructions : this.state.steps
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

        db.collection("Users").doc(`${this.props.user.email}`).update({
            savedRecipes: firebase.firestore.FieldValue.arrayUnion(`${this.props.selectedId}`)
        });
    }

    render()
    {
        return(
            <div className = "dashboard-container">
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-pic-container">
                        <img alt="Company Logo" id="logo" src={require(`../images/Chef Hat.png`)}/>
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