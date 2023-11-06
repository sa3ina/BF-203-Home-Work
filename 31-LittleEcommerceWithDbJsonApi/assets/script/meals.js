let card = document.querySelector(".card");
let cardSide = document.querySelector(".cardside");
let localBasketArr = JSON.parse(localStorage.getItem("basket")) || [];
let localMealFavArr = JSON.parse(localStorage.getItem("mealFav")) || [];
let quantityAll = 0;
let basketSup = document.querySelector(".basketSup");
let localFavArr = JSON.parse(localStorage.getItem("fav")) || [];
let login = document.querySelector(".log-in");
let register = document.querySelector(".register");
let profile = document.querySelector(".profile");
let logout = document.querySelector(".logout");
axios("http://localhost:3000/meals").then((res) => {
  res.data.forEach((data) => {
    cardSide.innerHTML += `     <div class="card" style="width: 18rem">
    <div style="width: 100%;height:300px; overflow:hidden"><img
    src="${data.image}"
    class="card-img-top"
    alt="..." height="330px"
  /></div>

<div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">
    ${data.price}$
  </p>
  <a href="details.html?id=${data.id}"> <button class="detail btn btn-outline-primary">Detail</button></a>

  <button class="trash btn btn-outline-danger">
    <i class="fa-solid fa-trash"></i>
  </button>
  <button class="heart btn btn-outline-primary" name="${data.id}">
  <i class="fa-solid basketBtn fa-basket-shopping" style="color: #397ef3;"></i>
  </button>
  <button class="heart btn favBasketBtn btn-outline-danger" name="${data.id}">
  <i class="fa-regular fa-heart" ></i>
</button>
</div>
</div>`;
  });
  let basketBtn = document.querySelectorAll(".basketBtn");
  basketBtn.forEach((btn) => {
    btn.parentElement.addEventListener("click", function () {
      const mealId = this.getAttribute("name");
      let basketArr = JSON.parse(localStorage.getItem("basket")) || [];

      const existingMeal = basketArr.find((meal) => meal.id === mealId);
      Swal.fire({
        icon: "success",
        text: "Meal added to basket!",
        position: "bottom-right",
        showConfirmButton: false,
        timer: 1000,
      });
      if (existingMeal) {
        existingMeal.quantity += 1;
      } else {
        basketArr.push({ id: mealId, quantity: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(basketArr));

      console.log(basketArr);
    });
  });
  // });
  let mealFavBtn = document.querySelectorAll(".favBasketBtn");
  mealFavBtn.forEach((btn) => {
    let mealFavId = btn.getAttribute("name");
    if (localMealFavArr.includes(mealFavId)) {
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
  });
  mealFavBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const mealFavId = this.getAttribute("name");

      let mealFavArr = JSON.parse(localStorage.getItem("mealFav")) || [];
      console.log(mealFavArr);
      if (mealFavArr.includes(mealFavId)) {
        mealFavArr = mealFavArr.filter((id) => id !== mealFavId);
        Swal.fire({
          icon: "error",
          text: "Meal is removed from favorites!",
          position: "bottom-right",
          showConfirmButton: false,
          timer: 1000,
        });
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else {
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';

        mealFavArr.push(mealFavId);
        Swal.fire({
          icon: "success",
          text: "Meal added to favorites!",
          position: "bottom-right",
          showConfirmButton: false,
          timer: 1000,
        });
      }

      localStorage.setItem("mealFav", JSON.stringify(mealFavArr));
      console.log(mealFavArr);
    });
  });
});
localBasketArr.forEach((element) => {
  quantityAll += element.quantity;
});
let quantityBasketSup = 0;
for (let i = 0; i < localBasketArr.length; i++) {
  quantityBasketSup += localBasketArr[i].quantity;
}
if (JSON.parse(localStorage.getItem("users"))) {
  profile.classList.remove("d-none");
  login.classList.add("d-none");
  register.classList.add("d-none");
  logout.classList.remove("d-none");
}
logout.addEventListener("click", function () {
  localStorage.removeItem("users");
});
basketSup.textContent = `${quantityBasketSup}`;
let favSup = document.querySelector(".favSup");
let quantityFavSup = 0;
quantityFavSup = localFavArr.length + localBasketArr.length;
favSup.textContent = `${quantityFavSup}`;
