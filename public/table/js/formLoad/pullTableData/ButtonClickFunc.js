import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFetchData = await LocalFetchFiles();
    StartFuncAfterFetch({ inFromFetch: jVarLocalFetchData.JsonData });
};

let LocalFetchFiles = async () => {
    let jVarLocalTableName = LocalFuncForQueryParams({ inKey: "fileName" });
    console.log("jVarLocalTableName : ", jVarLocalTableName);
    let jVarLocalFetchUrl = `/api/${jVarLocalTableName.split(".")[0]}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return data;
};

let LocalFuncForQueryParams = ({ inKey }) => {
    let jVarLocalKey = inKey;

    const url = new URL(window.location.href);

    // Get the search parameters from the URL
    const params = new URLSearchParams(url.search);

    // Get the value of a specific parameter
    const parameterValue = params.get(jVarLocalKey);

    return parameterValue;
    // const queryString = window.location.search;
    // const parameters = new URLSearchParams(queryString);
    // const value = parameters.get(jVarLocalKey);
};

export { StartFunc };