var addingReducer = (state=false,action) => {
	switch (action.type)
	{
		case 'TOGGLE_ADDING':
			return !state
			break
		default:
			return state
	}
}

export default addingReducer;