import React, { Component } from 'react';
import {Image, Row, Col, Button} from 'react-bootstrap';
import "./css/RecipeInfo.css";

import special_image from "./css/images/Special_image.jpg";
import LRB_1 from "./css/images/LRB_1.jpg";
import SR_1 from "./css/images/SR_1.jpg";

import step_1 from "./css/images/step_1.jpg";
import step_2 from "./css/images/step_2.jpg";
import step_3 from "./css/images/step_3.jpg";
import step_4 from "./css/images/step_4.jpg";

import st_1 from "./css/images/st_1.jpg";
import st_2 from "./css/images/st_2.jpg";
import st_3 from "./css/images/st_3.jpg";
import st_4 from "./css/images/st_4.jpg";

import s_1 from "./css/images/s_1.jpg";
import s_2 from "./css/images/s_2.jpg";
import s_3 from "./css/images/s_3.jpg";
import s_4 from "./css/images/s_4.jpg";

var Recipes = [
	{
		image: special_image,
		name: 'Pulled BBQ jackfruit sandwich',
		difficulty: 'Easy',
		ingredients: [
			{
				amount: '280 g',
				name: 'jackfruit (canned, drained)'
			}, 
			{
				amount: '100 g',
				name: 'red cabbage'
			},
			{
				amount: '100 g',
				name: 'white cabbage'
			},
			{
				amount: '1',
				name: 'carrot'
			},
			{
				amount: '1',
				name: 'olive oil'
			},
			{
				amount: '2 tbsp',
				name: 'cider vinegar'
			},
			{
				amount: '1 tbsp',
				name: 'maple syrup'
			},
			{
				amount: '250 ml',
				name: 'barbecue sauce (divided)'
			},
			{
				amount: '80 ml',
				name: 'water'
			},
			{
				amount: '2',
				name: 'burger buns'
			},
		],
		steps: [
			{
				id: 1,
				image: step_1,
				text: 'Finely slice red cabbage and white cabbage. Peel and roughly grate carrot. Transfer cut vegetables to a bowl and add olive oil, cider vinegar, and maple syrup. Toss to coat and season with salt and pepper to taste. Set coleslaw aside.'
			},
			{
				id: 2,
				image: step_2,
				text: 'Peel and finely slice onion. Rinse jackfruit under cold water. Heat vegetable oil in a frying pan over medium heat and fry sliced onion for approx. 2 – 3 min. Add jackfruit, brown sugar, garlic powder, smoked paprika powder, and cayenne pepper and toss to coat. Season with salt and pepper and fry for approx. 5 min. until the jackfruit is browned.'
			},
			{
				id: 3,
				image: step_3,
				text: 'Add barbecue sauce and water, then cover the frying pan with a lid and keep frying for approx. 10 – 15 min. Remove the lid and pull apart the jackfruit using two forks. Keep frying without lid for approx. 2 – 3 min. on medium-high heat until the jackfruit is nicely roasted.'
			},
			{
				id: 4,
				image: step_4,
				text: 'Slice iceberg lettuce and set aside. Halve and toast burger buns and spread remaining barbecue sauce on each halved bun. Top buns with iceberg lettuce, pulled jackfruit, coleslaw, and cilantro. Enjoy!'
			},
		],
	},
	{
		image: LRB_1,
		name: 'Mapo tofu',
		difficulty: 'Easy',
		ingredients: [
			{
				amount: '350 g',
				name: 'silken tofu'
			}, 
			{
				amount: '50 g',
				name: 'ground pork'
			},
			{
				amount: '100 g',
				name: 'bean paste'
			},
			{
				amount: '1',
				name: 'fermented soy beans'
			},
			{
				amount: '1',
				name: 'green onion'
			},
			{
				amount: '2 tbsp',
				name: 'ginger'
			},
			{
				amount: '1 tbsp',
				name: 'garlic'
			},
			{
				amount: '250 ml',
				name: 'rice wine'
			},
			{
				amount: '80 ml',
				name: 'dark soy sauce'
			},
			{
				amount: '2',
				name: 'sugar'
			},
		],
		steps: [
			{
				id: 1,
				image: st_1,
				text: 'Finely slice red cabbage and white cabbage. Peel and roughly grate carrot. Transfer cut vegetables to a bowl and add olive oil, cider vinegar, and maple syrup. Toss to coat and season with salt and pepper to taste. Set coleslaw aside.'
			},
			{
				id: 2,
				image: st_2,
				text: 'Peel and finely slice onion. Rinse jackfruit under cold water. Heat vegetable oil in a frying pan over medium heat and fry sliced onion for approx. 2 – 3 min. Add jackfruit, brown sugar, garlic powder, smoked paprika powder, and cayenne pepper and toss to coat. Season with salt and pepper and fry for approx. 5 min. until the jackfruit is browned.'
			},
			{
				id: 3,
				image: st_3,
				text: 'Add barbecue sauce and water, then cover the frying pan with a lid and keep frying for approx. 10 – 15 min. Remove the lid and pull apart the jackfruit using two forks. Keep frying without lid for approx. 2 – 3 min. on medium-high heat until the jackfruit is nicely roasted.'
			},
			{
				id: 4,
				image: st_4,
				text: 'Slice iceberg lettuce and set aside. Halve and toast burger buns and spread remaining barbecue sauce on each halved bun. Top buns with iceberg lettuce, pulled jackfruit, coleslaw, and cilantro. Enjoy!'
			},
		],
	},
	{
		image: SR_1,
		name: 'Sheet pan sesame chicken and vegetables',
		difficulty: 'Easy',
		ingredients: [
			{
				amount: '280 g',
				name: 'chicken breasts (boneless, skinless)'
			}, 
			{
				amount: '100 g',
				name: 'ginger'
			},
			{
				amount: '100 g',
				name: 'garlic'
			},
			{
				amount: '1',
				name: 'chili'
			},
			{
				amount: '1',
				name: 'limes (juice)'
			},
			{
				amount: '2 tbsp',
				name: 'soy sauce'
			},
			{
				amount: '1 tbsp',
				name: 'honey'
			},
			{
				amount: '250 ml',
				name: 'carrots'
			},
			{
				amount: '80 ml',
				name: 'bell peppers'
			},
			{
				amount: '2',
				name: 'broccoli'
			},
		],
		steps: [
			{
				id: 1,
				image: s_1,
				text: 'Finely slice red cabbage and white cabbage. Peel and roughly grate carrot. Transfer cut vegetables to a bowl and add olive oil, cider vinegar, and maple syrup. Toss to coat and season with salt and pepper to taste. Set coleslaw aside.'
			},
			{
				id: 2,
				image: s_2,
				text: 'Peel and finely slice onion. Rinse jackfruit under cold water. Heat vegetable oil in a frying pan over medium heat and fry sliced onion for approx. 2 – 3 min. Add jackfruit, brown sugar, garlic powder, smoked paprika powder, and cayenne pepper and toss to coat. Season with salt and pepper and fry for approx. 5 min. until the jackfruit is browned.'
			},
			{
				id: 3,
				image: s_3,
				text: 'Add barbecue sauce and water, then cover the frying pan with a lid and keep frying for approx. 10 – 15 min. Remove the lid and pull apart the jackfruit using two forks. Keep frying without lid for approx. 2 – 3 min. on medium-high heat until the jackfruit is nicely roasted.'
			},
			{
				id: 4,
				image: s_4,
				text: 'Slice iceberg lettuce and set aside. Halve and toast burger buns and spread remaining barbecue sauce on each halved bun. Top buns with iceberg lettuce, pulled jackfruit, coleslaw, and cilantro. Enjoy!'
			},
		],
	}
];

