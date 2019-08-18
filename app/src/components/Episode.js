import React, { Component } from 'react';
import '../style/Episode.css';

class Episode extends Component {
  render() {
    const {title, date, file} = this.props.episode
    return (
      <div>
        <li>{title} -{date}</li>
        <audio controls>
          <source src={file} type="audio/mpeg"/>
          Yikes, your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Episode;
