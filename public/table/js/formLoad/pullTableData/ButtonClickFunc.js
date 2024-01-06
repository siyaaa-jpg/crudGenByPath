import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFetchData = await LocalFetchFiles();
    StartFuncAfterFetch({ inFromFetch: jVarLocalFetchData.JsonData });
};

let LocalFetchFiles = async () => {
    let jVarLocalFetchUrl = "/api/customers"
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return data;
};

export { StartFunc };