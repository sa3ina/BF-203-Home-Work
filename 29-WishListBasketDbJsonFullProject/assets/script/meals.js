let card = document.querySelector(".card");
let cardSide = document.querySelector(".cardside");
// let count = localStorage.setItem("countBasket", JSON.stringify(count));

let localBasketArr = JSON.parse(localStorage.getItem("basket"));

axios("http://localhost:3000/meals").then((res) => {
  res.data.forEach((data) => {
    cardSide.innerHTML += ` <div class="card" style="width: 18rem">
    <div style="width:100% height:300px" overflow:hidden"><img
    src="${data.image}"
    class="card-img-top"
    alt="..." height="330px"
  /></div>

<div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">
    ${data.nationality}
  </p>
  <a href="details.html?id=${data.id}"> <button class="detail btn btn-outline-primary">Detail</button></a>
 
  <button class="trash btn btn-outline-danger">
    <i class="fa-solid fa-trash"></i>
  </button>
  <button class="heart btn favBtn btn-outline-primary" name="${data.id}">
  <i class="fa-solid basketBtn fa-basket-shopping" style="color: #397ef3;"></i>
  </button>
</div>
</div>`;
  });
  let basketBtn = document.querySelectorAll(".basketBtn");

  let basketArr = [];
  basketBtn.forEach((btn) => {
    btn.parentElement.addEventListener("click", function () {
      let basketId = btn.parentElement.getAttribute("name");
      console.log(basketId);
      //   localBasketArr = [];
      let basketArr = JSON.parse(localStorage.getItem("basket"));
      if (localBasketArr) {
        if (!localBasketArr.includes(basketId)) {
          basketArr.push(basketId);
          localBasketArr.push(basketId);
          Swal.fire({
            icon: "success",
            text: "Meal added to basket!",
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1000,
          });
          //   count++;
          // this.children[0].classList.replace("fa-regular", "fa-solid");
        } else {
          Swal.fire({
            icon: "success",
            text: "Meal added to basket again!",
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1000,
          });
          basketArr.push(basketId);
          localBasketArr.push(basketId);
          //   count++;
        }
      } else {
        basketArr = [];
        localBasketArr = [];
      }
      //   console.log(count);
      localStorage.setItem("basket", JSON.stringify(basketArr));
    });
  });
});
