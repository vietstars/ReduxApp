var redux = require('redux');
var defaultState = {
	mang: ['android','ios','node'],
	isAdding : false
}
var reducer = (state=defaultState, action) => {
	switch (action.type)
	{
		case 'TOGGLE_ADDING':
			return {...state, isAdding: !state.isAdding}
			break
		case 'ADD_ITEM':
			return {...state, mang:[...state.mang, action.item]}
			break
		case 'DEL_ITEM':
			return {...state, mang: state.mang.filter((e,i)=>i!==action.index)}
			break
		default:
			return state
	}
}
var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension?window.devToolsExtension(): f => f
))
store.subscribe(()=>{
	let str = store.getState()
	document.getElementById('show-json').innerHTML = JSON.stringify(str)
})
store.dispatch({
	type: 'TOGGLE_ADDING'
})
store.dispatch({
	type: 'ADD_ITEM',
	item:'react'
})
store.dispatch({
	type: 'DEL_ITEM',
	index:2
})
