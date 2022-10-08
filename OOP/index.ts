import IProduct from "./@modules/interfaces/IProduct";
import IClothes from "./@modules/interfaces/IClothes";
import IElectronics from "./@modules/interfaces/IElectronics";

class AbstractProduct {
    public ID: string;
    public title: string;
    public price: string;
    public description: string;
    public quantity: number;
    public reviews: Array<object>;
    public images: Array<string>;
    public date: object;
    public brand: string;

    constructor(product: IProduct) {
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

    getPriceForQuantity(amount: number) {
        const result = this.price.replace(/([A-z]+|[$€£¥])/gm, '');
        console.log(+result * amount);
    }

    get getId() { return this.ID }
    set setId(ID: string) { this.ID = ID; }

    get getTitle() { return this.title }
    set setTitle(title: string) { this.title = title }

    get getPrice(): string { return this.price }
    set setPrice(price: string) { this.price = price; }

    get getDescription() { return this.description }
    set setDescription(description: string) { this.description = description; }

    get getQuantity() { return this.quantity; }
    set setQuantity(quantity: number) { this.quantity = quantity; }

    get getReviews() { return this.reviews; }
    set setReviews(reviews: object[]) { this.reviews = reviews; }

    get getImages() { return this.images; }
    set setImages(images: string[]) { this.images = images; }

    get getDate() { return this.date; }
    set setDate(date: object) { this.date = date; }

    set MakeBrand(brand: string) { this.brand = brand; }
    get MakeBrand(): string { return this.brand; }
}

class Clothes extends AbstractProduct{
    public material: string;
    public color: string;
    constructor(clothes: IClothes, product: IProduct) {
        super(product);
        this.material = clothes.material;
        this.color = clothes.color;
    }

    get getColor() { return this.color; }
    set setColor(color: string) { this.color = color; }

    get getMaterial() { return this.material; }
    set setMaterial(material: string) { this.material = material; }
}

class Electronics extends AbstractProduct{
    public warranty: string;
    public power: string;
    constructor(electronics: IElectronics, product: IProduct) {
        super(product);
        this.warranty = electronics.warranty;
        this.power = electronics.power;
    }

    get getWarranty() { return this.warranty; }
    set setWarranty(warranty: string) { this.warranty = warranty; }

    get getPower() { return this.power; }
    set setPower(power: string) { this.power = power; }
}

const shoe = new Clothes(
    {material: "cloth", color: "#abcdef"},
    {ID: "1", images: ["test.png"], reviews: [{}, {}, {}], quantity: 1, price: "12",
        title: "shoe", date: new Date(), description: "nothing to say.", brand: "🐼"}
);

shoe.getPriceForQuantity(12);
shoe.MakeBrand = '';

/*
const laptop = new Electronics(
    {warranty: "high", power: "high"},
    {ID: "1", images: ["test.png"], reviews: [{}, {}, {}], quantity: 1, price: 12,
        title: "shoe", date: new Date(), description: "nothing to say.", brand: "🐼"}
)
*/