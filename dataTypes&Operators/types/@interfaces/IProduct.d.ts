import * as IReviews from "./IReviews";

export default interface IProduct{
    ID: string,
    name: string,
    description: string,
    price: number,
    brand: string,
    sizes: Array<string>,
    activeSize: string,
    quantity: number,
    date: object,
    reviews: IReviews.default[],
    images: string[]
}