import React, { Component } from 'react';
import Title from './Title';
import { Consumer } from '../ContextAPI';
import Card from './Card';

class CardList extends Component {
	
	render() { 
		return ( 
			<React.Fragment>
				<div>
					<div>
						<Title title='the rick and morty api' subTitle='super nice'/>
						<div>
							<Consumer>
								{value => {
									const values = Object.values(value)
									console.log(value)
									return <Card characters={values[0]} />
	
								}}
							</Consumer>
						</div>
					</div>
				</div>
			</React.Fragment>
			);
	}
}
 
export default CardList;