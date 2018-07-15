import React, { Component } 	from "react"
import {render}					from "react-dom"
import Note						from "./Note"
import NoteForm					from "./NoteForm"
const Fragment = React.Fragment;

class List extends Component
{
	constructor(props){
		super(props)
		this.state = {
			mang:["php","android","ios","nodejs"]
		}
	}	
	remove(index){
		let mangMoi = this.state.mang.filter((x,y)=> y!==index)
		this.setState({
			mang: mangMoi
		})
	}
	add(val){
		this.state.mang.push(val)
		this.setState(this.state.mang)
	}
	render(){
		return (
			<Fragment>
				<NoteForm handleAdd={this.add.bind(this)}/><br/>
				{this.state.mang.map((e,i)=><Note key={i} index={i} handleRmove={this.remove.bind(this)}>{e}</Note>)}
			</Fragment>
		)
	}
}

export default List;