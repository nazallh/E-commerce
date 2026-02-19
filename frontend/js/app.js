import ProductController from "./controllers/ProductController.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new ProductController();
    app.init();
});
