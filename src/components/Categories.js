import React, { Component } from 'react';
import {Image} from 'react-bootstrap'
import './css/Recipes.css'

import cat_1 from "./css/images/cat_1.jpg"
import cat_2 from "./css/images/cat_2.jpg"
import cat_3 from "./css/images/cat_3.jpg"
import cat_4 from "./css/images/cat_4.jpg"
import cat_5 from "./css/images/cat_5.jpg"


var CategoriesArray = [
	{
		id: 1,
		name: 'Dessert',
		image: cat_3
	},
	{
		id: 2,
		name: 'Meat',
		image: cat_5
	},
	{
		id: 3,
		name: 'Vegetarian',
		image: cat_4
	},
	{
		id: 4,
		name: 'Sea food',
		image: cat_2
	},
	{
		id: 5,
		name: 'Soup',
		image: cat_1
	},
];

class Categories extends Component {

	createCategoryRow(category) {
		return <div key = {category.id} 
					className = "Recipes-item"
					onClick = {() => this.props.history.push(`/Recipes/${category.id}`)}>
					<Image src={category.image} responsive rounded/>
					<p className="category-label">{category.name}</p>
				</div>
	}

	render() {
		var categories = CategoriesArray.map(this.createCategoryRow.bind(this));
		return (
		 	<div className="Recipes-container">
	     		<h2>Categories</h2>
	     		<div className="Recipes-row">
	     			{categories}
	     		</div>
	     	</div>
		);
	}
}

export default Categories;