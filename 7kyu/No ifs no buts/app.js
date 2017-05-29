var noIfsNoButs = function (a,b) {
    switch (true) {
        case a > b:
            return `${a} is greater than ${b}`;
            break;
        case a < b:
            return `${a} is smaller than ${b}`;
            break;
        default:
            return `${a} is equal to ${b}`;
    }
}