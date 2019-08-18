import React, { Component } from 'react';
import Episode from './Episode';
import '../style/EpisodeList.css';

class EpisodeList extends Component {
  render() {
    const episodes = this.props.episodes.map(
        ep => <Episode key={ep.title} episode={ep}/>
    )
    return (
      <ul>{episodes}</ul>
    );
  }
}

export default EpisodeList;
