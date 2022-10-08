"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTcpStringAsHttpRequest = void 0;
const parseTcpStringAsHttpRequest = (str) => {
    const removeSpaces = /^ {1,}| {1,}$/gm;
    const filteredStr = str
        .replace(removeSpaces, '')
        .split(/\n/gm)
        .filter(el => el !== "");
    const mainInfo = filteredStr[0].split(" ");
    let headersMap = new Map();
    const headersArr = filteredStr.slice(1, -1);
    for (let value of headersArr) {
        const valueArr = value.split(":");
        headersMap.set(valueArr[0], valueArr[1]);
    }
    ;
    console.log(headersMap);
    if (headersMap.size === 0) {
        console.log("The headers maps size is - zer0;");
    }
    let result = {
        method: mainInfo[0],
        url: mainInfo[1],
        body: filteredStr.reverse()[0],
    };
    if (headersMap.size !== 0) {
        result.headers = headersMap;
    }
    ;
    return result;
};
exports.parseTcpStringAsHttpRequest = parseTcpStringAsHttpRequest;
