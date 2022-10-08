export default interface HttpAnswer{
    readonly method: string,
    readonly url: string,
    headers?: Map<string, string>,
    readonly body: string,
};