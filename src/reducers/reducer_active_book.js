// application state formed by reducers
// state argument is not app state, only state 
// this reducer is responsible for 
	// if its undefined set state to null 
export default function(state = null, action){
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state 
}