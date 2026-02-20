import ShopModel from "../models/ShopModel.js";
import ShopView from "../views/ShopView.js";

export default class ShopController {

    constructor() {
        this.model = new ShopModel();
        this.view = new ShopView();
    }

    init() {
        this.view.renderProducts(this.model.getProducts());
        this.view.bindSearch(this.handleSearch.bind(this));
    }

    handleSearch(query) {
        const results = this.model.searchProducts(query);
        this.view.renderProducts(results);
    }
}
