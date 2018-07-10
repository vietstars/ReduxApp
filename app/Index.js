import React, { Component } 	from "react"
import {render}					from "react-dom"
import Title					from "./components/Title"

class Index extends Component
{
	render(){
		return (<Title />)
	}
}

render(
	<Index />,
	document.getElementById('root')
)

export default Index;