import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Episode from './Episode';

const Card = props => {

	return ( 
		<React.Fragment>
			<Cards>
				<Header />
				<div className='info'>
					<h5 className='col-1'>status</h5>
					<p className='col-2'>alive</p>
				</div>
				<Episode arrow={true} />
			</Cards>
		</React.Fragment>
	);
}
 
export default Card;

const Cards = styled.div`
background-color:blue;
width: fit-content;
	.info {
		display: flex;
    	justify-content: space-between;
	}
	.col-1 {
		grid-column-start: 1;
		margin: 0;
	}
	.col-2 {
		margin: 0;
	}

`