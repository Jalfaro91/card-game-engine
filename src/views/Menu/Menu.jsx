
import React from 'react';
import { Link } from 'react-router-dom';

const options = [{
  name: 'Jugar',
  action: 'play',
}, {
  name: 'Opciones',
  action: 'options',
}];

export default class Menu extends React.Component {
  options() {
    return options.map((option) => {
      return (
        <li key={option.action}>
          <Link to={option.action}>{ option.name }</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <section>
        <h1>Triton</h1>

        <ul>
          { this.options() }
        </ul>
      </section>
    );
  }
}

