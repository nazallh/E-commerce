export default class ProductModel {
    constructor() {
        this.products = [
            { id: 1, name: "iPhone 13", price: 699, image: "assets/images/iphone.jpg" },
            { id: 2, name: "Nike Shoes", price: 120, image: "assets/images/nike.jpg" },
            { id: 3, name: "Sony Headphones", price: 150, image: "assets/images/sony1.jpg" },
            { id: 4, name: "Dell Laptop", price: 800, image: "assets/images/dell.jpg" }
        ];
    }

    getProducts() {
        return this.products;
    }
}
