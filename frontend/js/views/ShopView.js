export default class ShopView {
    constructor() {
        this.container = document.getElementById("shop-products");
        this.searchInput = document.getElementById("searchInput");
    }

    renderProducts(products) {
        this.container.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            `;

            this.container.appendChild(card);
        });
    }

    bindSearch(handler) {
        this.searchInput.addEventListener("input", e => {
            handler(e.target.value);
        });
    }
}
