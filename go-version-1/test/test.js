import { parseTcpStringAsHttpRequest } from "../dist/go.js";

const TEST1 = `GET /doc/test.html HTTP/1.1 
Host: www.test101.com 
Accept: image/gif, image/jpeg, */* 
Accept-Language: en-us 
Accept-Encoding: gzip, deflate 
User-Agent: Mozilla/4.0 
Content-Length: 35

bookId=12345&author=Tan+Ah+Teck`;
const TEST2 = `GET /sum?nums=1,2,3,4 HTTP/1.1
Host: shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0

`;
const TEST3 = `POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 35

login=student&password=12345
`;
const TEST4 = `GET / HTTP/1.1
Host: student.shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0

`;

console.log(parseTcpStringAsHttpRequest(TEST1));
console.log(parseTcpStringAsHttpRequest(TEST2));
console.log(parseTcpStringAsHttpRequest(TEST3));
console.log(parseTcpStringAsHttpRequest(TEST4));