import ProductModel from "../models/ProductModel.js";
import ProductView from "../views/ProductView.js";

export default class ProductController {

    constructor() {
        this.model = new ProductModel();
        this.view = new ProductView();
    }

    init() {
        const products = this.model.getProducts();
        this.view.renderProducts(products, this.addToCart.bind(this));
    }

    addToCart(product) {
        alert(`${product.name} added to cart!`);
    }
}
