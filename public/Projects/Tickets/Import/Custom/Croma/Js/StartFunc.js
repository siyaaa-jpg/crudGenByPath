import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    StartFuncShowOnDom().then(
        StartFuncAddlisteners());
};

StartFunc();