let tBody = document.querySelector("tbody");
let removeAll = document.querySelector(".removeAll");
let basketCount = document.querySelector(".basketCount");
let localBasketArr = JSON.parse(localStorage.getItem("basket"));
console.log(localBasketArr);
let count = 0;
removeAll.addEventListener("click", function () {
  localStorage.removeItem("basket");
  location.reload();
});
axios("http://localhost:3000/meals").then((res) => {
  res.data.forEach((data) => {
    let found = localBasketArr.find(function (element) {
      return element == data.id;
    });
    // let count = 0;
    if (found) {
      count++;
      tBody.innerHTML += `<tr>
      <th scope="row">${count}</th>
      <td>${data.name}</td>
      <td><img  style="width: 50px; height: 50px;"
      src="${data.image}" /></td>
      <td>${data.price}</td>
      <td>${count}</td>
      <td>${data.price}</td>
      <td><button type="button" class="btn btn-success"><i class="fa-solid fa-plus" style="color: #white;"></i></button></td>
      <td><button type="button" class="btn btn-danger"><i class="fa-solid fa-minus"></i></button></td>
      <td><button class="trash btn btn-outline-danger">
      <i class="fa-solid fa-trash"></i>
    </button></td>  
      </tr>
   `;
    }
  });
  let deleteBasket = document.querySelectorAll(".fa-trash");

  deleteBasket.forEach((btn, i) => {
    btn.parentElement.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure to delete meal from basket?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted", "Meal has been deleted.", "success");

          // console.log(i);
          localBasketArr.splice(i, 1);
          console.log(localBasketArr);
          // let singerId = localBasketArr.find((id) => id == res.data.id);
          // console.log(singerId);
          // localBasketArr = localBasketArr.filter((id) => id != singerId);
          localStorage.setItem("basket", JSON.stringify(localBasketArr));
          btn.parentElement.parentElement.parentElement.remove();
          //   location.reload();
          console.log(localBasketArr);

          // console.log(data.id);
        }
      });
    });
    console.log(localBasketArr);
  });
});

console.log(localBasketArr);
