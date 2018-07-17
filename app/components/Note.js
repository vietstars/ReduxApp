import React, { Component } 			from "react"
import {render}					from "react-dom"
import {connect}				from "react-redux"
import {delItem}				from "action"

class Note extends Component
{
	removeNote(){
		let {index,dispatch} = this.props
		dispatch(delItem(index))
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

export default connect()(Note);
