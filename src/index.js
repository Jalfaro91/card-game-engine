
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import socketClient from 'socket.io-client';

import Menu from 'views/Menu/Menu.jsx';
import Play from 'views/Play/Play.jsx';

const socket = socketClient();

class Game extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route path="/" component={Menu} exact />
          <Route path="/play" component={Play} />
        </section>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('game')
);

