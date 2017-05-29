findMultiples = (int,limit) => {
    let result = []
    for (let i = int; i<=limit ; i+=int) {
        result.push(i);
    }
    return result;
}

/////// now this is some clean and smart solution (only not mine) ///////

//const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);