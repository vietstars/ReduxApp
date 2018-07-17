import React, { Component } 			from "react"
import {render}					from "react-dom"
import List					from "List"
import {Provider}				from "react-redux"
import store					from "store"

class Index extends Component
{
	// componentDidMount(){
	// 	$.post('smcta.vn',{id:1},()=>{},'json').fail(()=>{console.log('fails')})
	// }
	render(){
		return <Provider store={store}><List/></Provider>
	}
}

render(
	<Index />,
	document.getElementById('root')
)
