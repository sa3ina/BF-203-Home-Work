let card = document.querySelector(".card");
let cardSide = document.querySelector(".cardside");
let localFavArr = JSON.parse(localStorage.getItem("fav")) || [];
let login = document.querySelector(".log-in");
let register = document.querySelector(".register");
let profile = document.querySelector(".profile");
let logout = document.querySelector(".logout");
let localBasketArr = JSON.parse(localStorage.getItem("basket")) || [];
let quantityBasketSup = 0;
for (let i = 0; i < localBasketArr.length; i++) {
  quantityBasketSup += localBasketArr[i].quantity;
}
let basketSup = document.querySelector(".basketSup");
let favSup = document.querySelector(".favSup");
let quantityFavSup = 0;
quantityFavSup = localFavArr.length + localBasketArr.length;
favSup.textContent = `${quantityFavSup}`;
basketSup.textContent = `${quantityBasketSup}`;
logout.addEventListener("click", function () {
  localStorage.removeItem("users");
  localBasketArr.removeItem("basket");
  localFavArr.removeItem("fav");
  localMealFavArr.removeItem("mealFav");
});

if (JSON.parse(localStorage.getItem("users"))) {
  profile.classList.remove("d-none");
  login.classList.add("d-none");
  register.classList.add("d-none");
  logout.classList.remove("d-none");
}

axios("http://localhost:3000/singers").then((res) => {
  res.data.forEach((data) => {
    cardSide.innerHTML += `<div class="card" style="width: 20rem">
    <div style="width:100%; height:280px; overflow:hidden"><img
    src="${data.image}"
    class="card-img-top"
    alt="..." height="280px"
  /></div>

<div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">
    ${data.nationality}
  </p>
  <a href="details.html?name=singer&id=${data.id}"> <button class="detail btn btn-outline-primary">Detail</button></a>
 
  <button class="trash btn btn-outline-danger">
    <i class="fa-solid fa-trash"></i>
  </button>
  <button class="heart btn favBtn btn-outline-danger" name="${data.id}">
    <i class="fa-regular fa-heart" ></i>
  </button>
</div>
</div>`;
  });
  // let favArr = [];
  let img = document.querySelectorAll(".card-img-top");
  img.forEach((img) => {
    img.addEventListener("mousemove", function () {
      img.style.transform = "scale(1.2)";
      img.style.transition = "transform 0.25s";
    });
    img.addEventListener("mouseout", function () {
      img.style.transform = "scale(1)";
      img.style.transition = "transform 0.25s";
    });
  });

  let favBtn = document.querySelectorAll(".favBtn");
  favBtn.forEach((btn) => {
    let favId = btn.getAttribute("name");
    if (localFavArr.includes(favId)) {
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
  });
  favBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let favId = btn.getAttribute("name");
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
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else {
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';

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
});
