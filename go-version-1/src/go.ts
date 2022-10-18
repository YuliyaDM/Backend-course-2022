import HttpAnswer from "../@modules/interfaces/IHttpAnswer";

export const parseTcpStringAsHttpRequest = (str: string): HttpAnswer => {
    const clearedString: string = str.replace(/^ {1,}| {1,}$|^.{0}\n/gm, '');
    const method: string = clearedString.match(/^[A-z]*/gi)![0];
    const uri: string = clearedString.match(/^.*/gi)![0].split(' ')[1];
    const findBody: RegExpMatchArray | null = clearedString.match(/[A-z0-9]*=[A-z0-9]*&[A-z0-9]*=[A-z0-9\+]*/gm);
    const splitStr: RegExp = /\n/gm;
    let headers, body, headersMap: Map<string, string> | null = null;
    let result: HttpAnswer = {
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
    else headers = clearedString.split(splitStr).filter(el => el !== "").slice(1,);

    if (headers.length){
        headersMap = new Map();
        headers.map(el => {
            const mapEl: string[] = el.replace(/\s/gm, '').split(':');
            headersMap?.set(mapEl[0], mapEl[1]);
        })
        result.headers = headersMap;
    }

    return result;
}