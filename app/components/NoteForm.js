import React, { Component,Fragment } 		from "react"
import {render}					from "react-dom"
import {connect}				from "react-redux"

class NoteForm extends Component
{
	toggleForm(){
		let {dispatch} = this.props
		dispatch({type:'TOGGLE_ADDING'})
	}
	getAdd(e){
		//e.preventDefault()//same jquery
		let {dispatch} = this.props
		dispatch({type:'ADD_ITEM',item:this.refs.txt.value})
		dispatch({type:'TOGGLE_ADDING'})
	}
	render(){
		let _form
		let {showForm} = this.props
		if(showForm){
			_form = <Fragment><input type="text" ref="txt" placeholder="Enter note"/> <button onClick={this.getAdd.bind(this)}><i className="fa fa-send" /> Submit</button></Fragment>
		}else{
			_form = <Fragment><button onClick={this.toggleForm.bind(this)}><i className="fa fa-plus" /> Add</button></Fragment>
		}
		return _form
	}
}

export default connect((state)=>{return{showForm:state.showForm}})(NoteForm);
