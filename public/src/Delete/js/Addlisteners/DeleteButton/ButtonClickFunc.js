import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async ({ inevent }) => {
    console.log("kkkkkkkkkkkkk");
    let jVarLocalCurrentTarget = inevent.currentTarget;

    let jVarLocaluuid = jVarLocalCurrentTarget.dataset.uuid;
    console.log("kkkkkkkkkkkkk", jVarLocaluuid);

    if (StartFuncCheckBeforeFetch()) {

        StartFuncAfterFetch({ inFromFetch: jsonArray });
    };
};
export { StartFunc };