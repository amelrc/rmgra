import React from 'react';
import Character from './components/Character';
import './App.css';
import styled from 'styled-components';
import Dimension from './components/Dimension';
import { arrayExpression } from '@babel/types';

class App extends React.Component {
  state = { 
    characters: [],
    locations: [],
    episodes: []
  }

  componentDidMount() {
    this.getData()
  }

  getCharactersAndLocations = () => {
    const charactersPromise = this.getCharacters() //returns an array
    const locationsPromise = this.getLocations() //returns an array

    Promise.all([charactersPromise, locationsPromise])
    .then(values => this.setState({
      ...this.state,
      characters: values[0],
      locations: values[1]
    }, ()=>console.log(this.state)))
  }

  getData = () => {
    return fetch('https://rickandmortyapi.com/api/episode').then(result => result.json()).then(val => {
      const pageCount = parseInt(val.info.pages)
      let apiPromises = []
      let allEpisodes = []

      for (let i=0; i<pageCount; i++) {
        let pageNumber = i+1
        apiPromises.push(fetch(`https://rickandmortyapi.com/api/episode/?page=${pageNumber}`))
      }

      Promise.all(apiPromises)
      .then(values => Promise.all(values.map(value => value.json())))
      .then(json => {
        json.forEach(item => {
          allEpisodes = allEpisodes.concat(item.results)
        })
        this.setState({
          ...this.state, 
          episodes: allEpisodes
        }, function(){ this.getCharactersAndLocations() }) 
      })
    })
  }

  getCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(result => result.json())
    .then(json => json.results)
  }

  getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location')
    .then(result => result.json())
    .then(json => json.results)
  }

  // getApi = async () => {
  //   const character = fetch('https://rickandmortyapi.com/api/character/?page=1');
  //   const location = fetch('https://rickandmortyapi.com/api/location');
  //   const episode = fetch('https://rickandmortyapi.com/api/episode');
  //   Promise.all([character,location,episode])
  //   .then(values => Promise.all(values.map(value => value.json())))
  //   .then(json => {
  //     this.setState({...this.state,
  //       characters: json[0].results,
  //       locations: json[1].results,
  //       episodes: json[2].results
  //     })
  //   })
  // };

  getLastEpisode = (character) => {
    const episodeId = parseInt(character.episode[character.episode.length-1].split('/')[5])-1    
    return this.state.episodes[episodeId]
  }
    
  render() {
    
    return (
      <div>
        <Container>{this.state.characters.map((char,index) => (
          <Character 
            key={char.id}
            id={char.id}
            img={char.image}
            name={char.name}
            status={char.status}
            episode={this.getLastEpisode(char) || 'd'}
            location={this.state.locations[index]}
          />
        ))}
        </Container>
      </div>
    )
  }
}

export default App;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`
