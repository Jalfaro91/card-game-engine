
import React from 'react';

const STATUS = {
  'LOADING': 0,
  'PLAYING': 1,
}

export default class Play extends React.Component {
  state = {
    status: 'LOADING',
  }

  render() {
    return (
      <section>
        Searching for a Game
      </section>
    );
  }
}

