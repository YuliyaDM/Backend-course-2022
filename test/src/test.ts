import HttpAnswer from "../@modules/interfaces/IHttpAnswer";

const TEST1: string = `POST /doc/test HTTP/1.1
HOST: shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Content-Length: 35

bookId=12345&author=Tan+Ah+Teck`;

export const parseTcpStringAsHttpRequest = (str: string): HttpAnswer => {
    const removeSpaces: RegExp = /^ {1,}| {1,}$/gm;
    const filteredStr: string[] = str
    .replace(removeSpaces, '')
    .split(/\n/gm)
    .filter(el => el !== "");

    const mainInfo: string[] = filteredStr[0].split(" ");

    let headersMap: Map<string, string> = new Map();
    const headersArr: string[] = filteredStr.slice(1, -1);
    
    for (let value of headersArr){
        const valueArr: string[] = value.split(":");
        headersMap.set(valueArr[0], valueArr[1]);
    };

    console.log(headersMap);

    if (headersMap.size === 0) { console.log("The headers maps size is - zer0;"); }
    
    let result: HttpAnswer =  {
        method: mainInfo[0],
        url: mainInfo[1],
        body: filteredStr.reverse()[0],
    };

    if (headersMap.size !== 0) { result.headers = headersMap; };

    return result;
}

console.log(parseTcpStringAsHttpRequest(TEST1));