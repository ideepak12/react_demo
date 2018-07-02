import React from 'react';

const person = (props) => {
	return (
		<div>
			<p> This is {props.name}, and I am {Math.floor(Math.random() * 25)} years old. </p>
			{/* To show opening & closing tag content. */}
			<p> {props.children} </p>
		</div>
	)
}

export default person;