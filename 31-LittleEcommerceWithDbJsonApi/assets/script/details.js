let container = document.querySelector(".container");
let localFavArr = JSON.parse(localStorage.getItem("fav")) || [];
let localMealFavArr = JSON.parse(localStorage.getItem("mealFav"));
let id = new URLSearchParams(location.search).get("id");
let name = new URLSearchParams(location.search).get("name");
let login = document.querySelector(".log-in");
let register = document.querySelector(".register");
let profile = document.querySelector(".profile");
let logout = document.querySelector(".logout");
if (JSON.parse(localStorage.getItem("users"))) {
  profile.classList.remove("d-none");
  login.classList.add("d-none");
  register.classList.add("d-none");
  logout.classList.remove("d-none");
}
logout.addEventListener("click", function () {
  localStorage.removeItem("users");
});
if (name == "singer") {
  axios("http://localhost:3000/singers").then((res) => {
    let singer = res.data.find((item) => {
      if (item.id == id) {
        return item;
      }
    });
    container.innerHTML = `<div class="card" style="width: 40%">
        <img
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is 
            ${singer.nationality}
          </p>
          <p class="card-text">Age:
            ${singer.age}
          </p>
          <p class="card-text">Genre:
            ${singer.genre}
          </p>
          <a href="index.html?id=${singer.id}"> <button class="detail btn btn-outline-primary">Home</button></a>
          <button class="heart btn favBtn btn-outline-danger" name="${singer.id}">
    <i class="fa-regular fa-heart" ></i>
  </button>
 
        </div>
        </div>`;

    let favBtn = document.querySelector(".favBtn");
    let favId = favBtn.getAttribute("name");
    if (localFavArr.includes(favId)) {
      favBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
    favBtn.addEventListener("click", function () {
      let favId = favBtn.getAttribute("name");
      let favArr = JSON.parse(localStorage.getItem("fav")) || [];

      if (favArr.includes(favId)) {
        favArr = favArr.filter((id) => id !== favId);
        Swal.fire({
          icon: "error",
          text: "Singer is removed from favorites!",
          position: "bottom-right",
          showConfirmButton: false,
          timer: 1000,
        });
        favBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else {
        favBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';

        favArr.push(favId);
        Swal.fire({
          icon: "success",
          text: "Singer added to favorites!",
          position: "bottom-right",
          showConfirmButton: false,
          timer: 1000,
        });
      }

      localStorage.setItem("fav", JSON.stringify(favArr));
    });
  });
} else {
  axios("http://localhost:3000/meals").then((res) => {
    let meal = res.data.find((item) => {
      if (item.id == id) {
        return item;
      }
    });
    container.innerHTML = `<div class="card" style="width: 40%">
        <img
          src="${meal.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${meal.name}</h5>
          
          <p class="card-text">Price:
          <strong>
            ${meal.price} $ </strong>
          </p>
          <p class="card-text">Ingredients:
            ${meal.ingredients} 
          </p>
          <a href="meals.html?id=${meal.id}"> <button class="detail btn btn-outline-primary">Home</button></a>
          <button class="heart btn favBasketBtn btn-outline-danger" name="${meal.id}">
          <i class="fa-regular fa-heart" ></i>
        </button>
        <button class="heart btn btn-outline-primary" name="${meal.id}">
        <i class="fa-solid basketBtn fa-basket-shopping" style="color: #397ef3;"></i>
        </button>
        </div>
        </div>`;
    let basketBtn = document.querySelector(".basketBtn");
    basketBtn.parentElement.addEventListener("click", function () {
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
    });
    let mealFavBtn = document.querySelectorAll(".favBasketBtn");

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
        if (localMealFavArr.includes(mealFavId)) {
          btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        }
      });
    });
  });
}
