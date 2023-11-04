let tBody = document.querySelector("tbody");
let removeAll = document.querySelector(".removeAll");
let sum = document.querySelector(".sum");
let localBasketArr = JSON.parse(localStorage.getItem("basket"));

let total = 0;
let count = 0;
// let deleteBasket = document.querySelectorAll(".deleteBasket");
axios("http://localhost:3000/meals").then((res) => {
  tBody.innerHTML = "";
  res.data.forEach((data) => {
    let found = localBasketArr.find((element) => element.id == data.id);
    if (found) {
      count++;
      let quantity = found.quantity;
      let totalPrice = data.price * quantity;
      let sumPrice = 0;

      total += totalPrice;
      sumPrice += Math.round(total);
      sum.innerHTML = `Total sum: ${sumPrice} $`;
      tBody.innerHTML += `<tr>
        <th scope="row">${count}</th>
        <td>${data.name}</td>
        <td><img style="width: 50px; height: 50px;" src="${data.image}" /></td>
        <td>${data.price}$</td>
        <td>${quantity}</td>
        <td>${data.price * quantity}$</td>
        <td><button type="button" class="btn btn-success increase" name="${
          data.id
        }"><i class="fa-solid fa-plus" style="color: #white;"></i></button></td>
        <td><button type="button" class="btn btn-danger decrease" name="${
          data.id
        }"><i class="fa-solid fa-minus " "></i></button></td>
        <td><button class="trash deleteBasket btn btn-outline-danger" name="${
          data.id
        }">
          <i class="fa-solid fa-trash"></i>
        </button></td> 
      </tr>`;
    }
  });
  let deleteBasket = document.querySelectorAll(".deleteBasket");
  let increase = document.querySelectorAll(".increase");
  // console.log(increase);
  increase.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("sskl");
      const mealId = btn.getAttribute("name");
      console.log(mealId);
      let found = localBasketArr.find((item) => item.id == mealId);
      if (found) {
        found.quantity++;
        localStorage.setItem("basket", JSON.stringify(localBasketArr));
        // location.reload();
      }
    });
  });
  let decrease = document.querySelectorAll(".decrease");
  // console.log(decrease);
  decrease.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mealId = btn.getAttribute("name");
      console.log(mealId);
      let found = localBasketArr.find((item) => item.id == mealId);
      if (found && found.quantity > 0) {
        found.quantity--;
        localStorage.setItem("basket", JSON.stringify(localBasketArr));
        // location.reload();
      }
    });
  });
  deleteBasket.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const mealId = btn.getAttribute("name");
      localBasketArr = localBasketArr.filter((item) => item.id !== mealId);
      localStorage.setItem("basket", JSON.stringify(localBasketArr));
      // location.reload();
    });
  });
  let checkout = document.querySelector(".checkout");
  checkout.addEventListener("click", function (e) {
    e.preventDefault();
    let userInfo = JSON.parse(localStorage.getItem("users"));
    if (userInfo) {
      axios("http://localhost:3000/users").then((res) =>
        res.data.forEach((data) => {
          // let balance=
          let user = res.data.find((user) => (user.id = userInfo.usersId));
          console.log(user);
          console.log(user.id);
          let balance = data.balance;
          console.log(balance);
          console.log(total);
          if (balance > total) {
            balance = balance - total;
            console.log(balance);
          } else {
            console.log("not enough balance");
          }
        })
      );
    }
    // console.log(userInfo);
  });
});

removeAll.addEventListener("click", function () {
  localStorage.removeItem("basket");
  // location.reload();
});
