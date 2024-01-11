import fs from 'fs';

let StartFunc = ({ inElement, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "restClients/crud";
    let LocalTo = inTo;

    // let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/get.http`;

    // let LocalFileData = fs.readFileSync(LocalFilePath);
    // let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);

    // fs.writeFileSync(LocalFilePath, LocalFileDataReplaced);
    LocalForGet({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName });
    LocalForPost({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName });
};

let LocalForGet = ({ inElement, inTo, inTypeName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/get.http`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);

    fs.writeFileSync(LocalFilePath, LocalFileDataReplaced);
};

let LocalForPost = ({ inElement, inTo, inTypeName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/post.http`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);

    fs.writeFileSync(LocalFilePath, LocalFileDataReplaced);
};

export { StartFunc };