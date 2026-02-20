import AuthModel from "../models/AuthModel.js";
import AuthView from "../views/AuthView.js";

export default class AuthController {

    constructor() {
        this.model = new AuthModel();
        this.view = new AuthView();
    }

    init() {
        this.view.bindLogin(this.handleLogin.bind(this));
        this.view.bindRegister(this.handleRegister.bind(this));
    }

    handleLogin(email, password) {
        const user = this.model.login(email, password);
        alert(`Logged in as ${user.email}`);
    }

    handleRegister(name, email, password) {
        const user = this.model.register(name, email, password);
        alert(`Registered successfully: ${user.name}`);
    }
}
