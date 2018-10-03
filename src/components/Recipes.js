import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import "./css/Recipes.css";

import sorry_image from "./css/images/sorry_image.svg";
const SERVER_BASE_URL = "http://localhost:8000";
const BASE_URL = 'http://localhost:8000/recipes/';

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: []
		}
	}

	componentDidMount() {
		fetch(`${BASE_URL}`)
		.then(data => data.json())
		.then((data) => {
			this.setState({
				recipes: data
			})
		})
		console.log(this.state.recipes);
	}


	createRecipeRow(recipe) {
		var filter = "";
		var category = 0;

		if (typeof this.props.filter !== 'undefined') 
			filter = this.props.filter;

		if(typeof this.props.match !== 'undefined')
			category = this.props.match.params.id;

		var name = recipe.title.toLowerCase();
		if (name.indexOf(filter) === -1) {
			return;
		}

		if (category != 0 && category != recipe.category) {
			return;
		}

		return <div key = {recipe.id} 
					className = "Recipes-item"
					onClick = {() => this.props.history.push(`/RecipeInfo/${recipe.id}`)}>
					<Image src={SERVER_BASE_URL + recipe.image} responsive rounded/>
					<p>{recipe.title}</p>
				</div>
	}


  	render() {
  		var recipes = this.state.recipes.map(this.createRecipeRow.bind(this));
  		console.log(recipes.length);
  		if (recipes.length === 0 && this.state.recipes.length !== 0) {
  			return (
  				<div className="Recipes-container">
  					<Image src = {sorry_image}/>
  				</div>
  			)
  		}
  		else {
		    return (
		     	<div className="Recipes-container">
		     		<h2>Recipes</h2>
		     		<div className="Recipes-row">
		     			{recipes}
		     		</div>
		     	</div>
		    );
		}
  	}
}

export default Recipes;