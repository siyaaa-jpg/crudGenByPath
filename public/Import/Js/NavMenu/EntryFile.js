import { StartFunc as StartFuncHomeId } from "./HomeId/StartFunc.js";
import { StartFunc as StartFuncImportId } from "./ImportId/StartFunc.js";

const StartFunc = () => {
    StartFuncHomeId();
    StartFuncImportId();
};
export { StartFunc };