import React from 'react';
import classes from './Person.css';

const person = (props) => {
	const rand = Math.random();
	if (rand > 0.8) {
		throw new Error( "Something is wrong!!!" );
	}

	return (
		<div className={classes.Person}>
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
