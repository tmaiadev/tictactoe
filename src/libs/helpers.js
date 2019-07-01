export function checkResult(board) {
  const {
    a1, b1, c1,
    a2, b2, c2,
    a3, b3, c3,
  } = board;

  function isEqual(x, y, z) {
    if (x === null
      || y === null
      || z === null) return false;
    return x === y && x === z;
  }

  if (isEqual(a1, b1, c1)) return {
    winner: a1,
    cells: ['a1', 'b1', 'c1'],
  };

  if (isEqual(a2, b2, c2)) return {
    winner: a2,
    cells: ['a2', 'b2', 'c2'],
  };

  if (isEqual(a3, b3, c3)) return {
    winner: a3,
    cells: ['a3', 'b3', 'c3'],
  };

  if (isEqual(a1, a2, a3)) return {
    winner: a1,
    cells: ['a1', 'a2', 'a3'],
  };

  if (isEqual(b1, b2, b3)) return {
    winner: b1,
    cells: ['b1', 'b2', 'b3'],
  };

  if (isEqual(c1, c2, c3)) return {
    winner: c1,
    cells: ['c1', 'c2', 'c3'],
  };

  if (isEqual(a1, b2, c3)) return {
    winner: a1,
    cells: ['a1', 'b2', 'c3'],
  };

  if (isEqual(a3, b2, c1)) return {
    winner: a3,
    cells: ['a3', 'b2', 'c1'],
  };

  return null;
}