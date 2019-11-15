import React from 'react';

const Title = ({title,subTitle}) => {
	return ( 
		<div className='title'>
			<h2>{title}</h2>
			<h3>{subTitle}</h3>
		</div>
	);
}
 
export default Title