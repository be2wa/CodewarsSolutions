const squareOrSquareRoot = array => array.map(e => e > 0 && Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : Math.pow(e, 2)) // OR just e * e instead of Math.pow()