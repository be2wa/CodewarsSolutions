whoseMove = (lastPlayer, win) => (lastPlayer == "black" && win) || (lastPlayer == "white" && !win) ? "black" : "white"

//////// and the awesomer(:P) one below ////////

whoseMove = (lastPlayer, win) => win ? lastPlayer : lastPlayer == "black" ? "white" : "black"