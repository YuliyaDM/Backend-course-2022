export default interface HttpAnswer{
    readonly method: string,
    readonly uri: string,
    headers: Map<string, string> | string,
    body: string,
};