let card = document.querySelector(".card");
let cardSide = document.querySelector(".cardside");

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
</div>
</div>`;
  });
  let basketBtn = document.querySelectorAll(".basketBtn");
  basketBtn.forEach((btn) => {
    btn.parentElement.addEventListener("click", function () {
      const mealId = this.getAttribute("name");
      let basketArr = JSON.parse(localStorage.getItem("basket")) || [];

      const existingMeal = basketArr.find((meal) => meal.id === mealId);

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
