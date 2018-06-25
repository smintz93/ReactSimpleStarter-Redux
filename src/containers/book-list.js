// container is a component that has direct access to state produced by redux

import React, { Component } from 'react';
// glue between react and redux. separate libraries - no connection 
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
// so the action flows through the reducers 
import { bindActionCreators } from 'redux';

class BookList extends Component {
	
	renderList = () => {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStatetoProps(state) {
	// whatever is returned will show up as props
	// inside of BookList
	return {
		// connection between redux and component 
		books: state.books
	};
}

// connect takes function and component and produces a container which is aware of state in redux
// map state to props returns object - object is avail in this.props
export default connect(mapStatetoProps)(BookList);