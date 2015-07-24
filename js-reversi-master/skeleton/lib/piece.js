/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
  if (color.toLowerCase() === "white") {
    this.color = "white"
  } else {
    this.color = "black"
  }
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
  if (this.color === "white") {
    return "black";
  } else {
    return "white";
  }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  if (this.color === "white") {
    this.color = "black";
  } else {
    this.color = "white";
  }
};

/**
 * Returns a string representation of the string
 * based on its color.
 */


module.exports = Piece;
