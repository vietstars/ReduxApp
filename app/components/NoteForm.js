import React, { Component,Fragment } 		from "react"
import {render}					from "react-dom"
import {connect}				from "react-redux"
import	{toggle, addItem}		from "action"

class NoteForm extends Component
{
	toggleForm(){
		let {dispatch} = this.props
		dispatch(toggle())
	}
	getAdd(e){
		//e.preventDefault()//same jquery
		let {dispatch} = this.props
		dispatch(addItem(this.refs.txt.value))
		dispatch(toggle())
	}
	render(){
		let _form
		let {adding} = this.props
		if(adding){
			_form = <Fragment><input type="text" ref="txt" placeholder="Enter note"/> <button onClick={this.getAdd.bind(this)}><i className="fa fa-send" /> Submit</button></Fragment>
		}else{
			_form = <Fragment><button onClick={this.toggleForm.bind(this)}><i className="fa fa-plus" /> Add</button></Fragment>
		}
		return _form
	}
}

export default connect((state)=>{return{adding:state.adding}})(NoteForm);
