import AuthController from "./controllers/AuthController.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = new AuthController();
    app.init();
});
