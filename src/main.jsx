import React from 'react';
import { render } from 'react-dom';
import './utils/Adaptation';
import Game from './utils/2048';

render(
  <Game />, document.getElementById('root')
);
