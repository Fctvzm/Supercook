import React, { Component } from 'react';
import {Image, Carousel} from 'react-bootstrap';
import {Link,  withRouter} from "react-router-dom";

import "./css/Home.css";

import special_image from "./css/images/Special_image.jpg";
import rec1 from "./css/images/LR_1.jpg";
import rec2 from "./css/images/LR_2.jpg";
import rec3 from "./css/images/LR_3.jpg";
import rec4 from "./css/images/LR_4.jpg";
import rec5 from "./css/images/LR_5.jpg";

import sr1 from "./css/images/SR_1.jpg";
import sr2 from "./css/images/SR_2.jpg";
import sr3 from "./css/images/SR_3.jpg";
import sr4 from "./css/images/SR_4.jpg";


var LatestRecipeArray = [
	{
		id: 1,
		image: rec1,
		text: 'Risotto with Amarone and Caramelized Radicchio'
	},
	{
		id: 3,
		image: rec2,
		text: 'Truffled Toast with Radicchio and Egg'
	},
	{
		id: 4,
		image: rec3,
		text: 'Chinese Five-Spice Steak with Oranges and Sesame Broccolini'
	},
	{
		id: 5,
		image: rec4,
		text: 'Slow-Cooked Pork with Chickpeas'
	},
	{
		id: 6,
		image: rec5,
		text: 'Sweet Potato Rice Crispies'
	}
 ];

 var SuggestRecipeArray = [
 	{
 		id:2,
 		image: sr1,
 		text: 'Sheet Pan Sesame Chicken and Vegetables'
 	},
 	{
 		id:7,
 		image: sr2,
 		text: 'Chocolate-Butterscotch Icebox Cake'
 	},
 	{
 		id:8,
 		image: sr3,
 		text: 'Walnut cake'
 	},
 	{
 		id:9,
 		image: sr4,
 		text: 'Chicken Tikka Massala'
 	}
 ];



class SearchInv extends Component {

 	handleKeyPress = (e) => {
	    if (e.key === 'Enter') {
	      this.props.onSubmit(this.inputText.value);
	    }
  	}

 	render() {
 		return (
 			<div className="Search-invisible">
				<form>
					<button onClick={this.props.onClick}>Close</button>
					<div className="up">
						<div class="inner-addon left-addon">
							<input className = "Search-input" 
								type = "text" 
								placeholder = "Find a Recipe"
								ref={ref => { this.inputText = ref; }}
								onKeyPress={this.handleKeyPress}/>
						<i class="glyphicon glyphicon-search"></i>
						</div>
					</div>
					<hr></hr>
				</form>
			</div>
 		);
 	}
}
	
		
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showResults: false
		}
	}

	handleOnInputClick = () => (
		this.setState({showResults: true})
	)

	handleOnCloseButtonClick = () => (
		this.setState({showResults: false})
	)

	handleOnSearchSubmit = (search) => (
		this.props.history.push(`/SearchResult/${search}`)
	) 

	render() {
		return (
			<div className = "Search-back">
				<h2>Find a recipe</h2>
				<div>
					<div class="inner-addon left-addon">
						<input  value = '' className = "Search-input" type = "text" onClick={this.handleOnInputClick}/>
						<i class="glyphicon glyphicon-search"></i>
					</div>
				</div>
				{this.state.showResults ? <SearchInv 
					onSubmit = {this.handleOnSearchSubmit}
					onClick={this.handleOnCloseButtonClick} /> : null }
			</div>
		);
	}
}

class Special extends Component {
	render() {
		return (
			<div className = "Special-container">
				<hr></hr>
				<h2>Today's Special</h2>
				<Link to = {`/RecipeInfo/${0}`}>
					<Image className = "Special-image" src={special_image} rounded responsive/> 
				</Link>
				<p>Your Complete Guide to Pairing Pasta Shapes with Sauses</p>
			</div>
		);
	}
}

class LatestRecipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: LatestRecipeArray,
		}
	}

	createRecipe = (recipe) => (
		<div key = {recipe.id}
			onClick = {() => this.props.history.push(`/RecipeInfo/${recipe.id}`)}
			className = 'LatestRecipe-single'>
			<Image src = {recipe.image} circle/>
			<p>{recipe.text}</p>
		</div>
	)


	render() {
		var recipes = this.state.recipes.map(this.createRecipe);
		return (
			<div className = "LatestRecipe-container">
				<header>
					<hr></hr>
					<h2>Our Newest Recipes</h2>
					<hr></hr>
				</header>
				<div className="LatestRecipe-section">
					{recipes}
				</div>
			</div>
		);
	}
}

class Suggestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: SuggestRecipeArray,
		}
	}

	createRecipe = (recipe) => (
		<Carousel.Item className="Suggestion-item" 
			key = {recipe.id}
			onClick = {() => this.props.history.push(`/RecipeInfo/${recipe.id}`)}>
    		<img className = "Suggestion-img" src={recipe.image} alt="Suggestion"/>
    		<Carousel.Caption>
      			<p>{recipe.text}</p>
    		</Carousel.Caption>
  		</Carousel.Item>
	)

	render() {
		var recipes = this.state.recipe.map(this.createRecipe);
		return(
			<div className="Suggestion-container">
				<hr></hr>
				<h2>Get Inspired</h2>
				<Carousel className="Carousel">
					{recipes}
				</Carousel>
				<p>Suggestion Recipes that You May Like</p>
			</div>
		);
	}
}

class Home extends Component {
  	render() {
    	return (
    		<div>
    			<Search history = {this.props.history}/>
    			<Special/>
    			<LatestRecipe history={this.props.history}/>
    			<Suggestion history={this.props.history}/>
    		</div>
   	);
  	}
}

export default  withRouter(Home);