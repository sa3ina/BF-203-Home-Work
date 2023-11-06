let tBody = document.querySelector("tbody");
let removeAll = document.querySelector(".removeAll");
let sum = document.querySelector(".sum");
let localBasketArr = JSON.parse(localStorage.getItem("basket")) || [];
let quantityAll = 0;
let localFavArr = JSON.parse(localStorage.getItem("fav")) || [];
localBasketArr.forEach((element) => {
  quantityAll += element.quantity;
});
let login = document.querySelector(".log-in");
let register = document.querySelector(".register");
let profile = document.querySelector(".profile");
let logout = document.querySelector(".logout");
if (JSON.parse(localStorage.getItem("users"))) {
  profile.classList.remove("d-none");
  login.classList.add("d-none");
  register.classList.add("d-none");
  logout.classList.remove("d-none");
}
logout.addEventListener("click", function () {
  localStorage.removeItem("users");
});
let quantityBasketSup = 0;
for (let i = 0; i < localBasketArr.length; i++) {
  quantityBasketSup += localBasketArr[i].quantity;
}
let basketSup = document.querySelector(".basketSup");

basketSup.textContent = `${quantityAll}`;
let favSup = document.querySelector(".favSup");
let quantityFavSup = 0;
quantityFavSup = localFavArr.length + localBasketArr.length;
favSup.textContent = `${quantityFavSup}`;
if (!Array.isArray(localBasketArr)) {
  localBasketArr = [];
}
let total = 0;
let count = 0;
let quantityCount = 0;
let quantity = 0;

axios("http://localhost:3000/meals").then((res) => {
  tBody.innerHTML = "";

  res.data.forEach((data) => {
    let found = localBasketArr.find((element) => element.id == data.id);
    if (found) {
      count++;
      quantity = found.quantity;
      quantityAll = data.quantity;

      let totalPrice = data.price * quantity;
      let sumPrice = 0;
      total += totalPrice;

      sumPrice += total;
      sum.innerHTML = `${sumPrice}`;
      tBody.innerHTML += `<tr>
        <th scope="row">${count}</th>
        <td>${data.name}</td>
        <td><img style="width: 50px; height: 50px;" src="${data.image}" /></td>
        <td>${data.price}</td>
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

  increase.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mealId = btn.getAttribute("name");
      let found = localBasketArr.find((item) => item.id == mealId);
      if (found) {
        found.quantity++;
        localStorage.setItem("basket", JSON.stringify(localBasketArr));
        btn.parentElement.previousElementSibling.previousElementSibling.textContent =
          found.quantity;

        btn.parentElement.previousElementSibling.textContent =
          found.quantity *
          Number(
            btn.parentElement.previousElementSibling.previousElementSibling
              .previousElementSibling.textContent
          );
      }
    });
  });
  let decrease = document.querySelectorAll(".decrease");

  decrease.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mealId = btn.getAttribute("name");
      console.log(mealId);
      let found = localBasketArr.find((item) => item.id == mealId);
      if (found && found.quantity > 1) {
        found.quantity--;
        localStorage.setItem("basket", JSON.stringify(localBasketArr));
        btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
          found.quantity;
        btn.parentElement.previousElementSibling.previousElementSibling.textContent =
          found.quantity *
          Number(
            btn.parentElement.previousElementSibling.previousElementSibling
              .previousElementSibling.previousElementSibling.textContent
          );
      }
    });
  });
  deleteBasket.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const mealId = btn.getAttribute("name");
      localBasketArr = localBasketArr.filter((item) => item.id !== mealId);
      btn.parentElement.parentElement.remove();
      localStorage.setItem("basket", JSON.stringify(localBasketArr));
    });
  });
  let checkout = document.querySelector(".checkout");
  checkout.addEventListener("click", function (e) {
    e.preventDefault();

    axios("http://localhost:3000/users").then((res) => {
      let userInfo = JSON.parse(localStorage.getItem("users")) || [];

      let user = res.data.find((user) => user.id == userInfo.usersId);

      axios.patch(`http://localhost:3000/users/${user.id}`, {
        balance: user.balance,
      });
      let balance = user.balance;
      if (balance > total) {
        user.balance = balance - total;
        total = 0;

        this.parentElement.nextElementSibling.firstElementChild.nextElementSibling.textContent = 0;

        var uniqueID = Math.random().toString(16).slice(2);
        console.log(uniqueID);

        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString();
        console.log(currentTime);
        let order = {
          userId: uniqueID,
          time: currentTime,
        };

        user.order.push(order);
        console.log(order);
        axios.patch(`http://localhost:3000/users/${user.id}`, {
          order: user.order,
        });
      } else if (balance < 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You don't have any balance",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You don't have enough balance",
        });
      }
    });
  });
});

removeAll.addEventListener("click", function () {
  localStorage.removeItem("basket");
  tBody.innerHTML = "";
});
