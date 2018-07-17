import React, { Component,Fragment } 		from "react"
import {render}					from "react-dom"
import Note					from "Note"
import NoteForm					from "NoteForm"
import {connect}				from "react-redux"

class List extends Component
{		
	render(){
		return (
			<Fragment>
				<NoteForm/><br/>
				{this.props.mang.map((e,i)=><Note key={i} index={i}>{e}</Note>)}
			</Fragment>
		)
	}
}

export default connect((state)=>{return{mang:state.mang}})(List);
