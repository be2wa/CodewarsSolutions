var noIfsNoButs = function (a,b) {
    switch (true) {
        case a > b: return `${a} is greater than ${b}`;
        case a < b: return `${a} is smaller than ${b}`;break;
        default: return `${a} is equal to ${b}`;
    }
}

//////// Math.sign() ////////

var noIfsNoButs = function (a,b) {
    switch (Math.sign(a - b)) {
        case 1: return `${a} is greater than ${b}`;
        case -1: return `${a} is smaller than ${b}`;
        case 0: return `${a} is equal to ${b}`;
    }
}