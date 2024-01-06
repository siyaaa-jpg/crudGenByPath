import ModalDataAsJson from './TicketsData.json' assert { type: 'json' };

let ColumnsPullFunc = () => {
    let LocalColumns = Object.keys(ModalDataAsJson);
    let ReturnFuncAsString = `({ ${LocalColumns.toString()} }) => ({ ${LocalColumns.toString()} })`;

    return ReturnFuncAsString;
};

export {
    ColumnsPullFunc
};