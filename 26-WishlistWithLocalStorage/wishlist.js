let container = document.querySelector(".container");
console.log(container);
let localFavArr = JSON.parse(localStorage.getItem("fav"));
console.log(localFavArr);
let count;

axios("https://fakestoreapi.com/products").then((res) => {
  res.data.forEach((data) => {
    let found = localFavArr.find(function (element) {
      return element == data.id;
    });
    if (found) {
      container.innerHTML += `<div class="card" style="width: 18rem">
      <div class="card-body">
        <img src="${data.image}" alt="${data.title}">
        <h5 class="card-title">${data.title}</h5>
        <h6>${data.price} $</h6>
       <p>${data.category}</p>
         <p>rating: ${data.rating.rate} <i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i><i class="fa-solid fa-star" style="color: #ffdd00;"></i></p>
        <p>left stock: ${data.rating.rate}</p>
        <a class="basketBtn" href="#" name="${data.id}"><i class="fa-solid fa-2xl fa-basket-shopping"  style="color: #082d78"></i></a>
        <a class="favBtn" href="#" name="${data.id}"><i class="fa-solid fa-2xl fa-heart" style="color: #eb1e1e"></i></a>
      </div>
    </div>`;
    }
    // count = data.price;
    // count += data.price;
  });
  //   console.log(count);
  //     let deleteBasket = document.querySelectorAll(".remove-button");

  //     deleteBasket.forEach((btn, i) => {
  //       btn.addEventListener("click", function () {
  //         btn.parentElement.parentElement.remove();
  //         console.log(i);

  //         localFavArr.splice(i, 1);
  //         console.log(localFavArr);
  //         localStorage.setItem("fav", JSON.stringify(localFavArr));
  //       });
  //       console.log(localFavArr);
  //     });
});
// let removeAll = document.querySelector(".remove-all-button");
// console.log(removeAll);
// removeAll.addEventListener("click", function () {
//   localStorage.clear();
//   ul.innerHTML = "";
// });
