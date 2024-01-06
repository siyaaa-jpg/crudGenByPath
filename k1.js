let o1 = {
    name: "Keshav",
    Mobile: 9999999999
};

let o2 = {
    name: "New Keshav",
    Surname: "Nalame"
};

console.log("------- : ", { ...o1 });
console.log("------- : ", { ...o1, ...o2 });

console.log("------- : ", Object.assign(o1, o2));

const extract = ({ x, y, z }) => ({ x, y, z });

let source = { x: 120, y: 200, z: 150, radius: 10, color: 'red' };

console.log(extract(source));

let a1 = ["x", "y", "z", "name"];
let a2 = `({ ${a1.toString()} }) => ({ ${a1.toString()} })`;


console.log("aaaaaaa : ", eval(a2)(source));
