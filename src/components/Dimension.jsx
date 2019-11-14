import React from 'react';

const Dimension = props => {
console.log('Dimension.js', props)

	return ( 
		<div className='dimension'>
			<h5>last dimension:</h5>
			<p>{props.name}</p>
		</div>
	);
}

export default Dimension;
