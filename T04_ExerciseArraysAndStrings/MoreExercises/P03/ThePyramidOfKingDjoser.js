function solve(base, increment) {
// every layer is 2 blocks a side smaller than the previous
// every layer's outher layer is marble
// every fifth layer is build of lapis 
// the last layer is from gold 
    let layers = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;

    while (base > 2) {
        layers++;
        const layerStone = ((base - 2)**2) * increment;
        stone += layerStone;
        const layerDecoration = (base * 2 + (base - 2) * 2) * increment;
        if (layers % 5 === 0){
            lapis += layerDecoration;
        } else {
            marble += layerDecoration;
        }
        base -= 2;
    }
    layers++;

    stone = Math.ceil(stone);

    marble = Math.ceil(marble);

    lapis = Math.ceil(lapis);

    gold = Math.ceil((base ** 2) * increment);

    height = Math.floor(layers * increment);

    console.log(`Stone required: ${stone}\nMarble required: ${marble}\nLapis Lazuli required: ${lapis}\nGold required: ${gold}\nFinal pyramid height: ${height}`);
}

solve(11, 1); 
console.log('-------------------------------');
solve(11, 0.75); 
console.log('-------------------------------');
solve(12, 1); 
console.log('-------------------------------');
solve(23, 0.5); 
console.log('-------------------------------');