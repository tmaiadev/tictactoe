import React, { useContext, useEffect } from 'react';
import ai from '../../libs/ai';
import GameStateContext, {
  GAME_STATE_ACTION_TYPE,
  GAME_STATE,
} from '../../contexts/gameState';
import Cell from '../cell/cell';
import './game-grid.css';

function GameGrid() {
  const [gameState, dispatchGameState] = useContext(GameStateContext);

  function play(target) {
    dispatchGameState({
      type: GAME_STATE_ACTION_TYPE.CHECK,
      payload: {
        target,
        value: 'o',
      },
    });
  }

  useEffect(() => {
    if (gameState.state !== GAME_STATE.OPPONENTS_TURN) return;
    setTimeout(() => {
      const { board, difficulty } = gameState;
      dispatchGameState({
        type: GAME_STATE_ACTION_TYPE.CHECK,
        payload: {
          target: ai(board, difficulty),
          value: 'x',
        },
      });
    }, 1000);
  }, [gameState, dispatchGameState]);

  const disabledGrid = [GAME_STATE.IDLE, GAME_STATE.YOUR_TOURN]
    .indexOf(gameState.state) === -1;

  const someonesVictory = [GAME_STATE.WIN, GAME_STATE.DEFEAT]
    .indexOf(gameState.state) !== -1;

  return (
    <div className="game-grid">
      <div className="game-grid__cell">
        <Cell
          name="A1"
          onClick={() => play('a1')}
          value={gameState.board.a1}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('a1') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="B1"
          onClick={() => play('b1')}
          value={gameState.board.b1}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('b1') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="C1"
          onClick={() => play('c1')}
          value={gameState.board.c1}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('c1') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="A2"
          onClick={() => play('a2')}
          value={gameState.board.a2}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('a2') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="B2"
          onClick={() => play('b2')}
          value={gameState.board.b2}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('b2') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="C2"
          onClick={() => play('c2')}
          value={gameState.board.c2}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('c2') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="A3"
          onClick={() => play('a3')}
          value={gameState.board.a3}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('a3') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="B3"
          onClick={() => play('b3')}
          value={gameState.board.b3}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('b3') === -1}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="C3"
          onClick={() => play('c3')}
          value={gameState.board.c3}
          disabled={disabledGrid}
          opaque={someonesVictory && gameState.winnerCells.indexOf('c3') === -1}
        />
      </div>
    </div>
  );
}

export default GameGrid;