import ShopController from "./controllers/ShopController.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new ShopController();
    app.init();
});
