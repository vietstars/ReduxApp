var mangReducer = (state=['android','ios','node'],action) => {
	switch (action.type)
	{
		case 'ADD_ITEM':
			return [...state, action.item]
			break
		case 'DEL_ITEM':
			return state.filter((e,i) => i!==action.index)
			break
		default:
			return state
	}
}

export default mangReducer;