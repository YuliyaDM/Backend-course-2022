
//import interfaces

import * as IProduct from "./types/@interfaces/IProduct";
import * as IReviews from "./types/@interfaces/IReviews";
import * as IThisProduct from "./types/@interfaces/IThisProduct";

function Product (product: IProduct.default): void {
    this.ID = product.ID;
    this.GetID = function (): string {
        return this.ID;
    };
    this.SetId = function (ID: string){
        this.ID = ID;
    };
    this.GetReviewByID = function (ID: string): (object | null) {
        for (let i: number = 0; i < this.reviews.length; i++){
            if (this.reviews[i].ID === ID) return this.reviews[i];
        }
        return null;
    }

    this.name = product.name;
    this.GetName = function() {
        return this.name;
    };
    this.SetName =  function (name: string) {
        this.name = name;
    };

    this.description = product.description;
    this.GetDescription = function () {
        return this.description;
    };
    this.SetDescription = function (description: string) {
        this.description = description;
    };

    this.price = product.price;
    this.GetPrice = function () {
        return this.price;
    };
    this.SetPrice = function (price: number) {
        this.price = price;
    };

    this.brand = product.brand;
    this.GetBrand = function () {
        return this.brand;
    };
    this.SetBrand = function (brand: string) {
        this.brand = brand;
    };

    this.sizes = product.sizes;
    this.GetSizes = function () {
        return this.sizes;
    };
    this.SetSizes = function (sizes: string) {
        this.sizes = sizes;
    };
    this.AddSize = function (size: string): void {
        this.sizes.push(size);
    }
    this.DeleteSize = function (number: number): void {
        this.sizes.splice(number, 1);
    }

    this.activeSize = product.activeSize;
    this.GetActiveSize = function () {
        return this.activeSize;
    };
    this.SetActiveSize = function (activeSize: string) {
        this.activeSize = activeSize;
    };

    this.quantity = product.quantity;
    this.GetQuantity = function () {
        return this.quantity;
    };
    this.SetQuantity = function (quantity: number) {
        this.quantity = quantity;
    };

    this.date = product.date;
    this.GetDate = function () {
        return this.date;
    };
    this.SetDate = function (date: string) {
        this.date = date;
    };

    this.reviews = product.reviews;
    this.GetReviews = function (){
        return this.reviews;
    };
    this.SetReviews = function (reviews: object[]) {
        this.reviews = reviews;
    };
    this.AddReview = function (review: IReviews.default) {
        this.reviews.push(review);
    }
    this.DeleteReview = function (ID: string): void {
        for (let i: number = 0; i < this.reviews.length; i++){
            if (this.reviews[i].ID === ID) this.reviews.splice(1, i);
        }
    }

    this.images = product.images;
    this.GetImages = function () {
        return this.images;
    };
    this.SetImages = function (images: string[]) {
        this.images = images;
    };
    this.GetImage = function(number: string): string {
        if (!number) return this.images[0];
        return this.images[number];
    }

    this.GetAverageRating = function (ID: string) {
        let average = [];
        this.reviews.map((el) => {
            if (el.ID === ID){
                const keys = Object.keys(el.rating)
                for (let i: number = 0; i < keys.length; i++){
                    average += el.rating[keys[i]];
                }
            }
        })
        return average;
    }
}

function Reviews (reviews: IReviews.default): void {
    this.ID = reviews.ID;
    this.author = reviews.author;
    this.date = reviews.date;
    this.comment = reviews.comment;
    this.rating = reviews.rating
}

function Search(products: Array<IProduct.default>, search: string): (Array<IProduct.default> | []){
    let result = [];
    if (search === "*") return [];
    search = search.replace("*", "");

    products.map(el => {
        const regexp = new RegExp(`${search}`,`gm`);
        if (el.name.match(regexp) || el.description.match(regexp)) result.push(el);
    })

    return result;
}

function Sort(products: Array<IProduct.default>, sortRule: string): (Array<IProduct.default> | []) {
    return products.sort((a, b) => a[sortRule] - b[sortRule]);
}

enum rating {
    service = "4",
    price = "5",
    value = "100",
    quality = "3",
}

enum rating2 {
    service = "4",
    price = "0",
    value = "10",
    quality = "1",
}

const review1 = new Reviews({
    ID: "1",
    author: "John Doe",
    date: new Date(),
    comment: "my review",
    rating: rating
});

const review2 = new Reviews({
    ID: "2",
    author: "Jane Doe",
    date: new Date(),
    comment: "no comments...",
    rating: rating2
});

console.log(review2.ID);

let product1 = new Product({
    ID: "993",
    name: "Trousers",
    description: "Very cool trousers",
    price: 40,
    brand: "Boom",
    sizes: ["S", "M", "XL", "XXL"],
    activeSize: "S",
    quantity: 1,
    date: new Date(),
    reviews: [review1, review2],
    images: ["trousers.png", "model.png"],
});