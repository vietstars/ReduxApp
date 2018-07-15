import React, { Component } 	from "react"
import {render}					from "react-dom"

class NoteForm extends Component
{
	constructor(props){
		super(props)
		this.state = {
			addNote: '',
			showForm: false
		}
	}
	toggleForm(){
		this.setState({
			showForm: !this.state.showForm
		})
	}
	getAdd(e){
		e.preventDefault()
		let {handleAdd} = this.props
		handleAdd(this.refs.txt.value)
		this.refs.txt.value=''
		this.setState({
			showForm: false
		})
	}
	render(){
		let _form = <div><button onClick={this.toggleForm.bind(this)}><i className="fa fa-plus" /> Add</button></div>
		if(this.state.showForm){
			_form = <div><input type="text" ref="txt" placeholder="Enter note"/> <button onClick={this.getAdd.bind(this)}><i className="fa fa-send" /> Submit</button></div>
		}
		return _form
	}
}

export default NoteForm;