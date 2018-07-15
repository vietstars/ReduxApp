import React, { Component } 	from "react"
import {render}					from "react-dom"

class Note extends Component
{
	constructor(props){
		super(props)
	}
	removeNote(){
		let {index,handleRmove} = this.props
		handleRmove(index)
	}
	render(){
		return (
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.removeNote.bind(this)}><i className="fa fa-trash" /> Delete</button>
			</div>
		)
	}
}

export default Note;