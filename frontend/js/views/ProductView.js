export default class ProductView {
    constructor() {
        this.productContainer = document.getElementById("product-list");
    }

    renderProducts(products, addToCartHandler) {
        this.productContainer.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            `;

            card.querySelector("button")
                .addEventListener("click", () => addToCartHandler(product));

            this.productContainer.appendChild(card);
        });
    }
}
