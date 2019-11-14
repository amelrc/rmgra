import React from 'react';
import Character from './components/Character';
import './App.css';
import styled from 'styled-components';
import Dimension from './components/Dimension';

class App extends React.Component {
  state = { 
    characters: [],
    dimensions: [],
    episodes: []
  }

  componentDidMount() {
    this.getApi()
  }

  getApi = async () => {
    const character = fetch('https://rickandmortyapi.com/api/character/?page=1');
    const location = fetch('https://rickandmortyapi.com/api/location');
    const episode = fetch('https://rickandmortyapi.com/api/episode');
    return await Promise.all([character,location,episode])
    .then(values => Promise.all(values.map(value => value.json())))
    .then(json => {
      this.setState({
        characters: json[0].results,
        locations: json[1].results,
        episodes: json[2].results
      })
      console.log('characters', this.state.characters)
      console.log('locations', this.state.locations)
      console.log('episodes', this.state.episodes)
    })
  };


  handelEpisode = () => {
    // const str = "jhkj7682834"; 
    // const matches = str.match(/(\d+)/);
    // console.log(matches)

    // const episodesArray = this.state.characters.map(epi => epi.episode)
    // console.log('episode array',episodesArray)

    // const singleEpisode = episodesArray.map(inside => inside[inside.length - 1])
    // console.log("single episdoe", singleEpisode)

    
    // let lastNumber = singleEpisode.map(single => single.match(/(\d+)/))
    // console.log('last number', lastNumber)

    // var Obj1 = {id: 2, name: 'Banana'}
    // var ArrObj = [ 
    //   {id: 1, name: 'Apple', eat: 'rice'},
    //   {id: 2, 'name': 'Banana'}
    // ];
   
    // var res = ArrObj.find(({id}) => {
    
    //   return id === Obj1.id
    //   } 
    //   );
    // console.log('result', res.id);

    const episodesState = this.state.episodes
    console.log('state', episodesState)

    const id = episodesState.map(id => id.id)
    console.log('episodes id', id)
    

    // one block
    const characters = this.state.characters
    const allEpisodes = characters.map(episode => episode.episode)
    console.log('all epi', allEpisodes)

    const lastEpi = [];
    allEpisodes.forEach(item => lastEpi.push(item[item.length - 1]))
    console.log(lastEpi)
 
    for(const item of lastEpi ){
      console.log('item in loop', item)
      const test = item.match(/\d+/g).map(Number)
      console.log('test',test)
    }
  
    //one block

    
    


    
  }

  render() {
    
    return (
      <div>
        {this.handelEpisode()}
        <Container>{this.state.characters.map((char,index) => (
          <Character 
            key={char.id}
            id={char.id}
            img={char.image}
            name={char.name}
            status={char.status}
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
