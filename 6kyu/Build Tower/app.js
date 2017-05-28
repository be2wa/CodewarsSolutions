towerBuilder = n => {
    result = [];
    space = "";
    star = "";
    for (let i = 1; i <= n; i++) {
        space = (" ").repeat(n - i);
        star = ("*").repeat(2 * i - 1);
        result.push(space + star + space);
    }
    return result;
}