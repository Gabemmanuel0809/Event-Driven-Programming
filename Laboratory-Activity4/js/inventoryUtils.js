function searchProducts(products, query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

function filterProductsByCategory(products, category) {
    if (category === "All") {
        return products;
    }

    return products.filter(product => product.category === category);
}

function getStockStatus(stock) {
    if (stock === 0) {
        return "Out of Stock";
    } else if (stock >= 1 && stock <= 5) {
        return "Low Stock";
    } else {
        return "In Stock";
    }
}

function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

function countLowStockProducts(products) {
    return products.filter(product => product.stock >= 1 && product.stock <= 5).length;
}

function countOutOfStockProducts(products) {
    return products.filter(product => product.stock === 0).length;
}

export {
    searchProducts,
    filterProductsByCategory,
    getStockStatus,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
};