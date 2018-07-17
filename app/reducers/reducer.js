var redux = require('redux');
import mang 		from "./mang"
import adding 	from"./adding"

var reducer = redux.combineReducers({mang,adding})

export default reducer;