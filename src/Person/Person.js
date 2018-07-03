import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}> This is {props.name}, and I am {props.age} years old. </p>
			{/* To show opening & closing tag content. */}
			<p> {props.children} </p>
			<input
				type="text"
				onChange={props.change}
				value={props.name}
			/>
		</div>
	)
}

export default person;