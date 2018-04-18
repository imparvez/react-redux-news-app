import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNews } from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			searchTerm: ''
		}

		this.onInputChange = this.onInputChange.bind(this); // binding the `this` context
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ searchTerm: event.target.value })
	}

	onFormSubmit(event){
		event.preventDefault();

		// let's fetch news api
		// this.props.fetchNews(this.state.searchTerm).payload.then((result) => console.log(result));
		this.props.fetchNews(this.state.searchTerm);
		this.setState({ searchTerm: ''})
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 
					placeholder='enter your query' 
					className='form-control'
					value={this.state.searchTerm} 
					onChange={this.onInputChange}
				/>
				<span className='input-group-btn'>
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

// hooking fetchNews action creator with your SearchBar component.
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchNews }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);

// DOCUMENTATION

/*
<span className='inout-group-btn'><button type="submit" className="btn btn-secondary">Submit</button></span>
Changing above to Controlled field => it is a form element where the value of the input is set by the state of the component and not by the other way around
 */

/*
this => which is the instance of SearchBar
.onInputChange => has a function called onInputChange
.bind(this) => bind that function to `this` of SearchBar
*/

/*
onChange={this.onInputChange} => a callback
onInputChange(event) {
	this.setState({ searchTerm: event.target.value }) => // which make use of this.setState to update it should be 
}
this.onInputChange = this.onInputChange.bind(this); => // bind in the constructor
*/