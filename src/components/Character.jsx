import React, { Component } from 'react';
import styled from 'styled-components';

class Character extends Component {
	render() {
		const {
			id,
			img,
			name,
			status,
			location,
			episode,
			species,
			gender,
			origin
		} = this.props;

		return (
			<Cards>
				<div>
					<img className='image' src={img} alt={id} />
				</div>
				<div className='wrapper'>
					<h2 className='name'>{name}</h2>
					<div>
						<div className='info border'>
							<p className='heading'>status:</p>
							<p className='response'>{status}</p>
						</div>
						<div className='info border'>
							<p className='heading'>species:</p>
							<p className='response'>{species}</p>
						</div>
						<div className='info border'>
							<p className='heading'>gender:</p>
							<p className='response'>{gender}</p>
						</div>
						<div className='info border'>
							<p className='heading'>origin:</p>
							<p className='response'>{origin}</p>
						</div>
					</div>
					<div className='dimension info border'>
						<p className='heading'>last dimension:</p>
						<p className='response'>{location.name}</p>
					</div>
					<div className='info border'>
						<p className='heading'>last episode:</p>
					</div>
					<div className='episode'>
						<div className='info'>
							<p className='heading'>name:</p>
							<p className='response'>{episode.name}</p>
						</div>
						<div className='info border'>
							<p className='heading'>number:</p>
							<p className='response'>{episode.episode}</p>
						</div>
					</div>
				</div>
			</Cards>
		);
	}
}

export default Character;

const Cards = styled.div`
	background-color: var(--gray);
	width: fit-content;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 10px 10px 4px -6px rgba(0, 214, 158, 0.42);
	display: flex;
	flex-direction: column;
`;
