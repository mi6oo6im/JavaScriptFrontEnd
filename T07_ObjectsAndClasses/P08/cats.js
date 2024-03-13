function solve(catsArr) {
    const catsObjArr =[];
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const cat of catsArr) {
        const [name, age] = cat.split(' ')
        catsObjArr.push(new Cat(name, age))
    }

    for (const catObj of catsObjArr) {
        catObj.meow();
    }
}

solve(['Mellow 2', 'Tom 5'])