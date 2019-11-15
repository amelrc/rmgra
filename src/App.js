import React from 'react';
import Character from './components/Character';
import './App.css';
import styled from 'styled-components';
import Title from './components/Title';

class App extends React.Component {
  state = { 
    characters: [],
    locations: [],
    episodes: [],
    nextPage: 1 
  }

  componentDidMount() {
    this.getData()
  }

  getCharactersAndLocations = () => {
    const charactersPromise = this.getCharacters() //returns an array
    const locationsPromise = this.getLocations() //returns an array

    Promise.all([charactersPromise, locationsPromise])
    .then(values => {this.setState({
      ...this.state,
      characters: values[0],
      locations: values[1],
      on: false
    })
  
    console.log(this.state.on)
  })
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
        },()=> this.getCharactersAndLocations()) 
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

  getLastEpisode = (character) => {
    const episodeId = parseInt(character.episode[character.episode.length-1].split('/')[5])-1;
    return this.state.episodes[episodeId]
  }

  render() {
    return (
      <div>
        <Title
          title={'Rick and Morty'}
          subTitle={'challenge'}
        />
        <Container>{this.state.characters.map((char,index) => (
          <Character 
            key={char.id}
            id={char.id}
            img={char.image}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            location={this.state.locations[index]}
            episode={this.getLastEpisode(char)}
            props={this.state}
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
