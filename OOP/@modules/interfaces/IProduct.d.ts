export default interface IProduct {
    ID: string,
    title: string,
    price: string,
    description: string,
    quantity: number,
    reviews: Array<object>,
    images: Array<string>,
    date: object,
    brand: string,
}