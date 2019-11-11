import React, { Component } from 'react';
import { getApi } from './Api';

const Context = React.createContext();

class ContextAPI extends Component {
	state = {
		api: Promise.resolve(getApi())
	}

	handelEpisode = () => {
		console.log('episode')
		console.log(this.state.api)
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