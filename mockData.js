import fs from "fs";

let writefilepath="KData/JSON/316/sample.json"
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

function generateRandomNumber() {
    // Generate a random 10-digit number
    const min = 1000000000; // 10^9
    const max = 9999999999; // 10^10 - 1
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber;
}


for (let i = 0; i < rowsNeeded; i++) {
    NewArrau.push({ UuId: uuidv4(), name: genRand(6), number: generateRandomNumber() })

};


fs.writeFileSync(writefilepath,JSON.stringify(NewArrau));
