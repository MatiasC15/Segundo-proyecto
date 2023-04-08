let productsInCart = JSON.parse(localStorage.getItem("products"));

const emptyCart = document.querySelector("#empty_cart");
const productsContainer = document.querySelector("#products_container");
const cartActions = document.querySelector("#cart_actions");
const numberOfProducts = document.querySelector("#number_of_products");
const deleteAllButton = document.querySelector("#deleteAll");
const totalPrice = document.querySelector("#total");
const buyBtn = document.querySelector("#buy_btn")

function updateProductsInCart() {
  if (productsInCart && productsInCart.length > 0) {

    numberOfProducts.classList.add("disabled");
    emptyCart.classList.add("disabled");
    productsContainer.classList.remove("disabled");
    cartActions.classList.remove("disabled");

    productsContainer.innerHTML = "";

    productsInCart.forEach((product) => {
      const divCartProduct = document.createElement("div");
      divCartProduct.classList.add("cart_product");
      divCartProduct.innerHTML = `  
            <img
            class="cart_product_image"
              src="${product.image}"
              alt="${product.name}"
            />
            <div class="cart_product_name">
              <small>Titulo</small>
              <h3>${product.name}</h3>
            </div>
            <div class="cart_product_quantity">
              <small>Cantidad</small>
              <p>${product.quantity}</p>
            </div>
            <div class="cart_product_price">
              <small>Precio</small>
              <p>$ ${product.price}</p>
            </div>
            <div class="cart_product_subtotal">
              <small>Subtotal</small>
              <p>$ ${product.quantity * product.price}</p>
            </div>
            <div >
              <button class="erase_btn" id="${
                product.id
              }"><i class="bi bi-trash3"></i></button>
            </div>
          `;
      productsContainer.append(divCartProduct);
    });
  } else {
    emptyCart.classList.remove("disabled");
     numberOfProducts.classList.add("disabled");
    productsContainer.classList.add("disabled");
    cartActions.classList.add("disabled");
  }
  updateEraseButtons();
  updateTotalPrice()
}
updateProductsInCart();

function updateEraseButtons() {
  eraseButton = document.querySelectorAll(".erase_btn");

  eraseButton.forEach((button) => {
    button.addEventListener("click", eraseFromCart);
  });
}

function eraseFromCart(e) {
  const idButton = e.currentTarget.id;
  const index = productsInCart.findIndex(product => product.id === idButton);
    productsInCart.splice(index, 1);
    updateProductsInCart();

    localStorage.setItem("products", JSON.stringify(productsInCart));

}
deleteAllButton.addEventListener("click", deleteAll)

function deleteAll() {
productsInCart.length = 0;
localStorage.setItem("products" , JSON.stringify(productsInCart))
updateProductsInCart()
}
function updateTotalPrice(){
    calculatedTotal = productsInCart.reduce((acc, product) => acc + (product.price  *  product.quantity), 0) 
    total.innerText = `$ ${calculatedTotal}`
}
buyBtn.addEventListener("click", buyAll)

function buyAll() {
    Swal.fire({
      title: '¿Estás seguro de que deseas comprar todos los productos en el carrito?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, comprar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        productsInCart.length = 0;
        localStorage.setItem("products", JSON.stringify(productsInCart));
        productsContainer.classList.add("disabled");
        cartActions.classList.add("disabled");
        emptyCart.classList.remove("disabled");
        Swal.fire(
          '¡Compra realizada!',
          'Gracias por tu compra.',
          'success'
        );
      }
    });
  }