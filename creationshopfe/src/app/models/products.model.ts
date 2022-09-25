export class Products {
    id: Number;
    name: String;
    marca: String;
    img: String;
    category:  String;
    price: Number;
    stock: Number;
    quantity: Number;

    constructor(
        id: Number,
        name: String,
        marca: String,
        img: String,
        category: String,
        price: Number,
        stock: Number,
        quantity: Number) {
            
this.id = id;
this.name = name;
this.marca = marca;
this.img = img;
this.category = category;
this.price = price;
this.stock = stock;
this.quantity = quantity;
}
}