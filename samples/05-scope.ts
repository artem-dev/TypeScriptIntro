// let vs let
// also: use ES6 for contrast 
let app = () => {

    let withlet = () => {
        for (let idx: number = 0; idx < 10; idx += 1) {
            setTimeout(() => console.log(`let idx = ${idx}`), 0);
        }
    }

    let withLet = () => {
        for (let idx: number = 0; idx < 10; idx += 1) {
            setTimeout(() => console.log(`let idx = ${idx}`), 0);
        }
    }

    withlet();
    withLet();
}
setTimeout(app, 0);

const maxRows = 1000;
//maxRows = 12;
if (100 < maxRows) {
    console.log(`It is within range!`);
} 