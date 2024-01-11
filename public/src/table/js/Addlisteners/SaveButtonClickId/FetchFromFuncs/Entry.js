import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    console.log("jVarLocalDataNeeded:",jVarLocalDataNeeded);
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded.JsonData });
        };
    };
};

export { StartFunc }