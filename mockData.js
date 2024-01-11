import fs from "fs";

let rowsNeeded = 10000;
let NewArrau = [];

const genRand = (len) => {
    return Math.random().toString(36).substring(2, len + 2);
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


for (let i = 0; i < rowsNeeded; i++) {
    NewArrau.push({ UuId: uuidv4(), name: genRand(6) })

};


fs.writeFileSync("src/ksSample/Data.json",JSON.stringify(NewArrau));
