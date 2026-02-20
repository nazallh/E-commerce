export default class ShopModel {
    constructor() {
        this.products = [
            { id: 1, name: "iPhone 13", price: 899, image: "assets/images/iphone13.jpg" },
            { id: 2, name: "Nike Shoes", price: 120, image: "assets/images/nike.jpg" },
            { id: 3, name: "Sony Headphones", price: 120, image: "assets/images/sony1.jpg" },
            { id: 4, name: "Smartwatch", price: 199, image: "assets/images/smartwatch.jpg" },
            { id: 5, name: "Coolpix Camera", price: 220, image: "assets/images/coolplix.jpg" },
            { id: 6, name: "Dell Laptop", price: 229, image: "assets/images/dell.jpg" }
        ];
    }

    getProducts() {
        return this.products;
    }

    searchProducts(query) {
        return this.products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}
