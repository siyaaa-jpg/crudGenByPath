import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let ButtonClickId = "DeleteButtonClass";

    let jVarLocalButtonClass = document.getElementsByClassName(ButtonClickId);
    console.log("jVarLocalButtonClass:", jVarLocalButtonClass);

    for (let i = 0; i < jVarLocalButtonClass.length; i++) {
        console.log("jVarLocalButtonClass:----", jVarLocalButtonClass[i]);

        jVarLocalButtonClass[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        })

    };

};

export { StartFunc };
