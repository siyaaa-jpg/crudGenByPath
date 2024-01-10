import fs from 'fs';
import path from 'path';

import { StartFunc as StartFuncBaseDirs } from './BaseDirs/EntryFile.js';

import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';

import { StartFunc as StartFuncFordataModals } from './FordataModals.js';
import { StartFunc as StartFuncCopyDatas } from './CopyDatas/EntryFile.js';

import { StartFunc as StartFuncForkLowDb } from './ForkLowDb/EntryFile.js';


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

        // StartFuncForRestClients({
        //     inElement: element.FileName, inColumnsArray: element.Columns,
        //     inFrom: CommonFrom, inTo: CommonTo
        // });

        StartFuncCopyDatas({
            inFromFolderName: CommonFromFolderName
        });
    });
};

// console.log("CommonRoutes : ", CommonRoutes);
StartFunc({ inFilesArray: CommonRoutes });