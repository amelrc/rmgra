import React from 'react';
import CardList from './components/CardList';
import Card from './components/Card';
import {getApi} from './Api';
import './App.css';

class App extends React.Component {
  state = {
    api: getApi()
  }
  test = () => {
    console.log(this.state.api)
  }
//  console.log(this.state.api)
  // getApi = (e) => {
  //   e.preventDefault();
  //   const character = fetch('https://rickandmortyapi.com/api/character');
  //   const location = fetch('https://rickandmortyapi.com/api/location');
  //   const episode = fetch('https://rickandmortyapi.com/api/episode');
    
  //   Promise.all([character,location,episode])
  //   .then(values => Promise.all(values.map(value => value.json())))
  //   .then(value => {
  //     const character = value[0];
  //     const location = value[1];
  //     const episode = value[2];

  //     console.log('character', character)
  //     this.setState({
  //       name: character.results[0].name
  //     })
  //     console.log('>>>>>>>',this.state.name )
  //   });
  // }
  
  render() {
    
    return (
      <div>
          <CardList />
          <Card />
          {/* <ApiCall/> */}
      </div>
    )
  }
}

export default App;
