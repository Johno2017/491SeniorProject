import React from 'react';
import style from './recipe.module.css';


const Recipe = ({id, title, image, timeReady, serving, source}) => {

    //const image_path = `https://spoonacular.com/recipeImages/${id}-90x90.jpg`;

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src = {`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} alt=""  />
            <p>Ready in: {timeReady} minutes</p>
            <p>Servings: {serving}</p>
            <p>Source: {source}</p>

        </div>
    );
};

export default Recipe;