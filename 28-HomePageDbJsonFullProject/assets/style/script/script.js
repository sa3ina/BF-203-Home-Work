let card = document.querySelector(".card");
let cardSide = document.querySelector(".cardside");

axios("http://localhost:3000/singers").then((res) => {
  res.data.forEach((data) => {
    cardSide.innerHTML += `<div class="card" style="width: 18rem">
    <div style="width:100%; height:230px; overflow:hidden"><img
    src="${data.image}"
    class="card-img-top"
    alt="..." height="230px"
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
  <button class="heart btn btn-outline-danger" name="${data.id}">
    <i class="fa-solid fa-heart" ></i>
  </button>
</div>
</div>`;
  });
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
  console.log(img);
});
console.log();
