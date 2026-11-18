// Mini Store Project
const list = document.querySelector("#list");
const filterPrice = document.querySelector("#price_filter");
const filterBtn = document.querySelector("#filterBtn");
const resetBtn = document.querySelector("#resetBtn");
const stockCheck = document.querySelector("#stock_filter");
const details = document.querySelector("#details");

let selectedId = null;

const products = [
    { id: 1, name: "Notebook", price: 300, stock: 12, productImg:"https://sugarpaper.com/cdn/shop/files/NBK75_LargeSpiralNotebook_Black_Cover.jpg?v=1702681330&width=990" },
    { id: 2, name: "Pen Pack", price: 150, stock: 0, productImg:"https://www.starquik.com/cdn/shop/files/SQ164252_1_54626c37-9b8c-43ed-93e5-6508bff3d057.jpg?v=1785496132" },
    { id: 3, name: "Backpack", price: 2500, stock: 5, productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAdmTjbU-t5yXc1PZBsiKhTdbmg1KGrVI7tX7VPY5t-ECWpOGXsFB3Dh5&s=10" },
    { id: 4, name: "Water Bottle", price: 700, stock: 8,productImg:"https://i5.walmartimages.ca/asr/34267fb5-fd4a-460e-8998-4d68909b2bbf.b31008e1a2a7bba4c3ae498b22edc03b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" },
    { id: 5, name: "Calculator", price: 1200, stock: 3, productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNV6wpYPKsdc11lUyDgB4nuEgQaYfVF85mw-2LxEYAhc-qudptuu9GXPxD&s=10" },
];

//list of products as cards
function renderProducts(items) {
    list.innerHTML = "";

    if (items.length === 0) {
        list.innerHTML = `<li class="empty">No products found</li>`;
        return;
    }

    items.forEach((p) => {
        const li = document.createElement("li");
        li.className = "card";
        li.dataset.id = p.id;
        if (p.id === selectedId) li.classList.add("selected");

        const inStock = p.stock > 0;
        const image = p.productImg
            ? `<img src="${p.productImg}" alt="${p.name}">`
            : `<div class="img-placeholder">${p.name[0]}</div>`;

        li.innerHTML = `
            ${image}
            <div class="card-body">
                <h3>${p.name}</h3>
                <p class="price">KES ${p.price}</p>
                <span class="badge ${inStock ? "in" : "out"}">
                    ${inStock ? p.stock + " in stock" : "Out of stock"}
                </span>
            </div>`;
        list.append(li);
    });
}

// price and stock filters combined
function applyFilters() {
    let result = products;

    if (filterPrice.value.trim() !== "") {
        result = result.filter((p) => p.price <= Number(filterPrice.value));
    }
    if (stockCheck.checked) {
        result = result.filter((p) => p.stock > 0);
    }
    renderProducts(result);
}

// Show the selected product's details
function showDetails(product) {
    details.classList.remove("hidden");
    details.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: KES ${product.price}</p>
        <p>${product.stock > 0 ? product.stock + " available" : "Currently out of stock"}</p>`;
}

filterBtn.addEventListener("click", applyFilters);
stockCheck.addEventListener("change", applyFilters);

resetBtn.addEventListener("click", () => {
    filterPrice.value = "";
    stockCheck.checked = false;
    selectedId = null;
    details.classList.add("hidden");
    renderProducts(products);
});

// One listener for all cards
list.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    selectedId = Number(card.dataset.id);
    showDetails(products.find((p) => p.id === selectedId));
    applyFilters(); // redraw so the "selected" highlight updates
});

renderProducts(products);