import { products } from "./data.js";

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = "Price: $" + product.price;
    document.getElementById("productDescription").textContent =
        "Description: " + product.description;
}
