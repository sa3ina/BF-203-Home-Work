let ul = document.querySelector("ul");

let localBasketArr = JSON.parse(localStorage.getItem("basket"));
console.log(localBasketArr);
let count;

axios("https://fakestoreapi.com/products").then((res) => {
  res.data.forEach((data) => {
    let found = localBasketArr.find(function (element) {
      return element == data.id;
    });
    if (found) {
      ul.innerHTML += `<li>
      <div class="item">
        <img src="${data.image}" alt="Item Image" />
        <div class="item-details">
          <h3>${data.title}</h3>
        </div>
      </div>
      <div>
        <button class="plus">+</button>0
        <button class="minus">-</button>
      </div>
      <div>
        <h3>${data.price} $</h3>
        <button class="remove-button">Remove</button>
      </div>
    </li>`;
    }
  });

  let deleteBasket = document.querySelectorAll(".remove-button");

  deleteBasket.forEach((btn, i) => {
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
          btn.parentElement.parentElement.remove();
          console.log(i);
          localBasketArr.splice(i, 1);
          console.log(localBasketArr);
          localStorage.setItem("basket", JSON.stringify(localBasketArr));
        }
      });
    });
    console.log(localBasketArr);
  });
});
let removeAll = document.querySelector(".remove-all-button");
console.log(removeAll);
removeAll.addEventListener("click", function () {
  localStorage.clear();
  ul.innerHTML = "";
});
