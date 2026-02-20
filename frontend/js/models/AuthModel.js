export default class AuthModel {

    login(email, password) {
        return { email, password };
    }

    register(name, email, password) {
        return { name, email, password };
    }
}
