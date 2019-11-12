import React from 'react';
import CardList from './components/CardList';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  
  render() {
    
    return (
      <div>
          <CardList />
          <Card />
      </div>
    )
  }
}

export default App;
