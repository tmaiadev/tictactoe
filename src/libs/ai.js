import { GAME_DIFFICULTIES } from '../contexts/gameState';

function checkImminentWin(board) {
  function isImminentWin(xCellname, yCellname, zCellname) {
    const x = board[xCellname];
    const y = board[yCellname];
    const z = board[zCellname];
    
    let nOfX = 0;
    let nOfNull = 0;

    if (x === 'x') nOfX++;
    if (y === 'x') nOfX++;
    if (z === 'x') nOfX++;
    if (x === null) nOfNull++;
    if (y === null) nOfNull++;
    if (z === null) nOfNull++;

    if (nOfX === 2 && nOfNull === 1) {
      return [
        { name: xCellname, value: x },
        { name: yCellname, value: y },
        { name: zCellname, value: z },
      ].find(c => c.value === null).name;
    }

    return false;
  }

  const possibilities = [
    // lines
    isImminentWin('a1', 'b1', 'c1'),
    isImminentWin('a2', 'b2', 'c2'),
    isImminentWin('a3', 'b3', 'c3'),

    // columns
    isImminentWin('a1', 'a2', 'a3'),
    isImminentWin('b1', 'b2', 'b3'),
    isImminentWin('c1', 'c2', 'c3'),

    // transversal
    isImminentWin('a1', 'b2', 'c3'),
    isImminentWin('a3', 'b2', 'c1'),
  ].filter(p => p !== false);

  if (possibilities.length > 0) {
    return possibilities[Math.floor(Math.random() * possibilities.length)];
  }

  return false;
}

function preventImminentDanger(board) {
  function isImminentDanger(xCellname, yCellname, zCellname) {
    const x = board[xCellname];
    const y = board[yCellname];
    const z = board[zCellname];
    
    let nOfO = 0;
    let nOfNull = 0;

    if (x === 'o') nOfO++;
    if (y === 'o') nOfO++;
    if (z === 'o') nOfO++;
    if (x === null) nOfNull++;
    if (y === null) nOfNull++;
    if (z === null) nOfNull++;

    if (nOfO === 2 && nOfNull === 1) {
      return [
        { name: xCellname, value: x },
        { name: yCellname, value: y },
        { name: zCellname, value: z },
      ].find(c => c.value === null).name;
    }

    return false;
  }

  const possibilities = [
    // lines
    isImminentDanger('a1', 'b1', 'c1'),
    isImminentDanger('a2', 'b2', 'c2'),
    isImminentDanger('a3', 'b3', 'c3'),

    // columns
    isImminentDanger('a1', 'a2', 'a3'),
    isImminentDanger('b1', 'b2', 'b3'),
    isImminentDanger('c1', 'c2', 'c3'),

    // transversal
    isImminentDanger('a1', 'b2', 'c3'),
    isImminentDanger('a3', 'b2', 'c1'),
  ].filter(p => p !== false);

  if (possibilities.length > 0) {
    return possibilities[Math.floor(Math.random() * possibilities.length)];
  }

  return false;
}

function checkPossibleWin(board) {
  function isPossibleWin(xCellname, yCellname, zCellname) {
    const x = board[xCellname];
    const y = board[yCellname];
    const z = board[zCellname];
    
    let nOfX = 0;
    let nOfNull = 0;

    if (x === 'x') nOfX++;
    if (y === 'x') nOfX++;
    if (z === 'x') nOfX++;
    if (x === null) nOfNull++;
    if (y === null) nOfNull++;
    if (z === null) nOfNull++;

    if (nOfX === 1 && nOfNull === 2) {
      return [
        { name: xCellname, value: x },
        { name: yCellname, value: y },
        { name: zCellname, value: z },
      ].find(c => c.value === null).name;
    }

    return false;
  }

  const possibilities = [
    // lines
    isPossibleWin('a1', 'b1', 'c1'),
    isPossibleWin('a2', 'b2', 'c2'),
    isPossibleWin('a3', 'b3', 'c3'),

    // columns
    isPossibleWin('a1', 'a2', 'a3'),
    isPossibleWin('b1', 'b2', 'b3'),
    isPossibleWin('c1', 'c2', 'c3'),

    // transversal
    isPossibleWin('a1', 'b2', 'c3'),
    isPossibleWin('a3', 'b2', 'c1'),
  ].filter(p => p !== false);

  if (possibilities.length > 0) {
    return possibilities[Math.floor(Math.random() * possibilities.length)];
  }

  return false;
}

function checkTheMiddle(board) {
  return board.b2 === null
    ? 'b2' : false;
}

function getRandomCell(board) {
  const emptyCells = Object
    .keys(board)
    .map(key => ({ key, value: board[key] }))
    .filter(o => o.value === null)
    .map(o => o.key);
  const randomIndex = Math.floor(emptyCells.length * Math.random());
  return emptyCells[randomIndex];
}

export default function(board, difficulty) {
  const chance = Math.random() * 100;
  let willUseAI = false;

  // HARD
  // No moves are Random
  if (difficulty === GAME_DIFFICULTIES.HARD)
    willUseAI = true;

  // MEDIUM
  // 25% of the moves are Random
  if (difficulty === GAME_DIFFICULTIES.MEDIUM)
    willUseAI = chance >= 25;

  // EASY
  // 50% of the moves are Random
  if (difficulty === GAME_DIFFICULTIES.EASY)
    willUseAI = chance >= 50;

  // AI
  //
  // 1. Check for imminent win
  //    When 2 cells of the row are filled
  //    with the opponents mark, and one
  //    is empty
  //
  // 2. Check for imminent danger
  //    When 2 cells of the row are filled
  //    with your mark, and one is empty
  //
  // 3. Check for possible win
  //    When one cell of the row is filled
  //    with your mark, and two are empty
  //
  // 4. Check the middle
  //    Check the B2 cell if its not checked
  //    To prevent the most known plays
  //
  // 5. Random
  //    Pick whatever cell is empty

  if (willUseAI) {
    const imminentWin = checkImminentWin(board);
    if (imminentWin) return imminentWin;

    const imminentDanger = preventImminentDanger(board);
    if (imminentDanger) return imminentDanger;

    const possibleWin = checkPossibleWin(board);
    if (possibleWin) return possibleWin;

    const middle = checkTheMiddle(board);
    if (middle) return middle;
  }

  return getRandomCell(board);
}