let card = document.querySelector(".card");
let cardSide = document.querySelector(".cardside");
let localFavArr = JSON.parse(localStorage.getItem("fav"));
axios("http://localhost:3000/singers").then((res) => {
  res.data.forEach((data) => {
    cardSide.innerHTML += `<div class="card" style="width: 18rem">
    <div style="width:100%; height:280px; overflow:hidden"><img
    src="${data.image}"
    class="card-img-top"
    alt="..." height="250px"
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
  let favArr = [];
  favBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      let favId = btn.getAttribute("name");
      let favArr = JSON.parse(localStorage.getItem("fav"));
      if (localFavArr) {
        if (!localFavArr.includes(favId)) {
          favArr.push(favId);
          localFavArr.push(favId);
          Swal.fire({
            icon: "success",
            text: "Singer added to favorites!",
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1000,
          });

          this.children[0].classList.replace("fa-regular", "fa-solid");
        } else {
          Swal.fire({
            icon: "error",
            text: "Singer already is in favorites!",
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } else {
        favArr = [];
        localFavArr = [];
      }
      localStorage.setItem("fav", JSON.stringify(favArr));
    });
  });
  //
  let basketBtn = document.querySelectorAll(".favBtn");
  let basketArr = [];
  basketBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let basketId = btn.getAttribute("name");
      let basketArr = JSON.parse(localStorage.getItem("basket"));
      if (localBasketArr) {
        if (!localBasketArr.includes(basketId)) {
          basketArr.push(basketId);
          localBasketArr.push(basketId);
          Swal.fire({
            icon: "success",
            text: "Singer added to favorites!",
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1000,
          });

          // this.children[0].classList.replace("fa-regular", "fa-solid");
        } else {
          Swal.fire({
            icon: "error",
            text: "Singer already is in favorites!",
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } else {
        basketArr = [];
        localBasketArr = [];
      }
      localStorage.setItem("basket", JSON.stringify(basketArr));
    });
  });
});
