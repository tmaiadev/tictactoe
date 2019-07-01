import React from 'react';
import Score from '../score/score';
import GameGrid from '../game-grid/game-grid';
import Status from '../status/status';
import './game.css';

function Game() {
  return (
    <div className="game animated zoomIn fast">
      <Score />
      <GameGrid />
      <Status />
    </div>
  )
}

export default Game;