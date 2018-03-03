import React, { Component } from 'react';
import './css/SearchResult.css'
import {Button} from 'react-bootstrap';

import Recipes from './Recipes'

class SearchResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: this.props.match.params.filter
		}
	}

	handleOnInputChange = (e) => {
		this.setState({
			filter: e.target.value
		})
	} 

	render() {
		console.log(this.state.filter);
		return (
			<div className="SearchResult-container">
				<h2 className="title">Search Result</h2>
				<div className="SearchResult-form">
					<input type = "text" 
						value = {this.state.filter}
						placeholder = "Search for ..."
						onChange = {(e) => this.handleOnInputChange(e)}/>
					<Button bsStyle="success">Search</Button>
				</div>
				<Recipes filter = {this.state.filter}
					history = {this.props.history}/>
			</div>
		);
	}
}
export default SearchResult;