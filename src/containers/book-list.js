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

function mapStateToProps(state) {
	// whatever is returned will show up as props
	// inside of BookList
	return {
		// connection between redux and component 
		books: state.books
	};
}

// Anything returned from this function will end up as 
// props on the booklist container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called the result should be passed
	//  to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// connect takes function and component and produces a container which is aware of state in redux
// map state to props returns object - object is avail in this.props
// promote book list from a component to a container - it neeeds to know
// about this new dismatch method, selectBook. make it avail as Props

export default connect(mapStateToProps, mapDispatchToProps)(BookList);