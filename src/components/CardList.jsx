import React, { Component } from 'react';
import { getApi } from '../Api'
import Title from './Title.jsx';
import { Consumer } from '../ContextAPI';
import Card from './Card';

class CardList extends Component {
	state = { 
		cards: getApi()
	}

	render() { 
		return ( 
			<React.Fragment>
				<div>
					<div>
						<Title title='the rick and morty api' subTitle='a challenge by gracious'/>
						<div>
							<Consumer>
								{value=>{
									console.log(value)
									console.log(this.state.cards)
					
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