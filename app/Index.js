import React, { Component } 	from "react"
import {render}					from "react-dom"
import List						from "./components/List"

class Index extends Component
{
	constructor(props){
		super(props)
		this.state={
			addNote:''
		}

	}
	// componentDidMount(){
	// 	$.post('smcta.vn',{id:1},()=>{},'json').fail(()=>{console.log('fails')})
	// }
	render(){
		return <List/>
	}
}

render(
	<Index />,
	document.getElementById('root')
)

require ('./Sample.js')