let x: number = 2;
console.log(`x = ${x}`);

//x = "hello";

let str: string = "Hello, World.";
console.log(`str = ${str}`);

//str = 2;

let checked: boolean = false;
console.log(`checked = ${checked}`);
//checked = "true";

let list: number[] = [1, 2, 3];
list.push(4);
//list.push("5");
console.log(`list = ${list}`);

enum Interest { Bored = 42, Interested, Neutral };
let myInterest: Interest = Interest.Interested;
console.log(`Interest Level = ${Interest[myInterest]}`);

function returnsNada(): void {
    // return 1;
}

function returnsWhatever(): any {
    if (Math.random() < 0.5) {
        return "1";
    }
    return 1;
}

let result = returnsWhatever();
console.log(`result = ${result}`);