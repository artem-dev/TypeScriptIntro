type Awesomeness = "Low" | "Medium" | "High";

interface Programmer {
    name: string;
    vk: string;
    awesome: Awesomeness;
}

type ProgrammerProperty = keyof Programmer;

let programmer: Programmer = { name: "Artem Dubovikov", vk: "artem_dubovikov", awesome: "Medium" };

const getProperty = (adv: Programmer, key: ProgrammerProperty) => adv[key];
console.log(getProperty(programmer, "vk"));
console.log(getProperty(programmer, "name"));
console.log("...");

interface Point {
    x: number;
    y: number;
}

type Constructor<T> = new(...args: any[]) => T;

const Vertice = <T extends Constructor<Point>>(Base: T) => 
    class extends Base {
        direction: number;
    };

class PointImplementation implements Point {
    constructor(public x: number, public y: number) {}
}

const VerticeImplementation = Vertice(PointImplementation);

let vertice = new VerticeImplementation(1,1);
vertice.direction = Math.PI/2;

console.log("...");

// explicit type guard
const isNumber = (inp: any): inp is number => {
    console.log(`inp: ${inp} typeof inp: ${typeof inp}`);
    return typeof inp === "number";
}

let test:any = 5;
console.log(test.toFixed(0)); // no intellisense
if (isNumber(test)) {
    console.log(test.toFixed(0)); // intellisense
}

let secret:any = "my secret";
console.log(secret.charAt(0)); // no intellisense
if (typeof secret === "string") { // implicit type guard
    console.log(secret.charAt(0)); // intellisense
}