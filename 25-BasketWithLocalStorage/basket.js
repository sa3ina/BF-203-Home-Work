// let cart = document.querySelector(".cart");

let basketBtns = document.querySelectorAll(".basketBtn");
let ul = document.querySelector("ul");

let productBox = document.querySelector(".products");
let base_url = "http://localhost:3000/";
let arr = [];
// ul.innerHTML = "";
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     // let arr = JSON.parse(localStorage.getItem("cart"));
//     // console.log(arr);
//     console.log(data);
//     console.log(basketBtns);

//     basketBtns.forEach((btn) => {
//       console.log(btn);
//       btn.addEventListener("click", function () {
//         ul.innerHTML += ` <li>
//             <div class="item">
//               <img src="https://via.placeholder.com/50" alt="Item Image" />
//               <div class="item-details">
//                 <h3>Product Name 1</h3>
//               </div>
//             </div>
//             <div>
//               <button class="plus">+</button>0
//               <button class="minus">-</button>
//             </div>
//             <div>
//               <h3>$10.00</h3>
//               <button class="remove-button">Remove</button>
//             </div>
//           </li>`;
//       });
//     });
//   });
let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let arr = JSON.parse(localStorage.getItem("cart"));
    console.log(arr);
    console.log(data);
    data.forEach((element) => {
      arr.forEach((id) => {
        if (element.id == id) {
          // ul.innerHTML = "";
          ul.innerHTML += ` <li>
                //             <div class="item">
                //               <img src="https://via.placeholder.com/50" alt="Item Image" />
                //               <div class="item-details">
                //                 <h3>Product Name 1</h3>
                //               </div>
                //             </div>
                //             <div>
                //               <button class="plus">+</button>0
                //               <button class="minus">-</button>
                //             </div>
                //             <div>
                //               <h3>$10.00</h3>
                //               <button class="remove-button">Remove</button>
                //             </div>
                //           </li>`;
        }
      });
    });
  });
productBox.addEventListener("click", function (event) {
  if (event.target.classList.contains("basketBtn")) {
    const productId = event.target.getAttribute("data-id");
    const selectedProduct = data.find((product) => product.id == productId);

    if (selectedProduct) {
      cart.push(selectedProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      // You can also update the cart display here.
    }
  }
});
