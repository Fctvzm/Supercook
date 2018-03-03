import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image, FormControl, Button, Form, Row, Col} from "react-bootstrap";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import "./css/App.css";

import Home from './Home';
import Categories from './Categories';
import Recipes from './Recipes';
import RecipeInfo from "./RecipeInfo";
import SearchResult from './SearchResult';


import logo from './css/icons/logo.png';


const tStyle = {
  textDecoration: 'none'
};

class FooterInv extends Component {

  handleButtonClick = () => {
    this.props.onClick("Guest");
  }

  render() {
    return(
      <Row className = "Footer">
        <Col md={12} className = "TopFooter">
          <Button bsStyle ="warning" onClick = {this.handleButtonClick}>Log out</Button>
        </Col>
        <Col md = {12} className = "BottomFooter"></Col>
      </Row>
    )
  }
}

class Footer extends Component {

  handleButtonClick = () => {
    this.props.onClick(this.inputText.value);
    this.inputText.value = "";
  }

  render() {
    return(
      <Row className = "Footer">
        <Col md={12} className = "TopFooter">
          <h2>Get Our Newsletter</h2>
          <p>Get recipes, tips and SuperCook special offers delivered straight to you.</p>
          <Form inline>
            <FormControl
              className = "FormInput"
              type = "text"
              placeholder = "Add Your Name"
              inputRef={ref => { this.inputText = ref; }}
            />{' '}
            <Button bsStyle="warning" onClick = {this.handleButtonClick}>Sign up</Button>
          </Form>
        </Col>
        <Col md = {12} className = "BottomFooter"></Col>
      </Row>
    );
  }
}

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      username: 'Guest',
      hide: false
    }
  }

  handleRegButtonClick = (name) => {
    if(name !== "") {
      this.setState({
        username: name,
        hide: !this.state.hide
      })
    }
  }

  render() {

    return (
      <Router>
        <div>
          <Navbar fixedTop className = "App-navbar">
            <Navbar.Header>
              <Link to = "/" style={tStyle}>
                <Image className = "App-logo" src={logo} alt="logo"/>
              </Link>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav className="App-nav">
                <NavItem>
                  <Link to = {`/Recipes/${0}`} style={tStyle}>Recipes</Link>
                </NavItem>
                <NavItem>
                  <Link to = "/Categories" style={tStyle}>Categories</Link>
                </NavItem>
              </Nav>
              <Nav pullRight className="App-left-nav">
                <NavItem>
                  Welcome, {this.state.username}!
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path = "/" component={Home}/>
          <Route path = {"/Recipes/:id"} component = {Recipes}/>
          <Route path = "/Categories" component = {Categories}/>
          <Route path = {'/RecipeInfo/:id'} component = {RecipeInfo}/>
          <Route path = {'/SearchResult/:filter'} component = {SearchResult}/>
          {this.state.hide ? <FooterInv onClick = {this.handleRegButtonClick}/> : <Footer onClick = {this.handleRegButtonClick}/>}
        </div>
      </Router>
    );
  }
}

export default App;
