import React from 'react';
import fire from '../config/Fire';
import {db} from '../config/Fire';

class RecipeViewer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            ingredients: [],
            steps : []
        }
    }

    render(){
        return(
            <div className="viewer-container">
                <h1>This is the test</h1>
            </div>
            );
    }


}

export default RecipeViewer;