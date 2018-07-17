function addItem(item) {
	return {type: 'ADD_ITEM',item}
}
function delItem(index) {
	return {type: 'DEL_ITEM',index}
}
function toggle() {
	return {type: 'TOGGLE_ADDING'}
}

module.exports = {addItem, delItem, toggle}