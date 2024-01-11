import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    StartFuncNavMenu();
    StartFuncAddlisteners();
};

StartFunc();