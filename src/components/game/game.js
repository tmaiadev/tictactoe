import React from 'react';
import Score from '../score/score';
import GameGrid from '../game-grid/game-grid';
import './game.css';

function Game() {
  return (
    <div className="game">
      <Score />
      <GameGrid />
      <div>STATUS</div>
    </div>
  )
}

export default Game;