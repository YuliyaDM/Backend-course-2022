"use strict";
//import interfaces
Object.defineProperty(exports, "__esModule", { value: true });
function Product(product) {
    this.ID = product.ID;
    this.GetID = function () {
        return this.ID;
    };
    this.SetId = function (ID) {
        this.ID = ID;
    };
    this.GetReviewByID = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID === ID)
                return this.reviews[i];
        }
        return null;
    };
    this.name = product.name;
    this.GetName = function () {
        return this.name;
    };
    this.SetName = function (name) {
        this.name = name;
    };
    this.description = product.description;
    this.GetDescription = function () {
        return this.description;
    };
    this.SetDescription = function (description) {
        this.description = description;
    };
    this.price = product.price;
    this.GetPrice = function () {
        return this.price;
    };
    this.SetPrice = function (price) {
        this.price = price;
    };
    this.brand = product.brand;
    this.GetBrand = function () {
        return this.brand;
    };
    this.SetBrand = function (brand) {
        this.brand = brand;
    };
    this.sizes = product.sizes;
    this.GetSizes = function () {
        return this.sizes;
    };
    this.SetSizes = function (sizes) {
        this.sizes = sizes;
    };
    this.AddSize = function (size) {
        this.sizes.push(size);
    };
    this.DeleteSize = function (number) {
        this.sizes.splice(number, 1);
    };
    this.activeSize = product.activeSize;
    this.GetActiveSize = function () {
        return this.activeSize;
    };
    this.SetActiveSize = function (activeSize) {
        this.activeSize = activeSize;
    };
    this.quantity = product.quantity;
    this.GetQuantity = function () {
        return this.quantity;
    };
    this.SetQuantity = function (quantity) {
        this.quantity = quantity;
    };
    this.date = product.date;
    this.GetDate = function () {
        return this.date;
    };
    this.SetDate = function (date) {
        this.date = date;
    };
    this.reviews = product.reviews;
    this.GetReviews = function () {
        return this.reviews;
    };
    this.SetReviews = function (reviews) {
        this.reviews = reviews;
    };
    this.AddReview = function (review) {
        this.reviews.push(review);
    };
    this.DeleteReview = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID === ID)
                this.reviews.splice(1, i);
        }
    };
    this.images = product.images;
    this.GetImages = function () {
        return this.images;
    };
    this.SetImages = function (images) {
        this.images = images;
    };
    this.GetImage = function (number) {
        if (!number)
            return this.images[0];
        return this.images[number];
    };
    this.GetAverageRating = function (ID) {
        let average = [];
        this.reviews.map((el) => {
            if (el.ID === ID) {
                const keys = Object.keys(el.rating);
                for (let i = 0; i < keys.length; i++) {
                    average += el.rating[keys[i]];
                }
            }
        });
        return average;
    };
}
function Reviews(reviews) {
    this.ID = reviews.ID;
    this.author = reviews.author;
    this.date = reviews.date;
    this.comment = reviews.comment;
    this.rating = reviews.rating;
}
function Search(products, search) {
    let result = [];
    if (search === "*")
        return [];
    search = search.replace("*", "");
    products.map(el => {
        const regexp = new RegExp(`${search}`, `gm`);
        if (el.name.match(regexp) || el.description.match(regexp))
            result.push(el);
    });
    return result;
}
function Sort(products, sortRule) {
    return products.sort((a, b) => a[sortRule] - b[sortRule]);
}
var rating;
(function (rating) {
    rating["service"] = "4";
    rating["price"] = "5";
    rating["value"] = "100";
    rating["quality"] = "3";
})(rating || (rating = {}));
var rating2;
(function (rating2) {
    rating2["service"] = "4";
    rating2["price"] = "0";
    rating2["value"] = "10";
    rating2["quality"] = "1";
})(rating2 || (rating2 = {}));
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
