"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTcpStringAsHttpRequest = void 0;
const parseTcpStringAsHttpRequest = (str) => {
    const clearedString = str.replace(/^ {1,}| {1,}$|^.{0}\n/gm, '');
    const method = clearedString.match(/^[A-z]*/gi)[0];
    const uri = clearedString.match(/^.*/gi)[0].split(' ')[1];
    const findBody = clearedString.match(/[A-z0-9]*=[A-z0-9]*&[A-z0-9]*=[A-z0-9\+]*/gm);
    const splitStr = /\n/gm;
    let headers, body, headersMap = null;
    let result = {
        method: method,
        uri: uri,
        headers: "...",
        body: "..."
    };
    if (findBody) {
        body = findBody[0];
        headers = clearedString.split(splitStr).filter(el => el !== "").slice(1, -1);
        result.body = body;
    }
    else
        headers = clearedString.split(splitStr).filter(el => el !== "").slice(1);
    if (headers.length) {
        headersMap = new Map();
        headers.map(el => {
            const mapEl = el.replace(/\s/gm, '').split(':');
            headersMap === null || headersMap === void 0 ? void 0 : headersMap.set(mapEl[0], mapEl[1]);
        });
        result.headers = headersMap;
    }
    return result;
};
exports.parseTcpStringAsHttpRequest = parseTcpStringAsHttpRequest;
