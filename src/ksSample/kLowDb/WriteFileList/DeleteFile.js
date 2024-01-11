import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../Config.json' assert { type: 'json' };

import fileNameJson from '../fileName.json' assert { type: 'json' };

let StartFunc = ({ Id }) => {
    let LocalId = Id;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.JsonPath}/${fileNameJson.fileName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();
    let LocalarrayOfObjects = db.data;
    let LocalArrayAfterUuid = deleteObjectById({ arrayOfObjects: LocalarrayOfObjects, id: LocalId });

    // db.data.push(...LocalArrayAfterUuid);
    db.write();

    LocalReturnData = LocalArrayAfterUuid.length;

    return LocalReturnData;
};

let deleteObjectById = ({ arrayOfObjects, id }) => {

    const index = arrayOfObjects.findIndex(obj => obj.UuId === id);

    if (index !== -1) {
        delete arrayOfObjects[index];
        arrayOfObjects = arrayOfObjects.filter(obj => obj !== null && obj !== undefined);
        
        return arrayOfObjects;
    } else {
        console.log(`Object with id ${id} not found.`);
    }
}

export { StartFunc };