var CommentsArray = [
	{
		recipe_id: 0,
		comments: [
			{
				id: 1,
				text: "This recipe was helpful for me"
			},
			{
				id: 2,
				text: "Staff is the best I have ever experienced at ANY fast food establishment. Restaurant is very clean and neat looking. Maybe the food seems to taste better because of these facts. A great place for a fast meal."
			}
		]
	}, 
	{
		recipe_id: 1,
		comments: [
			{
				id: 1,
				text: "I think this is a great option for someone who is working on becoming vegetarian. I struggle the most with vegetarian recipes so I thought about ordering the veggie one just get more vegetables in my diet."
			},
			{
				id: 2,
				text: "I and my sister cooked this meal yesterday and it was so good"
			}
		]
	}
];

var rand = 0;

class CommentSection extends Component {
	constructor(props) {
		super(props);
		const id = this.props.recipeId;
		var recipe_comments = CommentsArray.filter(function(c) {
			return (c.recipe_id == id);
		})

		var initComs = [];
		console.log(recipe_comments);
		if (recipe_comments.length !== 0){
			initComs = recipe_comments[0].comments;
		}
		rand = 0;
		this.state = {
			activeComments: initComs
		}
	}

	createCommentRow = (comment) => {
		return (
			<div key = {comment.id} className = "comment-item">
				<h4>Username</h4>
				<div className="comment-all">
					<div className="image">U</div>
					<div className="comment-single">
						<p>{comment.text}</p>
					</div>
				</div>
			</div>
		)
	}

