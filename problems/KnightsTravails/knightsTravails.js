import Queue from '../../data-structures/Queue/Queue.js';

const rows = 8;
const cols = 8;
const chessBoard = Array(rows)
  .fill()
  .map(() => Array(cols).fill());

function knightMoves(start, end) {
  const visited = [...chessBoard];
  const q = new Queue();

  q.enqueue({
    coord: start,
    previous: 'start',
  });

  let current = null;
  while (!q.isEmpty()) {
    // start searching
    current = q.dequeue();
    if (current.coord[0] === end[0] && current.coord[1] === end[1]) break;

    if (visited[current.coord[0]][current.coord[1]] !== undefined) {
      continue;
    }

    visited[current.coord[0]][current.coord[1]] = current.previous;
    const nextMovesArr = possibleMoves(current.coord[0], current.coord[1]);

    for (let nextCoord of nextMovesArr) {
      q.enqueue({
        coord: nextCoord,
        previous: current.coord,
      });
    }
  }

  const path = [];
  path.push(current.coord);
  let prevCord = current.previous;
  while (prevCord != 'start') {
    path.push(prevCord);
    prevCord = visited[prevCord[0]][prevCord[1]];
  }
  return path.reverse();
}

/**
 *
 * @param {Number} x Row of the piece
 * @param {Number} y Column of the piece
 * @returns {Array} with up to 8 possible ending positions
 */

function possibleMoves(row, col) {
  let arr = [];
  const longMove = 2;
  const shortMove = 1;

  arr.push([row + longMove, col + shortMove]);
  arr.push([row + longMove, col - shortMove]);
  arr.push([row - longMove, col + shortMove]);
  arr.push([row - longMove, col - shortMove]);

  arr.push([row + shortMove, col + longMove]);
  arr.push([row + shortMove, col - longMove]);
  arr.push([row - shortMove, col + longMove]);
  arr.push([row - shortMove, col - longMove]);

  // remove any illegal moves

  arr = arr.filter((move) => {
    if (
      move[0] < chessBoard.length &&
      move[0] >= 0 &&
      move[1] < chessBoard.length &&
      move[1] >= 0
    )
      return true;
    return false;
  });

  return arr;
}

export default knightMoves;
