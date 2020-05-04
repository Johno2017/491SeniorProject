import React from 'react';
import style from './recipe.module.css';


class Recipe extends React.Component {

    constructor(props){
        super(props);
    }

    selectRecipe = () => {
        console.log(this.props.id, this.props.source);
        this.props.select(this.props.id, this.props.source);
    }

    render(){
        return(
        <div className={style.recipe}>
            <h1>{this.props.title}</h1>
            <img className={style.image} src = {`https://spoonacular.com/recipeImages/${this.props.id}-312x231.jpg`} alt=""  />
            <p>Ready in: {this.props.timeReady} minutes</p>
            <p>Servings: {this.props.serving}</p>
            <p>Source: {this.props.source}</p>
            <button onClick={this.selectRecipe}>Cook</button>
        </div>
    );
    }
    
}

export default Recipe;