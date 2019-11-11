import React, { Component } from 'react';
import styled from 'styled-components';

class Episode extends Component {

	Arrows = () => {
		let classes = 'fas fa-arrow-down';
		if (!this.props.arrow)
			classes += '-up';
		return classes;	
	}

	render(){
		
		return ( 
			<Colapsable>
				<div className='wrapper accordion'>
					last episode
					<span>
						<i className={this.Arrows()}></i>
					</span>
				</div>
				<div className='wrapper panel'>
					<h5>name</h5>
					<p>some name</p>
				</div>
				<div className='wrapper panel'>
					<h5>episode</h5>
					<p>some episode</p>
				</div>
				
			</Colapsable>
		);
	}

	
}
 
export default Episode;

const Colapsable = styled.div`
  background-color: var(--yellow);
	.accordion {
		background-color: #eee;
		color: #444;
		cursor: pointer;
		font-size: 15px;
		transition: 0.4s;    	
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
	}
	.panel {
		// padding: 0 18px;
		// display: none;
		background-color: #ccc;
		// overflow: hidden;
`