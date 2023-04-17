
let products = JSON.parse(localStorage.getItem('products'))
const productsContainer = document.querySelector("#products_container");
const categoriesButtons = document.querySelectorAll(".btn_category");
const principalTitle = document.querySelector("#principal_title");
let addButton = document.querySelectorAll(".add_product");
const numberOfProducts = document.querySelector(".number_of_products");
const numberOfProductsMobile = document.querySelector(
  ".number_of_products_mobile"
);
let detailProduct = document.querySelectorAll(".detail_product");

function chargeProducts(chosenProducts) {
  productsContainer.innerHTML = "";

  chosenProducts.forEach((product) => {
    const divProduct = document.createElement("div");
    divProduct.classList.add("product");
    divProduct.innerHTML = ` <img
    class="product_image"
    src="${product.image}"
    alt="${product.name}"
  />
            <div class="product_info_container">
                <h3 class="product_name">${product.name}</h3>        
                <p class="product_price">$ ${product.price}</p>
                <button class="add_product" id="${product.id}">Agregar al carrito</button>
                <button class="detail_product" data-id="${product.id}"><a href="detalle_producto.html">Ver detalles</a></button>
            </div>`;

    productsContainer.append(divProduct);
  });
  updateAddButtons();
}

chargeProducts(products);

// let detailProductArray = [];
// detailProduct.forEach((button) => {
//   button.addEventListener("click", redirectToProductDetails);
// });
// function redirectToProductDetails(e) {
//   const productId = e.currentTarget.getAttribute("data-id");
//   const productUrl = `/detalle_producto.html?id=${productId}`;
//    let detailProductArrayElement = products.find(
//     (product) => product.id === productId
//   );
//   detailProductArray.push(detailProductArrayElement);
//   localStorage.setItem("detalles-producto", JSON.stringify(detailProductArray));
//   window.location.href = productUrl;
// }
categoriesButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    categoriesButtons.forEach((button) => button.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "all_products") {
      const categoriesTitle = products.find(
        (product) => product.category.id === e.currentTarget.id
      );
      principalTitle.innerText = categoriesTitle.category.name;

      const productsByCategory = products.filter(
        (product) => product.category.id === e.currentTarget.id
      );
      chargeProducts(productsByCategory);
    } else {
      principalTitle.innerText = "Todos los productos";
      chargeProducts(products);
    }
  });
});

function updateAddButtons() {
  addButton = document.querySelectorAll(".add_product");

  addButton.forEach((button) => {
    button.addEventListener("click", addCart);
  });
}
let productsInCart;
const productsInCartLS = localStorage.getItem("productsInCart");

if (productsInCartLS) {
  productsInCart = JSON.parse(productsInCartLS);
  updateNumberOfProducts();
  updateNumberOfProductsMobile();
} else {
  productsInCart = [];
}

function addCart(e) {
  const idButton = e.currentTarget.id;
  const addedProduct = products.find((product) => product.id === idButton);

  if (productsInCart.some((product) => product.id === idButton)) {
    const index = productsInCart.findIndex(
      (product) => product.id === idButton
    );
    productsInCart[index].quantity++;
  } else {
    addedProduct.quantity = 1;
    productsInCart.push(addedProduct);
  }
  updateNumberOfProducts();
  updateNumberOfProductsMobile();

  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

function updateNumberOfProducts() {
  let newNumber = productsInCart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  numberOfProducts.innerText = newNumber;
}
function updateNumberOfProductsMobile() {
  let newNumber = productsInCart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  numberOfProductsMobile.innerText = newNumber;
}
