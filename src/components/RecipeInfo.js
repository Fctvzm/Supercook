import React, { Component } from 'react';
import {Image, Row, Col, Button} from 'react-bootstrap';
import "./css/RecipeInfo.css";

const BASE_URL = 'http://localhost:8000/recipes';
const SERVER_BASE_URL = "http://localhost:8000";

var rand = 0;

class CommentSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments
		}
	}
	createCommentRow = (comment) => {
		return (
			<div key = {comment.id} className = "comment-item">
				<h4>Username</h4>
				<div className="comment-all">
					<div className="image">{comment.username}</div>
					<div className="comment-single">
						<p>{comment.text}</p>
					</div>
				</div>
			</div>
		)
	}

	handleSendButtonClick = () => {
		var coms = this.state.comments;
		rand++;
		if (this.inputText.value !== "") {
			coms.push({
				id: rand,
				username: 'Assem',
				text: this.inputText.value
			});
		}
		this.setState({
			comments: coms
		})
		
		const data = {
			'recipe': this.props.recipeId,
			'user': 2,
			'text': this.inputText.value
		}

		fetch(`${BASE_URL}/add_review/`, {
			'method': 'POST',
			'body': JSON.stringify(data)
		})
		.then(response => response.json())
		.then(response => console.log(response));
	}

	render() {
		var comments = this.state.comments.map((com) => this.createCommentRow(com));
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
	constructor(props) {
		super(props);
		this.state = {
			recipe: {},
			ingredients: [],
			instructions: [], 
			comments: []
		}
	}

	componentDidMount() {
		fetch(`${BASE_URL}/${this.props.match.params.id}`)
		.then(data => data.json())
		.then((data) => {
			this.setState({
				recipe: data,
				ingredients: data.lists,
				instructions: data.instructions,
				comments: data.reviews
			})
		})
	}

	createIngrRow = (ingredient) => (
		<Row className="ingrRow">
			<Col xs = {4} md = {3}>{ingredient.amount}  {ingredient.unit}</Col>
			<Col xs = {8} md = {9}>{ingredient.name}</Col>
		</Row>
	)

	createStepRow = (step) => (
		<div className="stepRow">
			<h4>Step {step.order}</h4>
			<Image className="stepImg" src = {SERVER_BASE_URL + step.image} rounded responsive/>
			<div className="stepText">{step.text}</div>
		</div>
	)

  	render() {
  		var ingredients = this.state.ingredients.map(this.createIngrRow);
  		var steps = this.state.instructions.map(this.createStepRow);

	    return (
	    <Row className = "RecipeInfo-container">
	     	<Row>
		     	<Col md = {12}>
		     		<Image className = "RecipeInfo-img" src = {SERVER_BASE_URL + this.state.recipe.image} rounded responsive/>
			     	<hr className="line"></hr>
		     	</Col>
		    </Row>
		    <Row>
		     	<Col md = {8} className="RecipeInfo-left">
		     		<div className="RecipeInfo-name">
			     		<h2>{this.state.recipe.title}</h2>
			     		<hr className = "dotted"></hr>
			     	</div>
			     	<div className="RecipeInfo-difficulty">
				     	<h3>Difficulty:</h3>
			     		<p>{this.state.recipe.difficulty}</p>
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
		     		<CommentSection recipeId = {this.state.recipe.id} comments = {this.state.comments}/>
		     	</Col>
		     	<Col md = {4} className="RecipeInfo-right">
		     	</Col>
	     	</Row>
	     </Row>
    );
  }
}

export default RecipeInfo;