	handleSendButtonClick = () => {
		var coms = this.state.activeComments;
		rand++;
		if (this.inputText.value !== "") {
			coms.push({
				id: rand,
				text: this.inputText.value
			});
		}
		this.setState({
			activeComments: coms
		})
		this.inputText.value = ""
	}

	render() {
		var comments = this.state.activeComments.map((com) => this.createCommentRow(com));
		return(
			<div className="CommentSection-container">
				<div className="comments">
	     			<textarea
	     				ref={ref => { this.inputText = ref; }} 
	     				placeholder = "Your commit..."></textarea>
	     			<Button bsStyle="success" onClick = {this.handleSendButtonClick}>Send</Button>
	     		</div>
	     		<div className='comments-output'>
	     			{comments}
	     		</div>
	     	</div>
		)
	}
}

class RecipeInfo extends Component {

	createIngrRow = (ingredient) => (
		<Row className="ingrRow">
			<Col xs = {4} md = {3}>{ingredient.amount}</Col>
			<Col xs = {8} md = {9}>{ingredient.name}</Col>
		</Row>
	)

	createStepRow = (step) => (
		<div className="stepRow">
			<h4>Step {step.id}</h4>
			<Image className="stepImg" src = {step.image} rounded responsive/>
			<div className="stepText">{step.text}</div>
		</div>
	)

  	render() {
	  	const {id} = this.props.match.params;
	  	var recipe = Recipes[id];
	  	var ingredients = recipe.ingredients.map(this.createIngrRow);
	  	var steps = recipe.steps.map(this.createStepRow);

	    return (
	     <Row className = "RecipeInfo-container">
	     	<Row>
		     	<Col md = {12}>
		     		<Image className = "RecipeInfo-img" src = {recipe.image} rounded responsive/>
			     	<hr className="line"></hr>
		     	</Col>
		    </Row>
		    <Row>
		     	<Col md = {8} className="RecipeInfo-left">
		     		<div className="RecipeInfo-name">
			     		<h2>{recipe.name}</h2>
			     		<hr className = "dotted"></hr>
			     	</div>
			     	<div className="RecipeInfo-difficulty">
				     	<h3>Difficulty:</h3>
			     		<p>{recipe.difficulty}</p>
			     		<hr className = "dotted"></hr>
			     	</div>
			     	<div className="RecipeInfo-ingredients">
		     			<h3>Ingredients</h3>
		     			<div className="RecipeInfo-ingrTable">
		     				{ingredients}
		     			</div>
		     			<hr className = "dotted"></hr>
		     		</div>
		     		<div className = 'RecipeInfo-steps'>
		     			{steps}
		     		</div>
		     		<CommentSection recipeId = {id}/>
		     	</Col>
		     	<Col md = {4} className="RecipeInfo-right">
		     	</Col>
	     	</Row>
	     </Row>
    );
  }
}

export default RecipeInfo;