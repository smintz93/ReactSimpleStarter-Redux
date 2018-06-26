
export function selectBook(book) {
	// select book is an action create and needs to return an action 
	// an object with a type property.
	return {
		type: 'BOOK_SELECTED',
		// info about the action being taken (payload)
		payload: book
	};
}