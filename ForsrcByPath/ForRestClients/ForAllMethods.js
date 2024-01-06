let StartFunc = ({ inElement, inFileData, inColumnsArray }) => {
    let LocalFileData = inFileData;

    let LocalForVariables = "{{ksSample}}"
    let LocalForVariablesNew = `${inElement}`;

    let LocalNewData = LocalFileData.replaceAll(LocalForVariables, LocalForVariablesNew);

    return LocalNewData;
};

export { StartFunc };