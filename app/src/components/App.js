import React, { Component } from 'react';
import Title from './Title';
import Intro from './Intro';
import EpisodeList from './EpisodeList';
import episodes from '../content/episodes'
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title/>
        <Intro/>
        <EpisodeList episodes={episodes}/>
      </React.Fragment>
      );
  }
}

export default App;
