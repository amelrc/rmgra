import React, { Component } from 'react';
import styled from 'styled-components';

class Character extends Component {


	render() { 
		const { id, img, name, status, location } = this.props

		return (
			<Cards>
				<ImageContainer>
					<img src={img} alt={id}/>
					<h2 className='name'>{name}</h2>
				</ImageContainer>
				<div >
					<div className='info'>
						<p>status:</p>
						<p>{status}</p>
					</div>
				</div>
				<div className='dimension info'>
					<p>last dimension:</p>
					<p>{location.name}</p>
				</div>
			</Cards>	
		);
	}
}
 
export default Character;


const Cards = styled.div`
background-color: var(--lightBrown);
width: fit-content;
margin: 10px;
	.info {
		display: flex;
		justify-content: space-between;
		margin: 0 10px;
	}
	.col-1 {
		grid-column-start: 1;
		margin: 0;
	}
	.col-2 {
		margin: 0;
	}

`
const ImageContainer = styled.div`
position: relative;
height: 300px;
justify-content: center;
display: flex;
    .name {
        position: absolute;
		bottom: 3px;
		background-color: var(--gray);
		padding: 0 10px;
		color: white;
		text-align: center;
    }
`