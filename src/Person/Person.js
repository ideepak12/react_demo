import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}> This is {props.name}, and I am {props.age} years old. </p>
			{/* To show opening & closing tag content. */}
			<p> {props.children} </p>
		</div>
	)
}

export default person;