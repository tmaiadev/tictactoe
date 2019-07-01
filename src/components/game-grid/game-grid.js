import React, { useContext, useEffect } from 'react';
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
      const { board } = gameState;

      // EASY
      // 100% of the moves are Random

      // MEDIUM
      // 50% of the moves are Random

      // HARD
      // 10% of the moves are Random

      // GODLIKE
      // No moves are Random

      // AI
      //
      // 1. Check for imminent danger
      //    When 2 cells of the row are filled
      //    with your mark, and one is empty
      //
      // 2. Check for imminent win
      //    When 2 cells of the row are filled
      //    with the opponents mark, and one
      //    is empty
      //
      // 3. Check for possible win
      //    When one cell of the row is filled
      //    with your mark, and two are empty
      //
      // 4. Random
      //    Pick whatever cell is empty

      const emptyCells = Object
        .keys(board)
        .map(key => ({ key, value: board[key] }))
        .filter(o => o.value === null)
        .map(o => o.key);
      const randomIndex = Math.floor(emptyCells.length * Math.random());
      const randomCell = emptyCells[randomIndex];
      dispatchGameState({
        type: GAME_STATE_ACTION_TYPE.CHECK,
        payload: {
          target: randomCell,
          value: 'x',
        },
      });
    }, 1000);
  }, [gameState, dispatchGameState]);

  const disabledGrid = [GAME_STATE.IDLE, GAME_STATE.YOUR_TOURN]
    .indexOf(gameState.state) === -1;

  console.log(gameState);

  return (
    <div className="game-grid">
      <div className="game-grid__cell">
        <Cell
          name="A1"
          onClick={() => play('a1')}
          value={gameState.board.a1}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="B1"
          onClick={() => play('b1')}
          value={gameState.board.b1}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="C1"
          onClick={() => play('c1')}
          value={gameState.board.c1}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="A2"
          onClick={() => play('a2')}
          value={gameState.board.a2}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="B2"
          onClick={() => play('b2')}
          value={gameState.board.b2}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="C2"
          onClick={() => play('c2')}
          value={gameState.board.c2}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="A3"
          onClick={() => play('a3')}
          value={gameState.board.a3}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="B3"
          onClick={() => play('b3')}
          value={gameState.board.b3}
          disabled={disabledGrid}
        />
      </div>
      <div className="game-grid__cell">
        <Cell
          name="C3"
          onClick={() => play('c3')}
          value={gameState.board.c3}
          disabled={disabledGrid}
        />
      </div>
    </div>
  );
}

export default GameGrid;