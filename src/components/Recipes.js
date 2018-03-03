import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import "./css/Recipes.css";

import special_image from "./css/images/Special_image.jpg";
import LRB_1 from "./css/images/LRB_1.jpg";
import SR_1 from "./css/images/SR_1.jpg";
import RP_1 from "./css/images/RP_1.jpg";
import RP_2 from "./css/images/RP_2.jpg";
import RP_3 from "./css/images/RP_3.jpg";
import RP_4 from "./css/images/RP_4.jpg";
import RP_5 from "./css/images/RP_5.jpg";
import sorry_image from "./css/images/sorry_image.svg";


var RecipesArray = [
	{
		id:0,
		image: special_image,
		name: 'Pulled BBQ jackfruit sandwich',
		category: 3
	},
	{
		id:1,
		image: LRB_1,
		name: 'Mapo tofu',
		category: 3
	},
	{
		id:2,
		image: SR_1,
		name: 'Sheet pan sesame chicken and vegetables',
		category: 2
	},
	{
		id:3,
		image: RP_1,
		name: 'Warming sweet potato and bean chili',
		category: 3
	},
	{
		id:4,
		image: RP_2,
		name: 'Savoy cabbage quiche',
		category: 4
	},
	{
		id:5,
		image: RP_3,
		name: 'Shrimp and sausage gumbo',
		category: 5
	},
	{
		id:6,
		image: RP_4,
		name: 'Paleo chocolate muffins',
		category: 1
	},
	{
		id:7,
		image: RP_5,
		name: 'Vegetable stir-fry with ginger-lime sauce',
		category: 3
	}
];

var count = 0;
const size = RecipesArray.length;

class Recipes extends Component {
	constructor(props) {
		super(props);
		count = 0;
	}

	createRecipeRow(recipe) {
		var filter = "";
		var category = 0;
		console.log(category);

		if (typeof this.props.filter !== 'undefined') 
			filter = this.props.filter;

		if(typeof this.props.match !== 'undefined')
			category = this.props.match.params.id;

		var name = recipe.name.toLowerCase();
		if (name.indexOf(filter) === -1) {
			count++;
			return;
		}

		if (category != 0 && category != recipe.category) {
			return;
		}

		return <div key = {recipe.id} 
					className = "Recipes-item"
					onClick = {() => this.props.history.push(`/RecipeInfo/${recipe.id}`)}>
					<Image src={recipe.image} responsive rounded/>
					<p>{recipe.name}</p>
				</div>
	}


  	render() {
  		var recipes = RecipesArray.map(this.createRecipeRow.bind(this));
  		if (count === size) {
  			count = 0;
  			return (
  				<div className="Recipes-container">
  					<Image src = {sorry_image}/>
  				</div>
  			)
  		}
	    count = 0;
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

export default Recipes;