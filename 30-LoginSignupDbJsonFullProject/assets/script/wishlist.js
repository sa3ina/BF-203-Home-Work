let tBody = document.querySelector("tbody");
let localFavArr = JSON.parse(localStorage.getItem("fav"));
let wishlistCount = document.querySelector(".wishlistCount");
console.log(localFavArr);
let count = 0;
axios("http://localhost:3000/singers").then((res) => {
  res.data.forEach((data) => {
    let found = localFavArr.find(function (element) {
      return element == data.id;
    });

    if (found) {
      count++;
      tBody.innerHTML += `<tr>
      <th scope="row">${count}</th>
      <td>${data.name}</td>
      <td><img  style="width: 50px; height: 50px;"
      src="${data.image}" /></td>
      <td>${data.age}</td>
      <td>${data.genre}</td>
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
        title: "Are you sure to delete singer from favorites?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted", "Singer has been deleted.", "success");

          // console.log(i);
          localFavArr.splice(i, 1);
          console.log(localFavArr);
          // let singerId = localFavArr.find((id) => id == res.data.id);
          // console.log(singerId);
          // localFavArr = localFavArr.filter((id) => id != singerId);
          localStorage.setItem("fav", JSON.stringify(localFavArr));
          btn.parentElement.parentElement.parentElement.remove();
          location.reload();
          console.log(localFavArr);

          // console.log(data.id);
        }
      });
    });
    console.log(localFavArr);
  });
});

console.log(localFavArr);
// wishlistCount = localFavArr.length();
// wishlistCount.innerHTML = `${wishlistCount}`;
