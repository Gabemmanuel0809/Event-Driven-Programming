import { products } from "./products.js";
import { searchProducts, filterProductsByCategory } from "./inventoryUtils.js";
import { displayProducts, displaySummary} from "./display.js";

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

displayProducts(products);
displaySummary(products);

searchBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    const category = categoryFilter.value;
    let results = searchProducts(products, query);
    results = filterProductsByCategory(results, category);
    displayProducts(results);
});

resetBtn.addEventListener("click", function() {
    searchInput.value = "";
    categoryFilter.value = "All";
    displayProducts(products);
});