import fs from 'fs';
import path from 'path';

import { StartFunc as StartFuncBaseDirs } from './BaseDirs/EntryFile.js';
import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';
import { StartFunc as StartFuncCopyDatas } from './CopyDatas/EntryFile.js';
import { StartFunc as StartFuncForkLowDb } from './ForkLowDb/EntryFile.js';
import { StartFunc as StartFuncForDataJson } from './ForDataJson.js';
import { StartFunc as StartFuncForRestClients } from './ForRestClients/EntryFile.js';

let CommonFromFolderName = "FromData";
let CommonRoutes = [];

let CommonFiles = fs.readdirSync(CommonFromFolderName);

CommonFiles.forEach(function (file, index) {
    let LoopInsideObject = {};
    LoopInsideObject.FileName = path.parse(file).name;
    let LoopInsideFileData = fs.readFileSync(`${CommonFromFolderName}/${file}`);
    let LoopInsideJsonData = JSON.parse(LoopInsideFileData);

    LoopInsideObject.Columns = Object.keys(LoopInsideJsonData[0]);
    CommonRoutes.push(LoopInsideObject);
});


let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    StartFuncBaseDirs();

    StartFuncForRoutesFile({
        inEndPointsArray: LocalFilesArray.map(element => element.FileName),
        inFrom: CommonFrom, inTo: CommonTo
    });

    LocalFilesArray.forEach(element => {
        try {
            fs.cpSync(`${CommonFrom}/ksSample`, `${CommonTo}/${element.FileName}`, {
                recursive: true,
            });
        } catch (error) {
            console.log(error.message);
        };

        StartFuncForkLowDb({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForDataJson({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForRestClients({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncCopyDatas({
            inFromFolderName: CommonFromFolderName
        });

        fs.copyFileSync(`${CommonFrom}/Config.json`, `${CommonTo}/Config.json`);
    });
};

// console.log("CommonRoutes : ", CommonRoutes);
StartFunc({ inFilesArray: CommonRoutes });