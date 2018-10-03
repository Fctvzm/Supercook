import React, { Component } from 'react';
import {Image} from 'react-bootstrap'
import './css/Recipes.css'
const SERVER_BASE_URL = "http://localhost:8000";
const BASE_URL = 'http://localhost:8000/categories/';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		fetch(`${BASE_URL}`)
		.then(data => data.json())
		.then((data) => {
			this.setState({
				categories: data
			})
		})
		console.log(this.state.recipes);
	}

	createCategoryRow(category) {
		return <div key = {category.id} 
					className = "Recipes-item"
					onClick = {() => this.props.history.push(`/Recipes/${category.id}`)}>
					<Image src={SERVER_BASE_URL + category.image} responsive rounded/>
					<p className="category-label">{category.name}</p>
				</div>
	}

	render() {
		var categories = this.state.categories.map(this.createCategoryRow.bind(this));
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