export default interface IThisProduct{
    ID: string,
    GetId: { (): string; },
    SetId: {  (ID: string): void; },

    name: string,
    GetName: { (): string; },
    SetName: { (name: string): void; },

    description: string,
    GetDescription: { (): string; },
    SetDescription: { (description: string): void; },

    price: number,
    GetPrice: { (): number; },
    SetPrice: { (price: number): void; },

    brand: string,
    GetBrand: { (): string; },
    SetBrand: { (brand: string): void; },

    sizes: string,
    GetSizes: { (): string; },
    SetSizes: { (sizes: string): void; },

    activeSize: string,
    GetActiveSize: { (): string; },
    SetActiveSize: { (activeSize: string): void; },

    quantity: number,
    GetQuantity: { (): number; },
    SetQuantity: { (quantity: number): void; },

    date: string,
    GetDate: { (): string; },
    SetDate: { (date: string): void; },

    reviews: object[],
    GetReviews: { (): object[]; },
    SetReviews: { (reviews: object[]): void; },
    GetReviewByID: { (key: string): (object | string) },

    images: string[],
    GetImages: { (): string[]; },
    SetImages: { (images: string[]): void; },
}