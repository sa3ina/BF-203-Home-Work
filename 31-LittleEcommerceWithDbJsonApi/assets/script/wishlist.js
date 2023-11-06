let singerBody = document.querySelector(".singerBody");
let localFavArr = JSON.parse(localStorage.getItem("fav")) || [];
let localMealFavArr = JSON.parse(localStorage.getItem("mealFav")) || [];
let wishlistCount = document.querySelector(".wishlistCount");
let mealBody = document.querySelector(".mealBody");
let login = document.querySelector(".log-in");
let register = document.querySelector(".register");
let profile = document.querySelector(".profile");
let logout = document.querySelector(".logout");
console.log(localFavArr);
let count = 0;
let countMeal = 0;
let quantityAll = 0;
let localBasketArr = JSON.parse(localStorage.getItem("basket")) || [];
localBasketArr.forEach((element) => {
  quantityAll += element.quantity;
});
let quantityBasketSup = 0;
for (let i = 0; i < localBasketArr.length; i++) {
  quantityBasketSup += localBasketArr[i].quantity;
}
let basketSup = document.querySelector(".basketSup");
// basketSup.textContent = `${quantityAll}`;
let favSup = document.querySelector(".favSup");
let quantityFavSup = 0;
quantityFavSup = localFavArr.length + localBasketArr.length;
favSup.textContent = `${quantityFavSup}`;
if (JSON.parse(localStorage.getItem("users"))) {
  profile.classList.remove("d-none");
  login.classList.add("d-none");
  register.classList.add("d-none");
  logout.classList.remove("d-none");
}
logout.addEventListener("click", function () {
  localStorage.removeItem("users");
});
basketSup.innerHTML = `${quantityBasketSup}`;
axios("http://localhost:3000/singers").then((res) => {
  res.data.forEach((data) => {
    let found = localFavArr.find(function (element) {
      return element == data.id;
    });

    if (found) {
      count++;
      singerBody.innerHTML += `<tr>
      <th scope="row">${count}</th>
      <td>${data.name}</td>
      <td><img  style="width: 50px; height: 50px;"
      src="${data.image}" /></td>
      <td>${data.age}</td>
      <td>${data.genre}</td>
      <td><button class="trash btn btn-outline-danger">
      <i class="fa-solid fa-trash favDelete"></i>
    </button></td>  
      </tr>
   `;
    }
  });
  let deleteBasket = document.querySelectorAll(".favDelete");

  deleteBasket.forEach((btn, i) => {
    btn.parentElement.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure to delete singer from favorites?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted", "Singer has been deleted.", "success");
          localFavArr.splice(i, 1);
          console.log(localFavArr);

          localStorage.setItem("fav", JSON.stringify(localFavArr));
          btn.parentElement.parentElement.parentElement.remove();
          location.reload();
          console.log(localFavArr);
        }
      });
    });
    console.log(localFavArr);
  });
});

console.log(localFavArr);

axios("http://localhost:3000/meals").then((res) => {
  res.data.forEach((data) => {
    let found2 = localMealFavArr.find(function (element2) {
      return element2 == data.id;
    });

    if (found2) {
      countMeal++;

      mealBody.innerHTML += `<tr>
          <th scope="row">${countMeal}</th>
          <td>${data.name}</td>
          <td><img  style="width: 50px; height: 50px;"
          src="${data.image}" /></td>
          <td>${data.price}</td>
         
          <td><button class="trash btn btn-outline-danger" name="${data.id}">
          <i class="fa-solid fa-trash favMealDelete"></i>
        </button></td>
        <td>  <button class="heart btn btn-outline-primary" name="${data.id}">
        <i class="fa-solid basketBtn fa-basket-shopping" style="color: #397ef3;"></i>
        </button></td>
          </tr>
       `;
    }
  });
  let deleteBasket = document.querySelectorAll(".favMealDelete");
  let basketBtn = document.querySelectorAll(".basketBtn");
  deleteBasket.forEach((btn, i) => {
    btn.parentElement.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure to delete meal from favorites?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted", "Meal has been deleted.", "success");
          localMealFavArr.splice(i, 1);
          localStorage.setItem("mealFav", JSON.stringify(localMealFavArr));
          btn.parentElement.parentElement.parentElement.remove();
          // location.reload();
        }
      });
    });
  });
  basketBtn.forEach((btn, i) => {
    btn.parentElement.addEventListener("click", function () {
      localBasketArr.push();
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
});
// });
