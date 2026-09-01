import {
    getStockStatus,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
} from "./inventoryUtils.js";

function displayProducts(products) {
    const productList = document.getElementById("productList");
    const noResultsMessage = document.getElementById("noResultsMessage");
    productList.innerHTML = "";

    if (products.length === 0) {
        noResultsMessage.textContent = "No products found";
        noResultsMessage.style.display = "block";
        return;
    }

    noResultsMessage.style.display = "none";

    products.forEach(product => {
        const { id, name, category, price, stock } = product;
        const stockStatus = getStockStatus(stock);
        productList.innerHTML += `
            <div class="product-card" data-id="${id}">
                <h3>${name}</h3>
                <p>Category: ${category}</p>
                <p>Price: ₱${price.toLocaleString()}</p>
                <p>Stock: ${stock}</p>
                <p>Status: ${stockStatus}</p>
            </div>
        `;
    });
}

function displaySummary(products) {
    const totalInventoryValue = document.getElementById("totalInventoryValue");
    const lowStockCount = document.getElementById("lowStockCount");
    const outOfStockCount = document.getElementById("outOfStockCount");
    const totalValue = calculateTotalInventoryValue(products);
    const lowStock = countLowStockProducts(products);
    const outOfStock = countOutOfStockProducts(products);
    totalInventoryValue.textContent = `₱${totalValue.toLocaleString()}`;
    lowStockCount.textContent = lowStock;
    outOfStockCount.textContent = outOfStock;
}

export {
    displayProducts,
    displaySummary
};