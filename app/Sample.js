var redux = require('redux');
// var defaultState = {
// 	mang: ['android','ios','node'],
// 	isAdding : false
// }

// var reducer = (state=defaultState, action) => {
// 	switch (action.type)
// 	{
// 		case 'TOGGLE_ADDING':
// 			return {...state, isAdding: !state.isAdding}
// 			break
// 		case 'ADD_ITEM':
// 			return {...state, mang:[...state.mang, action.item]}
// 			break
// 		case 'DEL_ITEM':
// 			return {...state, mang: state.mang.filter((e,i)=>i!==action.index)}
// 			break
// 		default:
// 			return state
// 	}
// }

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

var reducer = redux.combineReducers({
	mang: mangReducer,
	showForm: addingReducer
})

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension?window.devToolsExtension(): f => f
))
// store.subscribe(()=>{
// 	let str = store.getState()
// 	document.getElementById('show-json').innerHTML = JSON.stringify(str)
// })
// store.dispatch({
// 	type: 'TOGGLE_ADDING'
// })
// store.dispatch({
// 	type: 'ADD_ITEM',
// 	item:'react'
// })
// store.dispatch({
// 	type: 'DEL_ITEM',
// 	index:2
// })

export default store;