import React, { Component } from 'react';
// import { getApi } from './Api';

const Context = React.createContext();

class ContextAPI extends Component {
	state = { 
			characters: [],
			locations: [],
			episodes: []
	}

	componentDidMount() {
	 this.getApi()
	}

	getApi = async () => {
		const character = fetch('https://rickandmortyapi.com/api/character/?page=2');
		const location = fetch('https://rickandmortyapi.com/api/location');
		const episode = fetch('https://rickandmortyapi.com/api/episode');
		return await Promise.all([character,location,episode])
		.then(values => Promise.all(values.map(value => value.json())))
		.then(json => {
			this.setState({
				characters: json[0],
				locations: json[1],
				episodes: json[2]
			})
		})
	};

	handelEpisode = () => {
		// console.log('episode')
		// console.log(this.state.api)
	}

	render() {
		return (
			<Context.Provider value={{
				...this.state,
				handelEpisode: this.handelEpisode
			}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}
const Consumer = Context.Consumer;

export { ContextAPI, Consumer };