let allCards = document.querySelector(".container");
let basketDiv = document.querySelector(".inpBasketDiv");
let favDiv = document.querySelector(".inpFavoriteDiv");
let manCategory = document.querySelector(".man");
let womanCategory = document.querySelector(".woman");
let accessorCategory = document.querySelector(".accessor");
let allProd = document.querySelector(".all");
let electronics = document.querySelector(".electronics");
let filter = document.querySelector("#filter");

let category = "all";
function addProductCard(element) {
  allCards.innerHTML += `<div class="card" style="width: 18rem">
    <div class="card-body">
      <img src="${element.image}" alt="${element.title}">
      <h5 class="card-title">${element.title}</h5>
      <h6>${element.price} $</h6>
      <p>${element.category}</p>
      <p>rating: ${element.rating.rate} <i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i></p>
      <p>left stock: ${element.rating.rate}</p>
      <a class="basketBtn" href="#"><i class="fa-solid fa-2xl fa-basket-shopping" style="color: #082d78"></i></a>
      <a class="favBtn" href="#"><i class="fa-solid fa-2xl fa-heart" style="color: #eb1e1e"></i></a>
    </div>
  </div>`;
}

allProd.addEventListener("click", function () {
  category = "all";
  filterAndDisplayProducts();
});

manCategory.addEventListener("click", function () {
  category = "men's clothing";
  filterAndDisplayProducts();
});

womanCategory.addEventListener("click", function () {
  category = "women's clothing";
  filterAndDisplayProducts();
});

accessorCategory.addEventListener("click", function () {
  category = "jewelery";
  filterAndDisplayProducts();
});

electronics.addEventListener("click", function () {
  category = "electronics";
  filterAndDisplayProducts();
});
function filterAndDisplayProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      allCards.innerHTML = "";
      data.forEach((element) => {
        if (category === "all" || element.category === category) {
          addProductCard(element);
        }
      });
      let basketBtns = document.querySelectorAll(".basketBtn");

      basketBtns.forEach((btn, i) => {
        btn.addEventListener("click", function () {
          fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added to basket",
                showConfirmButton: false,
                timer: 1500,
              });
              basketDiv.innerHTML += `<p> <img src="${data[i].image}" style="width:50px;height:50px"> ${data[i].title} - ${data[i].price}$   <a class="deleteBasketBtn" href="#"
            ><i class="fa-solid fa-trash-can" style="color: #7487aa;"></i></a></p>`;
              let deleteBasketBtns =
                document.querySelectorAll(".deleteBasketBtn");
              deleteBasketBtns.forEach((btn, i) => {
                btn.addEventListener("click", function () {
                  Swal.fire({
                    title: "Are you sure?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire("Deleted", "Item has been deleted.", "success");
                      this.parentElement.remove();
                    }
                  });
                });
              });
            });
        });
      });
      let favBtns = document.querySelectorAll(".favBtn");
      favBtns.forEach((btn, i) => {
        btn.addEventListener("click", function () {
          fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added to favorites",
                showConfirmButton: false,
                timer: 1500,
              });
              favDiv.innerHTML += `<p><img src="${data[i].image}" style="width:50px;height:50px"> ${data[i].title} - ${data[i].price}$   <a class="deleteFavBtn" href="#"
                ><i class="fa-solid fa-trash-can" style="color: #7487aa;"></i></a></p>`;
              let deleteFavBtns = document.querySelectorAll(".deleteFavBtn");
              deleteFavBtns.forEach((btn, i) => {
                btn.addEventListener("click", function () {
                  Swal.fire({
                    title: "Are you sure?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire("Deleted", "Item has been deleted.", "success");
                      this.parentElement.remove();
                    }
                  });
                });
              });
            });
        });
      });
      let cards = document.querySelectorAll(".card");
      cards.forEach((card, i) => {
        card.addEventListener("click", function () {
          Swal.fire({
            title: data[i].title,
            text: data[i].category,
            text: `${data[i].category} (${data[i].rating.count} in stock)`,
            imageUrl: data[i].image,
            imageWidth: 300,
            imageHeight: 400,
            imageAlt: "Custom image",
          });
        });
      });
    });
}

function displayAllProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      allCards.innerHTML = "";
      data.forEach((element) => {
        if (category === "all" || element.category === category) {
          addProductCard(element);
        }
      });
    });
}

displayAllProducts();
filterAndDisplayProducts();
