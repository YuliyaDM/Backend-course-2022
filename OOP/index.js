"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractProduct {
    constructor(product) {
        this.ID = product.ID;
        this.title = product.title;
        this.price = product.price;
        this.description = product.description;
        this.quantity = product.quantity;
        this.reviews = product.reviews;
        this.images = product.images;
        this.date = product.date;
        this.brand = product.brand;
    }
    getPriceForQuantity(amount) {
        const result = this.price.replace(/([A-z]+|[$€£¥])/gm, '');
        console.log(+result * amount);
    }
    get getId() { return this.ID; }
    set setId(ID) { this.ID = ID; }
    get getTitle() { return this.title; }
    set setTitle(title) { this.title = title; }
    get getPrice() { return this.price; }
    set setPrice(price) { this.price = price; }
    get getDescription() { return this.description; }
    set setDescription(description) { this.description = description; }
    get getQuantity() { return this.quantity; }
    set setQuantity(quantity) { this.quantity = quantity; }
    get getReviews() { return this.reviews; }
    set setReviews(reviews) { this.reviews = reviews; }
    get getImages() { return this.images; }
    set setImages(images) { this.images = images; }
    get getDate() { return this.date; }
    set setDate(date) { this.date = date; }
    set MakeBrand(brand) { this.brand = brand; }
    get MakeBrand() { return this.brand; }
}
class Clothes extends AbstractProduct {
    constructor(clothes, product) {
        super(product);
        this.material = clothes.material;
        this.color = clothes.color;
    }
    get getColor() { return this.color; }
    set setColor(color) { this.color = color; }
    get getMaterial() { return this.material; }
    set setMaterial(material) { this.material = material; }
}
class Electronics extends AbstractProduct {
    constructor(electronics, product) {
        super(product);
        this.warranty = electronics.warranty;
        this.power = electronics.power;
    }
    get getWarranty() { return this.warranty; }
    set setWarranty(warranty) { this.warranty = warranty; }
    get getPower() { return this.power; }
    set setPower(power) { this.power = power; }
}
const shoe = new Clothes({ material: "cloth", color: "#abcdef" }, { ID: "1", images: ["test.png"], reviews: [{}, {}, {}], quantity: 1, price: "12",
    title: "shoe", date: new Date(), description: "nothing to say.", brand: "🐼" });
shoe.getPriceForQuantity(12);
shoe.MakeBrand = '';
/*
const laptop = new Electronics(
    {warranty: "high", power: "high"},
    {ID: "1", images: ["test.png"], reviews: [{}, {}, {}], quantity: 1, price: 12,
        title: "shoe", date: new Date(), description: "nothing to say.", brand: "🐼"}
)
*/ 
