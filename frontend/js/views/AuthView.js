export default class AuthView {

    bindLogin(handler) {
        document
            .getElementById("login-form")
            .addEventListener("submit", event => {
                event.preventDefault();
                const email = event.target[0].value;
                const password = event.target[1].value;
                handler(email, password);
            });
    }

    bindRegister(handler) {
        document
            .getElementById("register-form")
            .addEventListener("submit", event => {
                event.preventDefault();
                const name = event.target[0].value;
                const email = event.target[1].value;
                const password = event.target[2].value;
                handler(name, email, password);
            });
    }
}
