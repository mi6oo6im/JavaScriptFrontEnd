function solve(firstName, lastName, hairColor) {
    const obj = {
        name: firstName,
        lastName,
        hairColor,
    }
    
    const JSONstr = JSON.stringify(obj);

    console.log(JSONstr);
}

solve('George', 'Jones', 'Brown');
